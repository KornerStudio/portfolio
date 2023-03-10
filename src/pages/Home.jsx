import Skills from "../components/Skills.jsx"
import Experience from "../components/Experience"
import Contact from "../components/Contact"
import Header from "../components/Header/Header"
import Section from '../components/Section';
import Resume from '../components/Resume';

const Home = () => {
  return (
    <div >
      <Header/>
      <Section>
        <Resume/>
      </Section>
      <Section title="Skills">
        <Skills/>
      </Section>
      <Section title="Experience">
        <Experience/>
      </Section>
      <Section title="Contact">
        <Contact/>
      </Section>
    </div>
  );
}

export default Home;
