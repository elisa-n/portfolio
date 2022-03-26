var path = require('path');
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
};
module.exports = nextConfig;
