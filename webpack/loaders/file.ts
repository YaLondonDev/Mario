const fileMatch = /\.(png|jpg|gif|woff|woff2|eot|ttf|otf|wav)$/;

export default {
  client: {
    test: fileMatch,
    loader: 'file-loader',
  },
  server: {
    test: fileMatch,
    loader: 'null-loader',
  },
};
