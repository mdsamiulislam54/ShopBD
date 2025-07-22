import Image from "next/image";
import Banner from "@/app/components/Home/Banner/Banner";
import Products from '@/app/components/Home/Products/Products'

export default function Home() {
  return (
      <div>
        <Banner/>
        <Products/>
      </div>
  );
}
