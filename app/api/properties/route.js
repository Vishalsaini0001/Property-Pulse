import connectDB from "@/config/Database";
import Property from "@/models/Property";

//api/properties
export const GET = async (request) => {
  try {
    await connectDB();
    const properties = await Property.find({});
    
    return new Response(JSON.stringify(properties), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("somthing went wrong", { status: 500 });
  }
};
