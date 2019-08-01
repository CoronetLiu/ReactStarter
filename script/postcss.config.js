const AutoPreFixer = require('autoprefixer');
const CssNaNo = require('cssnano');
module.exports = {
  plugins: [
    AutoPreFixer({
      browsers: ['> 1%', 'last 5 version'],
      cascade: false,
    }),
    CssNaNo(),
  ],
};
