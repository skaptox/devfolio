module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://elastic-meninsky-aa7c74.netlify.app/`,
    // Your Name
    name: 'Oscar Albornoz',
    // Main Site Title
    title: `Oscar Albornoz | Full-Stack Developer`,
    // Description that goes under your name in main bio
    description: `I feel happy with a laptop and a trail bike`,
    // Optional: Twitter account handle
    author: `@skaptox`,
    // Optional: Github account URL
    github: `https://github.com/skaptox`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/oscar-daniel-albornoz-mora-778415147/`,
    // Content of the About Me section
    about: `I am a Fullstack developer. I have 4 years of development experience building fullstack products from scratch, developing and integrating APIs, working with a variety of databases and clould platforms and developing mobile applications with React Native. `,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'Ignis Gravitas',
        description: 'Software Platform for Startups',
        link: 'http://ignisgravitas.com/',
      },
      {
        name: 'Pathscale',
        description: 'Landing page with CSS animations',
        link: 'https://www.pathscale.com/',
      },
      {
        name: 'Vue3-ui',
        description:
          'Very clean Vue3 components styled to integrate nicely with Bulma CSS.',
        link: 'https://github.com/RyanFitzgerald/devfolio',
      },
      {
        name: 'Mach4motors',
        description: 'eCommerce created from scratch',
        link: 'https://mach4motors--com.b-cdn.net/',
      },
      {
        name: 'RevCat Blast',
        description: 'Web based game',
        link: 'https://revenge.studio/b',
      },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'PathScale Pte Ltd',
        description: 'Fronted Developer, February 2020 - Present',
        link: 'https://www.pathscale.com/',
      },
      {
        name: 'Ignis Gravitas Inc',
        description: 'Full-Stack Developer, December 2017 - February 2020',
        link: 'https://github.com/RyanFitzgerald/devfolio',
      },
      {
        name: 'Red Vilagro',
        description: 'Full-Stack Developer, September 2019 - December 2019',
        link: 'https://redvilagro.com/',
      },
      {
        name: 'Dreamlopers',
        description: 'Full-Stack Developer, April 2019 - Octuber 2019',
        link: 'http://dreamlopers.com/',
      },
      {
        name: 'Tradex USA Logistics LLC',
        description: 'Full-Stack Developer, May 2019 - August 2019',
        link: 'https://www.linkedin.com/company/tradex-usa-logistics-llc/',
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages & Frameworks',
        description:
          'JavaScript (ES6+), Node.js, Express.js, React, Vue, Ruby on Rails, Laravel',
      },
      {
        name: 'Databases',
        description: 'MongoDB, PostreSQL, MySQL',
      },
      {
        name: 'Other',
        description:
          'Docker, Amazon Web Services (AWS), CI / CD, Microservices, API design, Agile / Scrum',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
