module.exports = {
    title: 'Smartloop',
    description: 'A Conversational AI Platform to Automate Marketing',
    base : '/',
    themeConfig: {
        nav: [
          {text: 'Home', link: 'https://smartloop.ai' }
          , { text: 'Dashboard', link: 'https://dashboard.smartloop.ai' }
          , { text: 'Blog', link: 'https://blog.recime.io' }
        ],
        sidebar: [
            '/getting-started',
            '/basic-concepts',
            '/capturing-user-input',
            '/redirect-using-go-to',
            '/json-api',
            '/how-to-entities',
            '/sequence',
            '/broadcasting',
            '/configure-website-bot',
            '/working-with-variables',
            '/developer-features',
            '/capabilities',
            '/resources'
          ]
          ,lastUpdated: 'Last Updated' // string | boolean
      }
  }