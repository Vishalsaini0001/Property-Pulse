import Link from "next/link";

export default function homePage() {
  
  return (
   <main>
    <div>
      
      <h1 className="text-3xl text-red-500">welcome</h1>
      <Link href="/properties">go to properties</Link>
    </div>
   </main>
  );
}
