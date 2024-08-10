import { MailIcon, MapPinIcon, SmartphoneIcon } from "lucide-react";
import { Button } from "./button";

export function Footer() {
  return (
    <div className="text-tertiary mb-0 mt-auto flex h-[36rem] w-full flex-col justify-start gap-y-10 bg-primary px-40 py-16">
      <h1 className="text-tertiary text-4xl">Get in our newsletter!</h1>
      <Button className="w-1/4 text-primary">EMAIL ADDRESS</Button>
      <div className="flex h-72 gap-x-10">
        <div className="border-tertiary flex h-full w-1/3 flex-col gap-y-6 border p-10">
          <h3 className="text-2xl">Follow Us</h3>
          <p className="flex gap-x-2">
            <MapPinIcon />
            Arcade Business Center 2nd Floor 6-05, Pantai Indah Kapuk
          </p>
          <p className="flex gap-x-2">
            <SmartphoneIcon />
            1123-456-7890
          </p>
          <p className="flex gap-x-2">
            <MailIcon />
            barreangels@gmail.com
          </p>
        </div>

        <div className="border-tertiary flex h-full w-1/3 flex-col gap-y-6 border p-10">
          <h3 className="text-2xl">Opening Hours</h3>
          <p className="flex gap-x-2">Monday to Friday 7:00 am to 8:00 pm</p>
          <p className="flex gap-x-2">Saturday to Sunday 7:00 am to 4:00 pm</p>
        </div>

        <div className="border-tertiary flex h-full w-1/3 flex-col gap-y-6 border p-10">
          <h3 className="text-2xl">Get Social</h3>
        </div>
      </div>
    </div>
  );
}
