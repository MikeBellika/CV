import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {
  education,
  ExperienceElement,
  projects,
  workExperience,
} from '../data/experience'

const Experience = (props: ExperienceElement) => {
  return (
    <div>
      <h3 className="text-xl">
        {props.company}{' '}
        {props.position != null && (
          <span className="text-sky-700"> | {props.position}</span>
        )}
      </h3>
      <h4 className="py-2">
        {props.dateStart}
        {props.dateEnd ? ` - ${props.dateEnd}` : ''}
      </h4>
      {props.highlights && (
        <ul className="list-disc pl-5">
          {props.highlights.map((highlight, index) => (
            <li key={index}>{highlight}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

const ExperienceSection = (props: {
  children: JSX.Element | JSX.Element[]
  title: string
}) => {
  return (
    <section className="border-t-2 border-black pt-4">
      <h2 className="text-2xl font-bold pb-2 bg-clip-text text-transparent w-min bg-gradient-to-r from-indigo-600 to-sky-600 whitespace-nowrap">
        {props.title}
      </h2>
      {props.children}
    </section>
  )
}

const SocialLink = (props: { children: (JSX.Element | string)[] }) => {
  return (
    <a
      className="underline w-fit text-sky-600 items-center flex gap-x-2 cursor-pointer bg-clip-text hover:text-transparent hover:bg-gradient-to-r to-cyan-400 from-sky-600"
      target="_blank"
    >
      {props.children}
    </a>
  )
}

const Home: NextPage = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <Head>
        <title>CV - Mike Bellika</title>
        <meta
          name="description"
          content="Developer with four years of professional experience. Recently I have been working mostly with Typescript, developing a Next.js frontend and a Firebase functions backend. I have a big interest in cybersecurity and take part in Capture the Flag competitions."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="flex flex-col justify-start items-center bg-gradient-to-br from-blue-100 to-slate-300 gap-y-4 p-4">
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
          <div className="flex flex-row gap-x-4 md:flex-col">
            <section className="text-left py-2">
              <h2 className="text-2xl font-medium">Contact</h2>
              <ul className="flex flex-col gap-2 mt-2">
                <li>
                  <Link passHref href={'mailto:mike@bellika.dk'}>
                    <SocialLink>
                      <Image
                        src="/mail.svg"
                        width={24}
                        height={24}
                        alt="Mail icon"
                      />
                      mike@bellika.dk
                    </SocialLink>
                  </Link>
                </li>
                <li>
                  <Link
                    passHref
                    href={'https://www.linkedin.com/in/mikebellika/'}
                  >
                    <SocialLink>
                      <Image
                        src="/github.svg"
                        width={24}
                        height={24}
                        alt="Github icon"
                      />
                      mikeBellika
                    </SocialLink>
                  </Link>
                </li>
                <li>
                  <Link passHref href={'https://github.com/MikeBellika'}>
                    <SocialLink>
                      <Image
                        src="/linkedin.svg"
                        width={24}
                        height={24}
                        alt="LinkedIn icon"
                      />
                      MikeBellika
                    </SocialLink>
                  </Link>
                </li>
                <li>
                  <Link passHref href={'tel:+4553561263'}>
                    <SocialLink>
                      <Image
                        src="/phone.svg"
                        width={24}
                        height={24}
                        alt="Phone icon"
                      />
                      +45 53 56 12 63
                    </SocialLink>
                  </Link>
                </li>
                <li>
                  <Link
                    passHref
                    href={
                      'https://www.google.com/maps/place/Else+Alfelts+Vej+52N,+6.+th,+2300+K%C3%B8benhavn/'
                    }
                  >
                    <SocialLink>
                      <Image
                        src="/home.svg"
                        width={24}
                        height={24}
                        alt="Location icon"
                      />
                      Copenhagen S, Denmark
                    </SocialLink>
                  </Link>
                </li>
              </ul>
            </section>
            <section className="text-left md:w-full">
              <h2 className="text-2xl font-medium">Languages</h2>
              <ul className="flex flex-col gap-2 mt-2">
                <li>Danish</li>
                <li>English</li>
              </ul>
            </section>
          </div>
        </div>
      </header>

      <main className="flex flex-col p-4">
        <div className="w-full lg:w-2/3 2xl:w-1/2 flex flex-col gap-y-4">
          <ExperienceSection title="About me">
            <p>
              Developer with four years of professional experience. Recently I
              have been working mostly with Typescript, developing a Next.js
              frontend and a Firebase functions backend. I have a big interest
              in cybersecurity and take part in Capture the Flag competitions.
            </p>
          </ExperienceSection>
          <ExperienceSection title="Experience">
            <div className="gap-y-4 flex flex-col">
              {workExperience.map((experience, index) => (
                <Experience {...experience} key={index} />
              ))}
            </div>
          </ExperienceSection>
          <ExperienceSection title="Education">
            <div className="gap-y-4 flex flex-col">
              {education.map((experience, index) => (
                <Experience {...experience} key={index} />
              ))}
            </div>
          </ExperienceSection>
          <ExperienceSection title="Projects">
            <div className="gap-y-4 flex flex-col">
              <ul className="list-disc pl-5">
                {projects.map((project, index) => (
                  <li key={index}>{project}</li>
                ))}
              </ul>
            </div>
          </ExperienceSection>
        </div>
      </main>
    </div>
  )
}

export default Home
