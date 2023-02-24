/** @type {import('next').NextConfig} */
const API_KEY = process.env.API_KEY;
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/api/movies",
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
      },
      {
        source: "/api/movie/:id",
        destination: `https://api.themoviedb.org/3/movie/:id?api_key=${API_KEY}`,
      },
      {
        source: "/api/movie/:id/videos",
        destination: `https://api.themoviedb.org/3/movie/:id/videos?api_key=${API_KEY}`,
      },
      {
        source: "/api/tv",
        destination: `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}`,
      },
      {
        source: "/api/tv/:id",
        destination: `https://api.themoviedb.org/3/tv/:id?api_key=${API_KEY}`,
      },
      {
        source: "/api/tv/:id/videos",
        destination: `https://api.themoviedb.org/3/tv/:id/videos?api_key=${API_KEY}`,
      },
      {
        source: "/api/video/:key",
        destination: `https://www.youtube.com/embed/:key`,
      },
    ];
  },
  images: {
    domains: ["image.tmdb.org"],
    images: {
      loader: "custom",
    },
  },
};

module.exports = nextConfig;
