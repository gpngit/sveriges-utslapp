/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['sw'],
    defaultLocale: 'sw',
  },
  
  reactStrictMode: true,
  compiler: {styledComponents:true}
}

module.exports = nextConfig
