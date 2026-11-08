import { Suspense } from "react";
import ClassesClient from "./ClassesClient";

export const metadata = {
  title: "Class Recordings | Career Abroad Mentor",
  description:
    "Watch your enrolled course recordings — France, Italy, Belgium, Belgium, Estonia. Verify your enrolled email to access the videos and downloadable resources.",
};

const Page = () => {
  return (
    <section className="min-h-screen bg-white py-10 sm:py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Suspense>
          <ClassesClient />
        </Suspense>
      </div>
    </section>
  );
};

export default Page;
