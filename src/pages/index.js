import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import styles from './index.module.css';
import appBadgeImage from '@site/static/img/appbadge.png';
import discordLogo from '@site/static/img/discord.png'; // Import the Discord logo image
import astronaut1 from '@site/static/img/astronaut.png'; // Import astronaut image 1
import astronaut2 from '@site/static/img/astronaut2.png'; // Import astronaut image 2

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1200); // Set breakpoint for larger desktop view
    };

    // Initial check
    handleResize();

    // Event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="hero-content-container">
        <div className="hero-content">
          <div className={styles.hero__title}>
            <Heading as="h1" className={styles.hero__title_text}>
              Welcome to Horizon{' '}
              <img src={appBadgeImage} alt="Horizon Badge" className={styles.hero__badge} />
            </Heading>
          </div>
          <p className={styles.hero__subtitle}>{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx('button', 'button--secondary', 'button--lg', styles.buttonZoom)}
              href="https://invite.horizonbot.xyz"
            >
              <img
                src={discordLogo}
                alt="Discord Logo"
                className={styles.discordLogo}
              />{' '}
              <span style={{ marginLeft: '4px', marginBottom: '-3.5px' }}>Start exploring the unknown</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Astronaut images (only show on larger desktop screens) */}
      {isDesktop && (
        <>
          <img
            src={astronaut1}
            alt="Astronaut"
            className={styles.astronaut1}
          />
          <img
            src={astronaut2}
            alt="Astronaut 2"
            className={styles.astronaut2}
          />
        </>
      )}
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  
  return (
    <Layout
      title={`Welcome`}
      description="Horizon offers a variety of space-related commands for your server using real-time data directly on your Discord server!"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <div style={{ height: '4rem' }} /> {/* Adjust the height as needed */}
      </main>
    </Layout>
  );
}
