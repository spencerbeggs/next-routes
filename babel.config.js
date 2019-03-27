
// Babel configuration used to compile the distributable library to 'dist/',
// and to compile sources (including TypeScript) for execution in Jest's environment.
// See https://babeljs.io/docs/en/config-files#file-relative-configuration


  
  // Only in the Jest environment, compile TypeScript sources

  
  module.exports = function(api) {
    api.cache(true);
    const presets = [
      "@babel/preset-react",
      '@babel/preset-env'
    ];

    if (process.env.NODE_ENV === 'test') {
      presets.push(
        '@zeit/next-typescript/babel'
      )
    }

    const plugins = [
      ["@babel/plugin-transform-runtime", { helpers: false }],
    ];

    return {
      presets,
      plugins
    }
  }