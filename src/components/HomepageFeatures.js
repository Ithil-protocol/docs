import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Quickly get started',
    image: require('../../static/img/home/quick.png').default,
    description: (
      <>
        Follow the 5 mins tutorial and start using the protocol now.
      </>
    ),
  },
  {
    title: 'Focus on what matters',
    image: require('../../static/img/home/direct.png').default,
    description: (
      <>
        Learn about the core functions and how to take the most out of it.
      </>
    ),
  },
  {
    title: 'Deep dive into details',
    image: require('../../static/img/home/thorough.png').default,
    description: (
      <>
        Go beyond the surface and see how things work under the hood.
      </>
    ),
  },
];

function Feature({image, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={image} className={styles.featureImg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
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
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
