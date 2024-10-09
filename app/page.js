import ProfileOverview from "./components/ProfileOverview";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import WorkExperience from "./components/WorkExperience";
import Articles from "./components/Articles";
import ContactForm from "./components/ContactForm"; 
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <ProfileOverview />
      <Projects />
      <Skills />
      <WorkExperience />
      {/* <Articles /> */}
      <ContactForm />
      <Footer />
    </div>
  );
}
