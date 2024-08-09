import { HeroPage } from "./pages/hero";
import { WelcomePage } from "./pages/welcome";

export default function HomePage() {
  return (
    <main className="flex size-full flex-col items-center justify-center bg-secondary text-primary">
      <HeroPage />
      <WelcomePage />
    </main>
  );
}
