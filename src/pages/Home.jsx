import React from "react";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import SkillsGrid from "../components/Skills/SkillsGrid";
import Projects from "../components/Projects/Projects";
import Timeline from "../components/Timeline/Timeline";
import ContactForm from "../components/Contact/ContactForm";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <SkillsGrid />
      <Projects />
      <Timeline />
      <ContactForm />
    </>
  );
}
