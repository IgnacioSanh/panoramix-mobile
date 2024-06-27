module.exports = {
  presets: ['module:@react-native/babel-preset', '@babel/preset-typescript'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '~components': './src/components',
          '~contexts': './src/contexts',
          '~hooks': './src/hooks',
          '~images': './src/images',
          '~screens': './src/screens',
          '~theme': './src/theme',
          '~types': './src/types',
          '~utils': './src/utils',
        },
      }
    ]
  ]
};
