import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';



export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
        <div className={clsx('col col--12 text--center')}>
          <h2>Instructors</h2>
        </div>
        <div className={clsx('col col--6')}>
            <div className="text--center">
            </div>
            <div className="text--center padding-horiz--md">
              <Heading as="h3">John Michael Gadot</Heading>

              <img src="img/gadot.png"></img>
            </div>
          </div>
          <div className={clsx('col col--6')}>
            <div className="text--center">
            </div>
            <div className="text--center padding-horiz--md">
              <Heading as="h3">Nico Amarilla</Heading>

              <img src="img/nico.png"></img>

            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
