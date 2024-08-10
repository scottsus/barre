import Image, { StaticImageData } from "next/image";
import { cn } from "~/lib/utils";

import yoga from "public/images/yoga.jpeg";
import groupYoga from "public/images/group_yoga.jpeg";
import flexibility from "public/images/flexibility.jpeg";

export function ProgramsPage() {
  return (
    <div className="flex h-screen w-full flex-col items-center gap-x-10 gap-y-20 p-20">
      <h1 className="text-6xl">Angels that inspire YOU to move</h1>
      <div className="flex gap-x-4">
        <Card
          src={yoga}
          alt="Yoga"
          contents={{
            handle: "angelgirl",
            program: "Core Barre",
            description:
              "Our signature Core Barre is tailored to sculpt your most perfect self.",
          }}
          className="w-1/3"
        />
        <Card
          src={groupYoga}
          alt="Group Yoga"
          contents={{
            handle: "kimberlymay",
            program: "Flow Barre",
            description:
              "Our Flow Barre is designed to relax and elongate your spine to feel its best.",
          }}
          className="w-1/3"
        />
        <Card
          src={flexibility}
          alt="Flexible Girl"
          contents={{
            handle: "chloealexandra",
            program: "Flexibility Barre",
            description:
              "Our Flexibility Barre class will leave you refreshed and energized.",
          }}
          className="w-1/3"
        />
      </div>
    </div>
  );
}

function Card({
  src,
  alt,
  contents,
  className,
}: {
  src: StaticImageData;
  alt: string;
  contents: {
    handle: string;
    program: string;
    description: string;
  };
  className?: string;
}) {
  return (
    <div
      className={cn(className, "flex h-full flex-col border border-primary")}
    >
      <Image src={src} alt={alt} />
      <div className="flex flex-col items-start gap-y-1 p-10">
        <p className="mb-8 text-lg">@{contents.handle}</p>
        <h3 className="text-3xl">{contents.program}</h3>
        <p className="text-lg">{contents.description}</p>
      </div>
    </div>
  );
}
