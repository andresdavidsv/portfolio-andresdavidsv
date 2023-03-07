import { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { HomeIcon } from '@heroicons/react/24/solid';

import {
  fetchExperiences,
  fetchPageInfo,
  fetchProjects,
  fetchSkills,
  fetchSocials,
} from '@/utils';
import { Experience, PageInfo, Project, Skill, Social } from '@/interfaces';

import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { WorkExperience } from '@/components/WorkExperience';
import { Skills } from '@/components/Skills';
import { Projects } from '@/components/Projects';
import { Contact } from '@/components/Contact';

type Props = {
  pageInfo: PageInfo;
  // experiences: Experience[];
  // skills: Skill[];
  // projects: Project[];
  // socials: Social[];
};

const Home = ({ pageInfo }: Props) => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar-thin scrollbar-thumb-yellow-500/80">
      <Head>
        <title>Andres Portfolio</title>
      </Head>
      {/* Header */}
      <Header />
      {/* Hero */}
      <section id="hero" className="snap-start">
        <Hero pageInfo={pageInfo} />
      </section>
      {/* About */}
      <section id="about" className="snap-center">
        <About />
      </section>
      {/* Experience */}
      <section id="experience" className="snap-center">
        <WorkExperience />
      </section>
      {/* Skills */}
      <section id="skills" className="snap-start">
        <Skills />
      </section>
      {/* Project */}
      <section id="projects" className="snap-start">
        <Projects />
      </section>
      {/* Contact Me */}
      <section id="contact" className="snap-start">
        <Contact />
      </section>
      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <div className="h-10 w-10 bg-yellowColor/80 rounded-full flex items-center justify-center">
              <HomeIcon className="h-7 w-17 pb-0.5 hover:grayscale-100 text-white animate-pulse" />
            </div>
          </div>
        </footer>
      </Link>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo = await fetchPageInfo();
  // const experiences = await fetchExperiences();
  // const skills = await fetchSkills();
  // const projects = await fetchProjects();
  // const socials = await fetchSocials();

  return {
    props: {
      pageInfo,
      // experiences,
      // skills,
      // projects,
      // socials,
    },
    revalidate: 10,
  };
};
