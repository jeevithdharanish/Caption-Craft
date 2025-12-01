/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.(woff|woff2|eot|ttf|otf)$/i,
      issuer: { and: [/\.(js|ts|md)x?$/] },
      type: 'asset/resource',
    });
    
    // Suppress FFmpeg worker warnings
    config.ignoreWarnings = [
      { module: /node_modules\/@ffmpeg\/ffmpeg\/dist\/esm\/worker\.js/ }
    ];
    
    return config;
  },
}

module.exports = nextConfig

