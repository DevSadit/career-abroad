import CoursesSection from "@/app/_landing/courses/CoursesSection";
import Courses from "@/app/_shared/Courses";
import vedio_courses from "@/data/vedio_courses.json";

export const metadata = {
  title: "Courses | Career Abroad Mentor",
  description:
    "Explore all Career Abroad courses — University Application, SOP, Scholarships, Visa, CV/LOR, and Emailing.",
};

export default function CoursesPage() {
  return (
    <main className="min-h-screen bg-white">
      <CoursesSection />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <Courses courses={vedio_courses} />
      </div>
    </main>
  );
}
