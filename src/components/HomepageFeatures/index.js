import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Node.js',
    description: (
      <>
        Node.js is a runtime environment that allows you to run JavaScript code outside of a web browser.
      </>
    ),
  },
  {
    title: 'Express.js',
    description: (
      <>
        Express.js is a minimal and flexible web application framework for Node.js. It provides a robust set of features to develop web and mobile applications.
      </>
    ),
  },
  {
    title: 'SQLite',
    description: (
      <>
        SQLite is a lightweight, self-contained, serverless, and open-source relational database management system (RDBMS).
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
        <div className={clsx('col col--3')}>
            <div className="text--center">
            </div>
            <div className="text--center padding-horiz--md">
              <Heading as="h3">Frontend Development</Heading>
              <p className='text--justify'>Frontend development involves creating the visual and interactive components of a website or application that users directly interact with, typically using HTML, CSS, and JavaScript.</p>
            </div>
          </div>
          <div className={clsx('col col--3')}>
            <div className="text--center">
            </div>
            <div className="text--center padding-horiz--md">
              <Heading as="h3">Mobile-First Design</Heading>
              <p className='text--justify'>Mobile-first design is an approach to web design and development where the mobile version of a website or application is prioritized in terms of layout, functionality, and user experience.</p>
            </div>
          </div>
          <div className={clsx('col col--3')}>
            <div className="text--center">
            </div>
            <div className="text--center padding-horiz--md">
              <Heading as="h3">Backend Development</Heading>
              <p className='text--justify'>Backend development involves creating and managing the server-side logic, databases, and application architecture that enable the functionality and data processing of a website or application.</p>
            </div>
          </div>
          <div className={clsx('col col--3')}>
            <div className="text--center">
            </div>
            <div className="text--center padding-horiz--md">
              <Heading as="h3">Version Control</Heading>
              <p className='text--justify'>Version control is a system that tracks and manages changes to files over time, allowing multiple collaborators to work on a project simultaneously, track revisions, and revert to previous versions when needed.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
