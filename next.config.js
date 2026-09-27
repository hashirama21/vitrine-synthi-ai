/** @type {import('next').NextConfig} */
const nextConfig = {
    // Export statique (HTML/CSS/JS) pour l'hébergement sur GitHub Pages.
    output: 'export',
    // GitHub Pages sert des fichiers statiques : chaque route devient un dossier/index.html.
    trailingSlash: true,
    images: {
      // Le loader d'optimisation d'images de Next nécessite un serveur : on le désactive pour l'export.
      unoptimized: true,
      domains: [
        'www.automate.org',
        'syd.cloud.appwrite.io',
        'images.unsplash.com',
        'cdn.sanity.io',
        'cdn.pixabay.com',
        'd2ds8yldqp7gxv.cloudfront.net', // Notez qu'il ne faut pas le "https://"
        'encrypted-tbn0.gstatic.com', // Idem ici
        'fra.cloud.appwrite.io'
      ],
    },
  };
  
  module.exports = nextConfig;