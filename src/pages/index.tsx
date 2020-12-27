/* eslint-disable react/jsx-no-target-blank */

import React from "react";

import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useThemeContext from "@theme/hooks/useThemeContext";
import Layout from "@theme/Layout";
import clsx from "clsx";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import styles from "./styles.module.scss";

const FEATURES = [
  {
    title: "Create previews now",
    imageUrl: "img/feature-design.svg",
    description: (
      <>
        We will guide you trought all the required steps to create your own designs and bring them to life with React
        and Vue.
      </>
    ),
  },
  {
    title: "Concise and up-to-date",
    imageUrl: "img/feature-search.svg",
    description: (
      <>
        These are the official docs and guides, lead by the same people building{" "}
        <a href="https://flayyer.io" target="_blank">
          Flayyer.io
        </a>
        {" and "}
        <a href="https://flayyer.com" target="_blank">
          Flayyer.com
        </a>
        .
      </>
    ),
  },
  {
    title: "Community driven",
    imageUrl: "img/feature-collaborate.svg",
    description: (
      <>
        All of this pages are{" "}
        <a href="https://github.com/flayyer/flayyer-docs" target="_blank">
          open-source
        </a>{" "}
        and open to every contribution. {"Let's"} build a better community!
      </>
    ),
  },
];

function Feature({ imageUrl, title, description }: any) {
  const { isDarkTheme } = useThemeContext();

  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx("col col--4", styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={clsx(styles.featureImage, isDarkTheme && styles.featureImageDark)} src={imgUrl} alt={title} />
        </div>
      )}
      <h3 className="text--center">{title}</h3>
      <p className="text--center">{description}</p>
    </div>
  );
}

export default function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout title={`Hello from ${siteConfig.title}`} description="Description will go into a meta tag in <head />">
      <header className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(styles.button, "button button--outline button--lg", styles.getStarted)}
              to={useBaseUrl("docs/")}
            >
              Create Flayyers
            </Link>
            <Link
              className={clsx(styles.button, "button button--secondary button--lg", styles.getStarted)}
              to={useBaseUrl("guides/")}
            >
              Integration guides
            </Link>
          </div>
        </div>
      </header>
      <main>
        {FEATURES && FEATURES.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {FEATURES.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}
