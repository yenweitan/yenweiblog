const siteMetadata = {
  title: 'Hi there! 🍜',
  author: 'Yen Wei Tan',
  headerTitle: 'Website',
  description: 'My little corner in the vast parts of the internet',
  language: 'en-us',
  theme: 'system', // system, dark or light
  siteUrl: 'https://yenweiblog.vercel.app/,',
  siteRepo: 'https://github.com/yenweitan/yenweiblog',
  siteLogo: '',
  image: '/static/images/yenwei.jpeg',
  socialBanner: '',
  email: 'yenwei9761@gmail.com',
  github: 'https://github.com/yenweitan',
  twitter: 'https://twitter.com/springOnion76',
  facebook: '',
  instagram: '',
  linkedin: 'https://www.linkedin.com/in/yen-wei-tan-588326160/',
  locale: 'en-US',
  analytics: {
    // supports plausible, simpleAnalytics or googleAnalytics
    plausibleDataDomain: '', // e.g. tailwind-nextjs-starter-blog.vercel.app
    simpleAnalytics: false, // true or false
    googleAnalyticsId: 'G-K69D8748KM', // e.g.UA-000000-2 or G-XXXXXXX
  },
  newsletter: {
    // supports mailchimp, buttondown, convertkit, klaviyo
    // Please add your .env file and modify it according to your selection
    provider: 'buttondown',
  },
  comment: {
    // Select a provider and use the environment variables associated to it
    // https://vercel.com/docs/environment-variables
    provider: 'giscus', // supported providers: giscus, utterances, disqus
    giscusConfig: {
      // Visit the link below, and follow the steps in the 'configuration' section
      // https://giscus.app/
      repo: 'yenweitan/yenweiblog',
      repositoryId: 'R_kgDOHZNwvA',
      category: 'Comments',
      categoryId: 'DIC_kwDOHZNwvM4CPSPH',
      mapping: 'pathname', // supported options: pathname, url, title
      reactions: '1', // Emoji reactions: 1 = enable / 0 = disable
      // Send discussion metadata periodically to the parent window: 1 = enable / 0 = disable
      metadata: '0',
      // theme example: light, dark, dark_dimmed, dark_high_contrast
      // transparent_dark, preferred_color_scheme, custom
      theme: 'light',
      // theme when dark mode
      darkTheme: 'dark_protanopia',
      // If the theme option above is set to 'custom`
      // please provide a link below to your custom theme css file.
      // example: https://giscus.app/themes/custom_example.css
      themeURL: '',
    },
    utterancesConfig: {
      // Visit the link below, and follow the steps in the 'configuration' section
      // https://utteranc.es/
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO,
      issueTerm: '', // supported options: pathname, url, title
      label: '', // label (optional): Comment 💬
      // theme example: github-light, github-dark, preferred-color-scheme
      // github-dark-orange, icy-dark, dark-blue, photon-dark, boxy-light
      theme: '',
      // theme when dark mode
      darkTheme: '',
    },
    disqusConfig: {
      // https://help.disqus.com/en/articles/1717111-what-s-a-shortname
      shortname: process.env.NEXT_PUBLIC_DISQUS_SHORTNAME,
    },
  },
}

module.exports = siteMetadata
