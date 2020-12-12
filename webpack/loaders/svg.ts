const svgMatch = /\.svg$/;

export default {
  client: {
    test: svgMatch,
    loader: '@svgr/webpack',
  },
  server: {
    test: svgMatch,
    loader: 'null-loader',
  },
};
