module.exports = {
  siteMetadata: {
    title: 'zwj',
    siteUrl: `https://wedding.ddnszwj.top`,
  },
  plugins: [
    `gatsby-plugin-gatsby-cloud`,
    // {
    //   resolve: `gatsby-plugin-create-client-paths`,
    //   options: { prefixes: [`/app/*`] },
    // },
    // "gatsby-plugin-image",
    // "gatsby-plugin-sharp",
    "gatsby-plugin-sass",
    // 'gatsby-plugin-mantine',
    // "gatsby-transformer-yaml",
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `data`,
    //     path: `${__dirname}/config`,
    //     ignore: [`**/\.*`], // ignore files starting with a dot
    //   },
    // },
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true, // defaults to false
        jsxPragma: `jsx`, // defaults to "React"
        allExtensions: true, // defaults to false
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /images/ // See below to configure properly
        }
      }
    },
  ],
};
