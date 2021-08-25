const path = require('path');


module.exports = {
  compress: true,
  webpack: (config) => {
    config.module.rules.push(
      {
        test: /\.md$/,
        use: 'raw-loader'
      }
    )

    return config
  },
  images: {
      domains: ['images.unsplash.com'],
    },
    async redirects() {
      return [
        {
          source: '/%E0%A6%87-%E0%A6%95%E0%A6%AE%E0%A6%BE%E0%A6%B0%E0%A7%8D%E0%A6%B8-%E0%A6%AC%E0%A6%BF%E0%A6%9C%E0%A6%A8%E0%A7%87%E0%A6%B8-%E0%A6%B6%E0%A7%81%E0%A6%B0%E0%A7%81',
          destination: '/services',
          permanent: true,
        },
      ]
    },
}