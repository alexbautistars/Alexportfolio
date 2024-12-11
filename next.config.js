const path = require('path');  

module.exports = {  

  // Sass options  
  sassOptions: {  
    includePaths: [path.join(__dirname, 'styles')],  
  },  

  // Configure external images  
  images: {  
    remotePatterns: [  
      {  
        protocol: 'https',  
        hostname: 'res.cloudinary.com',  
        pathname: '**',  
      },  
      {  
        protocol: 'https',  
        hostname: 'media.dev.to',  
        pathname: '**',  
      },  
      {  
        protocol: 'https',  
        hostname: 'media2.dev.to', // Allows access to any path under this hostname  
        pathname: '**',  
      },  
    ],  
  },  
};