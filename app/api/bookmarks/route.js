import connectDB from "@/config/Database";
import User from "@/models/User";
import Property from "@/models/Property";
import { getSessionUser } from "@/utils/getSessionUser";

export const dynamic = "force-dynamic";

export const POST = async (request) => {
  try {
    await connectDB();

    const { propertyId } = await request.json();

    const sessionUser = await getSessionUser();

    if (!session || !session.UserId) {
      return new Response("user Id is Required", { status: 401 });
    }
    const { userId } = sessionUser;

    //find user in dataBase
    const user = await User.findOne({ _id: userId });

    // check if user's property is bookmarked
    let isBookMarked = user.bookmarks.includes(propertyId);
    let message;

    if (isBookMarked) {
      //if already bookmarked then remove it
      user.bookmarks.pull(propertyId);
      message = "Bookmark removed Successfully";
      isBookMarked = false;
    } else {
      //if not bookmarked then add it
      user.bookmarks.push(propertyId);
      message = "Bookmark added Successfully";
      isBookMarked = true;
    }

    await user.save();
    return new Response(JSON.stringify({ message, isBookMarked }), {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new Response("Something went Wrong!", { status: 500 });
  }
};
