import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

// Import the appbadge.png image
import appBadgeImage from '@site/static/img/appbadge.png';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="hero-content-container">
        <div className="hero-content">
          <div className={styles.hero__title}>
            <Heading as="h1" className={styles.hero__title_text}>
              Welcome to Horizon <img src={appBadgeImage} alt="Horizon Badge" className={styles.hero__badge} />
            </Heading>
          </div>
          <p className={styles.hero__subtitle}>{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className="button button--secondary button--lg"
              href="https://invite.horizonbot.xyz"
            >
              Start exploring the unknown! 🚀
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  
  return (
    <Layout
      title={`Welcome`}
      description="Horizon offers a variety of space-related commands for your server using real-time data directly on your Discord server! <head />"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
