import { useStaticQuery, graphql } from 'gatsby';

const useSiteMetadata = function () {
  const { allSite } = useStaticQuery(
    graphql`
      query {
        allSite {
          nodes {
            siteMetadata {
              author
              description
              siteURL
              title
            }
          }
        }
      }
    `
  );
  return allSite.nodes[0].siteMetadata;
};

export default useSiteMetadata;
