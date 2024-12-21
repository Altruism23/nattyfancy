import Section1 from "@/components/Section1";
import { url } from "inspector";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-full min-h-screen bg-hero-pattern bg-cover bg-center">
      <Section1 />
    </div>
  );
}
