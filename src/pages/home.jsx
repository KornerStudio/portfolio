import Skills from "../components/Skills.jsx"
import Experience from "../components/Experience"
import Contact from "../components/Contact"
import Header from "../components/Header/Header"
import Section from '../components/Section';

const Home = () => {
  return (
    <div >
      <Header/>
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
