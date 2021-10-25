/* eslint-disable react/jsx-no-target-blank */

import React from "react";

import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useThemeContext from "@theme/hooks/useThemeContext";
import Layout from "@theme/Layout";
import clsx from "clsx";
import dedent from "dedent";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import styles from "./styles.module.scss";

const FEATURES = [
  {
    title: "Low-code integration",
    imageUrl: "img/feature-relax.svg",
    description: (
      <>
        Get everything ready in 5 minutes, customize later. Let our AI system do everything for you.{" "}
        <a href="/guides/get-started" target="_self">
          Try it now
        </a>
        .
      </>
    ),
  },
  {
    title: "Create custom templates",
    imageUrl: "img/feature-design.svg",
    description: (
      <>We guide you through all the steps to create your own designs and bring them to life with React or Vue.</>
    ),
  },
  {
    title: "Community driven",
    imageUrl: "img/feature-collaborate.svg",
    description: (
      <>
        All of this pages are{" "}
        <a href="https://github.com/useflyyer/flyyer-docs" target="_blank">
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
  const config = siteConfig as Record<string, any>;
  return (
    <Layout
      title={`Create dynamic image previews and integrate them`}
      description={dedent`
        Enables companies to present the best possible links for every page of their website when it is shared. Just take a Flyyer template and use it everywhere to superpower your website.
      `}
    >
      <header className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{config.title}</h1>
          <p className="hero__subtitle">{config.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(styles.button, "button button--secondary button--lg", styles.getStarted)}
              to={useBaseUrl("guides/get-started")}
            >
              Integration guides
            </Link>
            <Link
              className={clsx(styles.button, "button button--outline button--lg", styles.getStarted)}
              style={{ color: "white" }}
              to={useBaseUrl("docs/")}
            >
              Custom templates
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
