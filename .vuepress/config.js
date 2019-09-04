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
            '/how-to-entities',
            '/user-attributes',
            '/capturing-user-input',
            '/redirect-using-go-to',
            '/json-api',
            '/sending-email-notification',
            '/campaign',
            '/broadcasting',
            '/live-chat',
            '/configure-website-bot',
            '/viber-events',
            '/developer-features',
            '/api-access',
            '/collecting-user-data',
            '/templates',
            '/capabilities',
            '/resources'
          ]
          ,lastUpdated: 'Last Updated' // string | boolean
      },
      plugins: {
        'sitemap': {
          hostname: 'https://docs.smartloop.ai'
        }
      }
  }
