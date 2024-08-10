import { cn } from "~/lib/utils";

import { QuoteIcon } from "lucide-react";

export function ReviewsPage() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-x-10 gap-y-32 p-20">
      <h1 className="text-6xl">In the Press</h1>
      <div className="flex justify-around">
        <Review
          content="Boost your product and service's credibility by adding testimonials from your clients. People love recommendations so feedback from others who've tried it is invaluable."
          author="Santa Solana Post"
          className="w-1/4"
        />
        <Review
          content="Boost your product and service's credibility by adding testimonials from your clients. People love recommendations so feedback from others who've tried it is invaluable."
          author="Marianna's Luxe Travels"
          className="w-1/4"
        />
        <Review
          content="Boost your product and service's credibility by adding testimonials from your clients. People love recommendations so feedback from others who've tried it is invaluable."
          author="Fairhill Journal"
          className="w-1/4"
        />
      </div>
    </div>
  );
}

function Review({
  content,
  author,
  className,
}: {
  content: string;
  author: string;
  className?: string;
}) {
  return (
    <div className={cn(className, "flex h-full flex-col gap-y-10")}>
      <QuoteIcon fill="primary" />
      <p>{content}</p>
      <div>
        <p>-</p>
        <p>{author}</p>
      </div>
    </div>
  );
}
