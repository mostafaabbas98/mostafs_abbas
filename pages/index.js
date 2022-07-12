import Head from 'next/head';
import Hero from '../sections/Hero';
import AboutMe from '../sections/AboutMe';
import Skills from '../sections/Skills';
import Projects from '../sections/Projects';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main>
      <Head>
        <title>Mostafa Abbas</title>
        <meta name="description" content="mostafa abbas portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <AboutMe />
      <Skills />
      <Projects />
    </main>
  );
}
