module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'pokeapi.co',
          port: '',
          pathname: '/api/v2/pokemon/**',
        },
        {
          protocol: 'https',
          hostname: 'images.dog.ceo',
          port: '', 
          pathname: '/breeds/**'
        },
        {
          protocol: 'https',
          hostname: 'kimdolion-portfolio.s3.amazonaws.com',
          port: '',
          pathname: '/**'
        },
      ],
    },
  }