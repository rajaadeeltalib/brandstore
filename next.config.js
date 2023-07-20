/** @type {import('next').NextConfig} */
const nextConfig = {

  experimental: { appDir: true },
  webpack(config) {
    config.experiments = { ...config.experiments, topLevelAwait: true }
    return config
  },
    env: {
        SPACE_ID: "1g59yh9r4kc9",
        CONTENTFUL_ACCESS_KEY: "vKSKh8sCqhd9M--o7kvfa1E76Q5-T8ZCzUqL6u8SoO4"
      },
      images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'images.ctfassets.net', 
            port: '',
          },
          {
            protocol: 'https',
            hostname: 'cdn.sanity.io', 
            port: '',
          },
        ],
      },
}

module.exports = nextConfig
