import { Footer } from "~/components/footer";
import { HeroPage } from "./pages/hero";
import { InstructorPage } from "./pages/instructors";
import { LocationsPage } from "./pages/locations";
import { PackagesPage } from "./pages/packages";
import { ProgramsPage } from "./pages/programs";
import { ReviewsPage } from "./pages/reviews";
import { WelcomePage } from "./pages/welcome";

export default function HomePage() {
  return (
    <main className="flex size-full flex-col items-center justify-center bg-secondary text-primary">
      <HeroPage />
      <WelcomePage />
      <InstructorPage />
      <ProgramsPage />
      <ReviewsPage />
      <PackagesPage />
      <LocationsPage />
      <Footer />
    </main>
  );
}
