import Image from "next/image";

export const PropertyHeaderImage = ({ image }) => {
  return (
    <section>
      <div className="container-xl m-auto">
        <div className="grid grid-cols-1">
          <Image
            src={image}
            height={0}
            width={0}
            sizes="100vw"
            alt=""
            priority={true}
            className="object-cover h-[400px] w-full"
            
          />
        </div>
      </div>
    </section>
  );
};
