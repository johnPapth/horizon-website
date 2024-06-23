import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Stay Informed about everything!',
    image: require('@site/static/img/automations.png').default,
    description: (
      <>
        Get notified about upcoming launches, events and many more. Never miss an astronomical event again!
      </>
    ),
  },
  {
    title: 'Explore the unknown!',
    image: require('@site/static/img/apod.png').default,
    description: (
      <>
        New space pictures, Mars rover snapshots, and more directly on your server. 
        Explore the the universe with your community!
      </>
    ),
  },
  {
    title: 'Interaction Commands made simple!',
    image: require('@site/static/img/interactions.png').default,
    description: (
      <>
        Interaction commands are here to make your life just a bit easier. Need a fast-forward short response? Give it a try!
      </>
    ),
  },
  {
    title: 'Customize your notifications!',
    image: require('@site/static/img/settings.png').default,
    description: (
      <>
        It's not one-size-fits-all. Why not customize your own notifications behavior? Easily configure them on Horizon.
      </>
    ),
  },
];

function Feature({ image, title, description }) {
  return (
    <div className={clsx('col col--12', styles.feature)}>
      <div className="text--center">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
      <div className="text--center">
        <img src={image} alt={title} className={styles.featureSvg} /> {/* Ensure correct className */}
      </div>
    </div>
  );
}

function CallToAction() {
  return (
    <div className={clsx('col col--12')}>
      <div className={clsx('text--center', styles.callToActionBox)}>
        <Heading as="h3">Join the Adventure!</Heading>
        <p>Join Horizon on Discord and start your astronomical journey today.</p>
        <a
          className="button button--primary button--lg"
          href="https://invite.horizonbot.xyz"
          target="_blank"
          rel="noopener noreferrer"
        >
          Invite Horizon
        </a>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className={clsx('header', 'container')}>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
        <div className="row">
          <CallToAction />
        </div>
      </div>
    </section>
  );
}
