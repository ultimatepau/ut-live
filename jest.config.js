module.exports = {
  'moduleNameMapper': {
    // '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/tools/assetsTransformer.js',
    // '\\.(css|less)$': '<rootDir>/tools/assetsTransformer.js',
    // '\\.(css|less|scss|sss|styl)$': '<rootDir>/node_modules/jest-css-modules',
    // 'swiper/scss/lazy': '<rootDir>/node_modules/swiper/swiper.scss',
    // 'swiper/scss/autoplay': '<rootDir>/node_modules/swiper/swiper.scss',
    // '@/utils': '<rootDir>/src/utils/index.js'
  },
  'setupFiles': [
    'raf/polyfill',
    // './tools/enzymeTestAdapterSetup.js'
  ],
  'collectCoverageFrom': [
    // 'src/components/**/*.js',
    // 'src/utils/*.js'
    'src/**',
  ],
  'testEnvironment': 'jsdom',
  // 'setupFilesAfterEnv': ['./tools/setupTests.js'],
  'coveragePathIgnorePatterns': [
  ],
};
