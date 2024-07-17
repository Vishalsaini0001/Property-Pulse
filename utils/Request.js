const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null;

//fetch all the properties from database
async function fetchProperties() {
  try {
    //if the domain not available return empty error rather then it throws error
    if(!apiDomain){
        return [];
    }
    const res = await fetch(`${apiDomain}/properties`,{ cache: 'no-store'});

    if (!res.ok) {
      throw new Error("failed to fetch data");
    }
    return res.json();
  } catch (error) {
    console.log(error);
    return [];
  }
} 

//fetch single propery from the database

async function fetchProperty(id) {
  try {
    //if the domain not available return empty error rather then it throws error
    if(!apiDomain){
        return null;
    }
    const res = await fetch(`${apiDomain}/properties/${id}`);

    if (!res.ok) {
      throw new Error("failed to fetch data");
    }
    return res.json();
  } catch (error) {
    console.log(error);
    return null;
  }
}
export { fetchProperties , fetchProperty };
