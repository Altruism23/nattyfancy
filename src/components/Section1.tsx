import Image from "next/image";
import Link from "next/link";

export default function Section1() {
  const links = [
    {
      href: "https://www.instagram.com/nattyfancy.co/",
      label: "Instagram",
      logo: "/IG.png",
    },
    {
      href: "https://wa.me/+6283108871532",
      label: "Whatsapp 1",
      logo: "/WA.png",
    },
    {
      href: "https://wa.me/+6287886885788",
      label: "Whatsapp 2",
      logo: "/WA.png",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col text-center py-5 gap-3">
        <Image
          src={"/NattyFancy.jpg"}
          priority
          alt="logo"
          width={200}
          height={200}
          className="flex items-center justify-center rounded-full ring-4 ring-black shadow-md"
        />
        <p className="text-black text-4xl font-bold py-10">Natty Fancy</p>
      </div>
      <div className="w-full max-w-xs flex flex-col items-center text-center gap-4">
        {links.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            rel="noopener norefferer"
            target="_blank"
            className="flex items-center w-full py-3 px-5 text-white bg-gradient-to-r from-pink-800 to-red-800 rounded-full shadow-xl  transition"
          >
            {" "}
            <Image src={link.logo} alt="logo" width={50} height={50} className="rounded-md" />
            <span className="flex-1 text-lg font-medium transition hover:scale-105">{link.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
