import Image from "next/image";
import instructors from "public/images/instructors.jpeg";

export function InstructorPage() {
  return (
    <div className="flex h-screen w-full items-center justify-around gap-x-10 p-20">
      <div className="flex h-1/2 w-1/2 flex-col items-start justify-around gap-y-2">
        <h1 className="text-8xl">
          Warm instructors that motivate and move YOU
        </h1>
        <p className="text-2xl">
          All instructors that will teach in Barre Angels are certified Barre
          instructors and have over 100 hours of training. Let our Barre experts
          guide you to reach your maximum!
        </p>
      </div>
      <Image src={instructors} alt="Instructors" className="w-1/3" />
    </div>
  );
}
