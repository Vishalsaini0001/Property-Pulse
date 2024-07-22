"use client";
import { useState, useEffect } from "react";
import Spiner from "@/components/Spiner";
import PropertyCard from "@/components/PropertyCard";
import { toast } from "react-toastify";

const SavedPropertyPage = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSavedProperties = async () => {
      try {
        const res = await fetch("/api/bookmarks");

        if (res.status === 200) {
          const data = await res.json();
          setProperties(data);
        } else {
          console.log(res.statusText);
          toast.error("Failed to fetch saved properties");
        }
      } catch (error) {
        console.log(error);
        toast.error("Failed to fetch saved properties");
      } finally {
        setLoading(false);
      }
    };
    fetchSavedProperties();
    
  }, []);
 
  return loading ? (<Spiner loading={loading}/>) : (
    <section className="px-4 py-6">
        <center className="text-3xl font-bold text-blue-500 mb-10 mt-10 text-center cursor-pointer hover:scale-110 transition">Saved Properties</center>
    <div className="container-xl lg:container m-auto px-4 py-6">
     
        {properties.length === 0 ? (
          <center>No saved properties</center>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {properties.map((property) =>(
        <PropertyCard key={property._id} property={property}/>
       ))}
      </div>
        )}
       
    </div>
  </section>
  );
};

export default SavedPropertyPage;
