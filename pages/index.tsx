/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import Link from 'next/link'
import About from '../components/About'
import Contact from '../components/Contact'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import WorkExperience from '../components/WorkExperience'

type Props = {}

const Home = (props: Props) => {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#003abf]/40'>
      <Head>
        <title>Rina Joy Abu Portfolio</title>
      </Head>

      <Header />

      <section id="hero" className='snap-start'>
        <Hero />
      </section>

      <section id="about" className='snap-center'>
        <About />
      </section>

      <section id="experience" className='snap-center'>
        <WorkExperience />
      </section>

      <section id="skills" className='snap-start'>
        <Skills />
      </section>

      <section id="projects" className='snap-start'>
        <Projects />
      </section>

      <section id="contact" className='snap-start'>
        <Contact />
      </section>

      {/* TO TOP BUTTON */}
      {/* <Link href="#hero">
        <footer className='sticky bottom-32 md:bottom-5 w-full cursor-pointer'>
          <div className='flex items-center justify-end md:justify-center pr-3 md:pr-0'>
            <img 
              className='h-8 w-8 md:h-10 md:w-10 rounded-full filter grayscale hover:grayscale-0'
              src="to-top-arrow.png" 
              alt="to top picture" 
            />
          </div>
        </footer>
      </Link> */}
    </div>
  )
}

export default Home;
