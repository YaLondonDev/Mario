const sassMatch = /\.s[ac]ss$/i;

export default {
  client: {
    test: sassMatch,
    use: [
      'style-loader',
      {
        loader: 'css-loader',
        options: {
          sourceMap: true,
          importLoaders: 2,
          modules: {
            localIdentName: '[local]__[hash:base64:5]',
          },
        },
      },
      'sass-loader',
      {
        loader: 'sass-resources-loader',
        options: {
          resources: 'src/styles/_variables.scss',
        },
      },
    ],
  },
  server: {
    test: sassMatch,
    loader: 'null-loader',
  },
};
