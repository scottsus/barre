import { cn } from "~/lib/utils";

import {
  CalendarIcon,
  CalendarRangeIcon,
  GraduationCapIcon,
} from "lucide-react";

export function PackagesPage() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-x-10 gap-y-32 p-20">
      <h1 className="w-full text-left text-6xl">Package Pricing</h1>
      <div className="mx-auto flex w-full justify-around">
        <Package
          icon={<GraduationCapIcon size={32} />}
          name="Student Package"
          price="1,250,000"
          benefits={[
            "Unlimited Package",
            "Valid for 1 month",
            "Includes registration fee",
          ]}
          className="w-1/3"
        />
        <Package
          icon={<CalendarIcon size={32} />}
          name="Monthly Package"
          price="1,500,000"
          benefits={[
            "Unlimited Package",
            "Valid for 1 month",
            "Includes registration fee",
          ]}
          className="w-1/3"
        />
        <Package
          icon={<CalendarRangeIcon size={32} />}
          name="Annual Package"
          price="6,250,000"
          benefits={[
            "Unlimited Package",
            "Valid for 1 month",
            "Includes registration fee",
          ]}
          className="w-1/3"
        />
      </div>
    </div>
  );
}

function Package({
  icon,
  name,
  price,
  benefits,
  className,
}: {
  icon: React.ReactNode;
  name: string;
  price: string;
  benefits: string[];
  className?: string;
}) {
  return (
    <div className={cn(className, "flex justify-center")}>
      <div className="flex flex-col items-start gap-y-4">
        <h3 className="flex w-full gap-x-2 text-2xl">
          <span>{icon}</span> {name}
        </h3>
        <p className="text-xl">IDR {price}</p>
        <ul className="list-inside list-disc text-lg">
          {benefits.map((benefit, index) => (
            <li key={index}>{benefit}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
