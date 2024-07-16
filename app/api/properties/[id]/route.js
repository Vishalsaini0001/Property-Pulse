import connectDB from "@/config/Database";
import Property from "@/models/Property";

//api/properties
export const GET = async (request, {params}) => {
  try {
    await connectDB();
    const property = await Property.findById(params.id);

    if(!property) return new Response('Property Not Found!',{ status: 404})
    
    return new Response(JSON.stringify(property), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("somthing went wrong", { status: 500 });
  }
};
