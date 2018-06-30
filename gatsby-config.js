module.exports = {
  siteMetadata: {
    title: `MEH Treatment Guidelines`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-custom-blocks",
            options: {
              blocks: {
                danger: "custom-block-danger",
                info: "custom-block-info",
              },
            },
          },
        ],
      },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
  ],
}
