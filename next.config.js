/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: [
        'www.automate.org',
        'd2ds8yldqp7gxv.cloudfront.net', // Notez qu'il ne faut pas le "https://"
        'encrypted-tbn0.gstatic.com' // Idem ici
      ],
    },
  };
  
  module.exports = nextConfig;