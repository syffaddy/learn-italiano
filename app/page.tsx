import Hero from "./components/Hero";
import Levels from "./components/Levels";
import Comparison from "./components/Comparison";
import Reviews from "./components/Reviews";
import Course from "./components/Course";
import Faq from "./components/Faq";

export default function Home() {
  return (
    <>
      <Hero />
      <Levels />
      <Comparison />
      <Reviews />
      <Course />
      <Faq />
    </>
  );
}
