const intro = {
  name: 'IZUZU RODEO',
  image: { location: "/images/izzrodeo.png", alt: 'Monkey go brrr' },
  main: 'A Variety Stream of content from the IZUZU RODEO Community',
  secondary: '',
  credentials: [
    { title: '', org: '', url: '' },
  ]
}

const links = {
  socials: [
    { username: 'IZZRODEO', org: 'Facebook', link: 'https://www.facebook.com/'},
    { username: 'izzrodeo', org: 'Twitter', link: 'https://twitter.com/'},
    { username: 'izzrodeo', org: 'Instagram', link: 'https://www.instagram.com/'},
  ],
  shop: [
    { username: '', org: '', link: '' },
  ],
  stream: [
    { username: 'izuzurodeo', org: 'Twitch', link: 'https://www.twitch.tv/'},
    { username: '5h0ddIsDxcW9yEMYltEnWK', org: 'Spotify', link: 'https://open.spotify.com/show/'},
    { username: 'UCPUaqPMKwGeIGZujEpHXrzA', org: 'YouTube', link: 'https://www.youtube.com/channel/'},
  ],
}

module.exports = {
  siteMetadata: {
    title: `IZUZU RODEO`,
    description: `${intro.main} | ${intro.secondary}`,
    author: `@izzrodeo`,
    image: intro.image, // Path to your image you placed in the 'static' folder
    twitterUsername: "@izzrodeo",
    url: `https://izzrodeo.com`,
    intro,
    links,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `vcaiii`,
        short_name: `vcaiii`,
        start_url: `/`,
        background_color: `#FFD700`,
        theme_color: `#FFD700`,
        display: `minimal-ui`,
        icon: `src/images/izz-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/ // See below to configure properly
        }
      }
    }
  ],
}
