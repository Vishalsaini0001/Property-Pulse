'use client';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const propertiespage = () => {
  const router = useRouter();
 

  return (
    <div>
      <h1 className="text-3xl text-red-500">properties page</h1>
     <Link href="/">Go to home page</Link>
    </div>
  )
}

export default propertiespage;