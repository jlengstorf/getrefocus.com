require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  plugins: [
    'gatsby-plugin-theme-ui',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-theme-marketing-sanity',
      options: {
        sanity: {
          projectId: process.env.GATSBY_SANITY_PROJECT_ID,
          dataset: process.env.GATSBY_SANITY_DATASET,
        },
      },
    },
  ],
};
