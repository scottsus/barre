import Image from "next/image";
import ballerina from "public/images/ballerina.jpeg";
import { Button } from "~/components/button";

export function WelcomePage() {
  return (
    <div className="flex h-screen w-full items-center justify-between p-20">
      <div className="flex h-1/2 w-2/3 flex-col items-start justify-around gap-y-2">
        <h1 className="text-8xl">Welcome to the club!</h1>
        <p className="text-2xl">
          With over 10 classes offered daily, we provide a diverse range of
          sessions tailored to suit your needs and match your mood including
          Flow, Abs, Flexibility, Kpop, Core, and many more.
        </p>
        <Button>View Schedule</Button>
      </div>
      <Image src={ballerina} alt="Ballerina" className="w-1/4" />
    </div>
  );
}
