import Image from "next/image";

import locations from "public/images/locations.jpeg";

export function LocationsPage() {
  return (
    <div className="flex h-screen w-full flex-col items-center gap-x-10 gap-y-20 p-20">
      <div className="flex w-full gap-x-4">
        <div className="flex w-1/3 flex-col justify-center gap-y-10">
          <h3 className="text-6xl">Visit our locations!</h3>
          <p className="text-xl">
            Arcade Business Center 2nd Floor 6-05, Pantai Indah Kapuk
          </p>
          <p className="text-xl">07.00 - 20.00</p>
        </div>
        <Image src={locations} alt="Studio" className="w-2/3" />
      </div>
    </div>
  );
}
