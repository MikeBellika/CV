import Link from 'next/link'
import React from 'react'

export type ExperienceElement = {
  company: string
  position?: string
  dateStart: string
  dateEnd?: string
  highlights?: string[]
}

// Could do this as JSON, but then we'd lose type checking
export const workExperience: ExperienceElement[] = [
  {
    company: 'Komoku',
    dateStart: 'August 2021',
    dateEnd: 'Present',
    highlights: [
      'Implemented automatic build and deployment processes of Typescript projects using Github actions.',
      'Implemented a webapp for online ordering from scratch. The webapp is built with Next.js, Typescript, and TailwindCSS.',
      'Implemented automatic testing of webapp using Playwright.',
      'Worked on our Firebase backend. The backend is built with Cloud Functions for Firebase and uses Firestore as the database.',
      'Worked on an integration with an external Point of Sale system, via their REST API.',
    ],
  },
  {
    company: 'Danish Defence',
    dateStart: 'July 2019',
    dateEnd: 'July 2021',
    highlights: [
      'Worked with Python, PostgreSQL, Vue.js, Linux, security, Docker, and more.',
      'Taught a course for new employees on the internal tools we were building. The intended audience were mostly non technical employees.',
      'Helped teach and create teaching materials for a week long class on Python and software development.',
    ],
  },
  {
    company: 'Danish Defence',
    dateStart: 'September 2018',
    dateEnd: 'June 2019',
    highlights: ['Worked on creating a data processing framework in Python.'],
  },
  {
    company: 'Rent A/S',
    dateStart: '2017',
    dateEnd: '2018',
    highlights: [
      'Created and worked on a REST API in C#.',
      'Implemented an MSSQL database.',
      'Implemented a webapp with React, using the REST API.',
    ],
  },
  {
    company: 'Folkekirkens Nødhjælp',
    dateStart: '2016',
    dateEnd: '2018',
    highlights: [
      'Automatically generated reports with PHP and MySQL.',
      'Worked with external consultants on their CMS.',
      'Created a map visualation for Sogneindsamling.',
    ],
  },
]

export const education: ExperienceElement[] = [
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
    ],
  },
  {
    company: 'H.C. Ørsted Gymnasiet i Ballerup',
    position: 'High School',
    dateStart: '2013',
    dateEnd: '2016',
  },
]

export const projects: JSX.Element[] = [
  <>
    Qualified for the finals of the Danish Cyber Championships which will take
    place on the 7th. of May 2022{' '}
    <Link href="https://cybermesterskaberne.dk/">
      <a>https://cybermesterskaberne.dk/</a>
    </Link>
  </>,
  <>
    Made it to the boot camp for the Danish Hacking team in 2018 (Top 20 out of
    around 300 applicants).
  </>,
  <>Released a game on the Google Play Store in 2014.</>,
  <>
    Found and reported security vulnerabilities that would allow an attacker to
    take over other accounts on Skoleintra in 2010.
  </>,
]
