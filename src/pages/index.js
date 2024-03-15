import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Authors from '@site/src/components/Authors';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <img src="img/devtalk2024_main_cover.png" alt='DevTalks 2024 - Embracing Innovation in Web Development'></img>
        {/* <Heading as="h1" className="hero__title">
          DevTalks 2024
        </Heading> */}
        {/* <p className="hero__subtitle">Embracing Innovation in Web Development</p> */}
        <br></br>
        <br></br>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/prerequisites">
            Start Bootcamp Course
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <Authors />
        <div class="container">
          <div class="row">
              <div class="col col--12"><h2 className='text--center'>List of Participants</h2></div>
              <div class="col col--3">
                <ol>
                  <li>Basa Rovie Sacayan</li>
                  <li>Belona Russel Garcia</li>
                  <li>Bongar Naneth Segovia </li>
                  <li>Brito Bless-L J Tabujara</li>
                  <li>Calsis Jan Sandie Mark Abaygar </li>
                  <li>Cuadra Asher Paul Magoliman</li>
                  <li>De Isidro Mark Leonel Didogol</li>
                  <li>Decena Jerlyn Ganila</li>
                  <li>Delgado Vince Carlo Anacita</li>
                  <li>Delgado Vince Carlo Anacita</li>
                  <li>Dellavan Rolyn Sean Co</li>
                  <li>Denuyo John Jeffrey Galve</li>

                </ol>
              </div>
              <div class="col col--3">
                <ol start={13}>
                  <li>Dogomeo Anna Lee Dizon</li>
                  <li>Ehmke Vanny Lubrido </li>
                  <li>Florendo Kim Jhon Omilig</li>
                  <li>Gagatam Jayson Von Bucol</li>
                  <li>Gagnao Mj Celfo</li>
                  <li>Galusong Mark Jesriel Derequito </li>
                  <li>Galvez Justine Silaya</li>
                  <li>Garvilles Floyd Galuno</li>
                  <li>Gasangan Daniel Clarito</li>
                  <li>Gatungay Maria Lea Espinetra </li>
                  <li>Gaugano Jemuel</li>
                  <li>Genilan Shegerra Mar Nava</li>
                </ol>
              </div>
              <div class="col col--3">
                <ol start={25}>
                  <li>Geonig Lykha G</li>
                  <li>Gerola Precy Marie Alob</li>
                  <li>Gustilo Karla Joy Navarro</li>
                  <li>Igbacol Angela Nicole None</li>
                  <li>Igpuara Princess Delgado </li>
                  <li>Juntarciego Lerry Joy Ga</li>
                  <li>Librezana Joshua Espestan</li>
                  <li>Lorite Kate Galia</li>
                  <li>Martinez Mia Lou Loquinte</li>
                  <li>Mascardo Clearie Ann Delgado</li>
                  <li>Mendoza Hannah Mae Galvan</li>
                </ol>
              </div>
              <div class="col col--3">
                <ol start={36}>
                  <li>Menor Felje Navales</li>
                  <li>Novera Renz Mabaquiao </li>
                  <li>Quilacio Fritz Noel Cabuguason </li>
                  <li>Reballos Lendon Casiple </li>
                  <li>Redaja Raj Granada</li>
                  <li>Revicencio Niña Marie Arenal</li>
                  <li>Santiaga Janine Galia</li>
                  <li>Sulatorio Chevy Jornadal </li>
                  <li>Temporosa Johanna Clair Sasa</li>
                  <li>Tortogo Lea Mae Gambol</li>
                </ol>
              </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
