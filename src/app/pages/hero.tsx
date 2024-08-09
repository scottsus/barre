import Image from "next/image";
import wings from "public/images/wings.png";

export function HeroPage() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center">
      <div className="relative">
        <Image
          src={wings}
          alt="Wings"
          className="contrast-105 h-auto w-full object-cover brightness-105"
        />
        <h1 className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 transform text-center text-9xl">
          Barre Angels
        </h1>
        <p className="absolute left-1/2 top-1/2 -translate-x-1/2 transform text-center text-6xl font-thin">
          Look good. Feel good. Stay young.
        </p>
      </div>
    </div>
  );
}
