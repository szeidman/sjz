import React from "react";
import Helmet from "react-helmet";
import PostListing from "../components/PostListing/PostListing";
import About from "../components/About/About";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";
import Link from "gatsby-link";

class Index extends React.Component {
  render() {
    return (
      <div className="index-container">
        <Helmet title={config.siteTitle} />
        <h1>Bonjour</h1>
        <div>
          <Link to="/about/">About</Link><br />
          <a href="https://github.com/szeidman">Github</a><br />
          <a href="https://www.linkedin.com/in/samzeidman/">LinkedIn</a><br />
          <a href="http://www.samcode.org">Technical Blog</a><br />
          <Link to="https://rambletothesea.com">Cycling Tour Blog</Link><br />
        </div>
      </div>
    );
  }
}

export default Index;

/* eslint no-undef: "on"*/
export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            cover
            date
          }
        }
      }
    }
  }
`;
