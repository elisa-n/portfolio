const path = require('path');
const withPWA = require('next-pwa');

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  images: {
    domains: ['cdn.sanity.io'],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    prependData: `@import "_variables.scss";`,
  },
  pwa: {
    dest: 'public',
    register: true,
    skipWaiting: true,
  },
};
module.exports = withPWA(nextConfig);
