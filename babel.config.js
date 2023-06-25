module.exports = function app(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
  };
};
