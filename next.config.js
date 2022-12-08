/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['sv'],
    defaultLocale: 'sv',
  },
  
  reactStrictMode: true,
  compiler: {styledComponents:true}
}

module.exports = nextConfig
