import PropertyCard from "@/components/PropertyCard";
import { fetchProperties } from "@/utils/Request";
import PropertySearchForm from "@/components/PropertySearchForm";

const propertiespage = async () => {
  const properties = await fetchProperties();
  properties.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
 
  return (
    <>
      <section className="bg-blue-700 py-4 border-t">
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-start sm:px-6 lg:px-8">
          <PropertySearchForm />
        </div>
      </section>
      
        <section className="px-4 py-6">
      <center className="text-blue-700 tracking-wider text-xl">
        Find your Perfect
      </center>
      <div className="container-xl lg:container m-auto px-4 py-6">
        {properties.length === 0 ? (
          <center>No Properties Found!</center>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {properties.map((property) => (
              <PropertyCard key={property._id} property={property} />
            ))}
          </div>
        )}
      </div>
    </section>
     
    </>
  );
};

export default propertiespage;
