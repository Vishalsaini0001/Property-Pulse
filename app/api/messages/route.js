import connectDB from "@/config/Database";
import Message from "@/models/Message";
import { getSessionUser } from "@/utils/getSessionUser";

export const dynamic = "force-dynamic";
 
//GET /api/messages
export const GET = async () => {
  try {
    await connectDB();
    const sessionUser = await getSessionUser();

    if (!sessionUser || !sessionUser.user) {
      return new Response(JSON.stringify("User ID is required"), {
        status: 401,
      });
    }
    
    const { userId } = sessionUser;

    const readMessages = await Message.find({ recipient: userId, read: true })
    .sort({createdAt: -1})
    .populate('sender', 'username')
    .populate('property', 'name');

   

    const UnreadMessages = await Message.find({ recipient: userId, read: false })
    .sort({createdAt: -1})
    .populate('sender', 'username')
    .populate('property', 'name');

    const messages = [...readMessages,...UnreadMessages]



    return new Response(JSON.stringify(messages),{status:200})
  } catch (error) {
    console.log(error);
    return new Response("Something went Wrong!", {
      status: 500,
    });
  }
};

//POST /api/messages
export const POST = async (request) => {
  try {
    await connectDB();

    const { name, email, phone, message, property, recipient } =
      await request.json();

    const sessionUser = await getSessionUser();

    if (!sessionUser || !sessionUser.user) {
      return new Response(
        JSON.stringify({ message: "You must logged in to send messages" }),
        {
          status: 401,
        }
      );
    }

    const { user } = sessionUser;

    //can not send message to self

    if (user.id === recipient) {
      return new Response(
        JSON.stringify({ message: "Can not send message to yourself" }),
        { status: 400 }
      );
    }
    const newMessage = new Message({
      sender: user.id,
      recipient,
      property,
      name,
      email,
      phone,
      body: message,
    });

    await newMessage.save();

    return new Response(JSON.stringify({ message: "Message Sent!" }), {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new Response("Something went Wrong!", {
      status: 500,
    });
  }
};
