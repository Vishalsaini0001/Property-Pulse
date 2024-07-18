"use client";
import { useEffect, useState, useef } from "react";
import Spiner from "@/components/Spiner";

import Image from "next/image";
import Link from "next/link";
import { useSession } from "next-auth/react";
import profileDefault from "@/assets/images/profile.png";

const ProfilePage = () => {
  const { data: session } = useSession();
  const profileImage = session?.user?.image;
  const profileUsername = session?.user?.name;
  const profileemail = session?.user?.email;

  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserProperties = async (userId) => {
      if (!userId) {
        return;
      }
      try {
        const res = await fetch(`/api/properties/user/${userId}`);
        if (res.status === 200) {
          const data = await res.json();
          setProperties(data);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    //fetch user properties if session available
    if (session?.user?.id) {
      fetchUserProperties(session.user.id);
    }
  }, [session]);

  const handleDeleteProperty =(propertyId)=>{
    
  }
  return (
    <section className="bg-blue-50">
      <div className="container m-auto py-24">
        <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
          <h1 className="text-3xl font-bold mb-4">Your Profile</h1>
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/4 mx-20 mt-10">
              <div className="mb-4">
                <Image
                  className="h-32 w-32 md:h-48 md:w-48 rounded-full mx-auto md:mx-0"
                  src={profileImage || profileDefault}
                  width={0}
                  height={0}
                  sizes="100vh"
                  alt="User"
                />
              </div>
              <h2 className="text-2xl mb-4">
                <span className="font-bold block">Name: </span>{" "}
                {profileUsername}
              </h2>
              <h2 className="text-2xl">
                <span className="font-bold block">Email: </span> {profileemail}
              </h2>
            </div>

            <div className="md:w-3/4 md:pl-4">
              <h2 className="text-xl font-semibold mb-4">Your Listings</h2>
              {!loading && properties.length === 0 && (
                <p>You Have No Property Listings</p>
              )}
              {loading ? (
                <Spiner loading={loading} />
              ) : (
                properties.map((property) => (
                  <div key={property._id} className="mb-10">
                    <Link href={`/properties/${property._id}`}>
                      <Image
                        className="h-32 w-full rounded-md object-cover"
                        src={property.images[0]}
                        width={500}
                        height={100}
                        priority={true}
                        alt="Property 1"
                      />
                    </Link>
                    <div className="mt-2">
                      <p className="text-lg font-semibold">{property.name}</p>
                      <p className="text-gray-600">
                        Address: {property.location.street}{" "}
                        {property.location.city} {property.location.state}
                      </p>
                    </div>
                    <div className="mt-2">
                      <Link
                        href={`/properties/${property._id}/edit`}
                        className="bg-blue-500 text-white px-3 py-3 rounded-md mr-2 hover:bg-blue-600"
                      >
                        Edit
                      </Link>
                      <button
                        onClick={() => handleDeleteProperty(property._id)}
                        className="bg-red-500 text-white px-3 py-2 rounded-md hover:bg-red-600"
                        type="button"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfilePage;
