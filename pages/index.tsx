import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const workExperience: ExperienceElement[] = [
  {
    company: 'Komoku',
    dateStart: 'August 2021',
    dateEnd: 'Present',
    highlights: [
      'Implemented automatic build and deployment processes of Typescript projects using Github actions.',
      'Implemented a webapp for online ordering from scratch. The webapp is built with Next.js, Typescript, and TailwindCSS.',
      'Implemented automatic testing of webapp using Playwright.',
      'Worked on our Firebase backend. The backend is built with Cloud Functions for Firebase and uses Firestore as the database.',
      'Worked on an integration with an external Point of Sale system, via their REST API.']
  },
  {
    company: 'Danish Defence',
    dateStart: 'July 2019',
    dateEnd: 'July 2021',
    highlights: [
      'Worked with Python, PostgreSQL, Vue.js, Linux, security, Docker, and more.',
      'Taught a course for new employees on the internal tools we were building. The intended audience were mostly non technical employees.',
      'Helped teach and create teaching materials for a week long class on Python and software development.',
    ]
  },
  {
    company: 'Danish Defence',
    dateStart: 'September 2018',
    dateEnd: 'June 2019',
    highlights: [
      'Worked on creating a data processing framework in Python.',
    ]
  },
  {
    company: 'Rent A/S',
    dateStart: '2017',
    dateEnd: '2018',
    highlights: [
      'Created and worked on a REST API in C\#.',
      'Implemented an MSSQL database.',
      'Implemented a webapp with React, using the REST API.',
    ]
  },
  {
    company: 'Folkekirkens Nødhjælp',
    dateStart: '2016',
    dateEnd: '2018',
    highlights: [
      'Automatically generated reports with PHP and MySQL.',
      'Worked with external consultants on their CMS.',
      'Created a map visualation for Sogneindsamling.',
    ]
  },
]

const education: ExperienceElement[] = [
  {
    company: 'SANS SEC757',
    position: 'Mobile Device Security and Ethical Hacking',
    dateStart: '2021',
  },
  {
    company: 'IT University of Copenhagen',
    position: 'BSc, Software Development',
    dateStart: '2016',
    dateEnd: '2019',
    highlights: [
      'My bachelor thesis was a security audit of a smart heat meter. We found a problem with the encryption used, that would allow an attacker to partially decrypt data and breach customer privacy.',
    ]
  },
  {
    company: 'H.C. Ørsted Gymnasiet i Ballerup',
    position: 'High School',
    dateStart: '2013',
    dateEnd: '2016',
  },
]

const projects: JSX.Element[] = [
  <>Qualified for the finals of the Danish Cyber Championships which will take place on the 7th. of May 2022 <Link href="https://cybermesterskaberne.dk/"><a>https://cybermesterskaberne.dk/</a></Link></>,
  <>Made it to the boot camp for the Danish Hacking team in 2018 (Top 20 out of around 300 applicants).</>,
  <>Released a game on the Google Play Store in 2014.</>,
  <>Found and reported security vulnerabilities that would allow an attacker to take over other accounts on Skoleintra in 2010.</>,
]

type ExperienceElement = {
  company: string;
  position?: string;
  dateStart: string;
  dateEnd?: string;
  highlights?: string[];
};

const Experience = (props: ExperienceElement) => {
  return (
    <div>
      <h3 className="text-xl">{props.company} {props.position != null && <span className='text-sky-700'> | {props.position}</span>}</h3>
      <h4 className='py-2'>
        {props.dateStart}{props.dateEnd ? ` - ${props.dateEnd}` : ''}
      </h4>
      {props.highlights &&
        <ul className="list-disc pl-5">
        {props.highlights.map((highlight, index) => (
          <li key={index}>{highlight}</li>
        ))}
      </ul>}
    </div>
  )
}

const Home: NextPage = () => {
  return (
    <div className='flex flex-col md:flex-row'>
      <Head>
        <title>CV - Mike Bellika</title>
        <meta
          name="description"
          content="Developer with four years of professional experience. Recently I have been working mostly with Typescript, developing a Next.js frontend and a Firebase functions backend. I have a big interest in cybersecurity and take part in Capture the Flag competitions."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="flex flex-col justify-start items-center bg-slate-300 gap-y-4 p-4">
        <div className="w-72 h-72 relative border-white border-4 rounded-full">
          <Image
            src="/me.jpeg"
            alt="A picture of me."
            className="rounded-full"
            layout="fill"
          />
        </div>
        <div className="items-center flex flex-col text-center">
          <div>
            <h1 className="text-3xl font-bold">Mike Bellika</h1>
            (est. 1997)
            <h2 className="text-xl">Software Developer</h2>
          </div>
          <section className='text-left py-2'>
            <h2 className='text-2xl font-medium'>Contact</h2>
            <ul className="flex flex-col gap-2 mt-2">
              <li>
                <Link href={'mailto:mike@bellika.dk'}>
                <a className="underline text-sky-600 items-center flex gap-x-2"><Image src='/mail.svg' width={24} height={24} alt='Mail icon' />mike@bellika.dk</a>
                </Link>
              </li>
              <li>
                <Link href={'https://www.linkedin.com/in/mikebellika/'}>
                  <a className="underline text-sky-600 items-center flex gap-x-2"><Image src='/github.svg' width={24} height={24} alt='Github icon' />mikeBellika</a>
                </Link>
              </li>
              <li>
                <Link href={'https://github.com/MikeBellika'}>
                  <a className="underline text-sky-600 items-center flex gap-x-2"><Image src='/linkedin.svg' width={24} height={24} alt='LinkedIn icon' />MikeBellika</a>
                </Link>
              </li>
              <li>
                <Link href={'tel:+4553561263'}>
                <a className="underline text-sky-600 items-center flex gap-x-2"><Image src='/phone.svg' width={24} height={24} alt='Phone icon' />+45 53 56 12 63</a>
                </Link>
              </li>
              <li>
                <Link
                  href={
                    'https://www.google.com/maps/place/Else+Alfelts+Vej+52N,+6.+th,+2300+K%C3%B8benhavn/'
                  }
                >
                  <a className="underline text-sky-600 items-center flex gap-x-2"><Image src='/home.svg' width={24} height={24} alt='Location icon' />Copenhagen S, Denmark</a>
                </Link>
              </li>
            </ul>
          </section>
          <section className='text-left w-full'>
            <h2 className='text-2xl font-medium'>Languages</h2>
            <ul className="flex flex-col gap-2 mt-2">
              <li>
                Danish
              </li>
              <li>
                English
              </li>
            </ul>
          </section>
        </div>
      </header>

      <main className="flex flex-col p-4">
        <div className="w-full lg:w-2/3 2xl:w-1/2 flex flex-col gap-y-4">
          <section className='border-t-2 border-black pt-4'>
            <h2 className="text-xl font-bold pb-2">About me</h2>
            <p>
              Developer with four years of professional experience. Recently I
              have been working mostly with Typescript, developing a Next.js
              frontend and a Firebase functions backend. I have a big interest
              in cybersecurity and take part in Capture the Flag competitions.
            </p>
          </section>
          <section className='border-t-2 border-black pt-4'>
            <h2 className="text-xl font-bold pb-2">Experience</h2>
            <div className='gap-y-4 flex flex-col'>
              {workExperience.map((experience, index) => (
                <Experience {...experience} key={index} />
              ))}
            </div>
          </section>
          <section className='border-t-2 border-black pt-4'>
            <h2 className="text-xl font-bold pb-2">Education</h2>
            <div className='gap-y-4 flex flex-col'>
              {education.map((experience, index) => (
                <Experience {...experience} key={index} />
              ))}
            </div>
          </section>
          <section className='border-t-2 border-black pt-4'>
            <h2 className="text-xl font-bold pb-2">Projects</h2>
            <div className='gap-y-4 flex flex-col'>
              <ul className='list-disc pl-5'>
              {projects.map((project, index) => (
                <li key={index} >{project}</li>
              ))}
              </ul>
                
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

export default Home
