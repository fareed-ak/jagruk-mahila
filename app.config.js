const appJson = require('./app.json');

module.exports = ({ config }) => {
  const baseConfig = config ?? appJson.expo;

  return {
    ...baseConfig,
    ios: {
      ...baseConfig.ios,
      infoPlist: {
        ...(baseConfig.ios?.infoPlist || {}),
        NSAppTransportSecurity: {
          ...(baseConfig.ios?.infoPlist?.NSAppTransportSecurity || {}),
          NSAllowsArbitraryLoads: true,
        },
      },
    },
    android: {
      ...baseConfig.android,
      usesCleartextTraffic: true,
    },
    extra: {
      ...baseConfig.extra,
      apiBaseUrl:
        process.env.EXPO_PUBLIC_API_BASE_URL ||
        baseConfig.extra?.apiBaseUrl ||
        'https://your-backend-domain.com',
    },
  };
};
