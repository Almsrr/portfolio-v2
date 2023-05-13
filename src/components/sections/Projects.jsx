import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { renderRichText } from "gatsby-source-contentful/rich-text";

import classNames from "classnames";

import { useSiteContext } from "../../hooks";
import Heading from "./Heading";
import Picture from "../Picture";

export default function ProjectsSection() {
  const { isDarkThemeActive } = useSiteContext();
  const data = useStaticQuery(graphql`
    query {
      allContentfulProject {
        nodes {
          id
          title
          description {
            raw
          }
          externalReference
          roundedBorderSide
          image {
            gatsbyImageData
            filename
          }
        }
      }
    }
  `);

  const projectsListClassName = classNames("projects__list", {
    "light": !isDarkThemeActive,
    "dark": isDarkThemeActive,
  });

  const calculateRowNumber = (index, columns) => {
    return Math.floor(index / columns) + 1;
  };

  return (
    <section className="projects" id="projects">
      <div className="projects__container">
        <Heading>
          <h2>Projects</h2>
          <p>Award winning work</p>
        </Heading>
        <div className={projectsListClassName}>
          {data.allContentfulProject.nodes.map((p, i) => {
            const rowNum = calculateRowNumber(i, 2);
            const even = rowNum % 2 === 0;

            const projectCardClassName = classNames("project-card", {
              "normal": !even,
              "inverted": even,
            });

            return (
              <article key={p.id} className={projectCardClassName}>
                <Picture
                  className="image"
                  imageData={p.image}
                  roundedBorder={p.roundedBorderSide}
                />
                <div className="description">
                  <h3>{p.title}</h3>
                  {renderRichText(p.description)}
                  <a
                    href={p.externalReference}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa-solid fa-arrow-right-long" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
