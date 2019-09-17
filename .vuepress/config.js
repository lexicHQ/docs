module.exports = {
    title: 'Smartloop',
    description: 'Supercharge Lead Capture with Conversational AI.',
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
            '/templates',
            '/channel',
            '/developer-features',
            '/config-vars',
            '/api-access',
            '/collecting-user-data',
            '/capabilities',
            '/third-party-integrations',
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
