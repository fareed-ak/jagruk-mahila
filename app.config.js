const appJson = require('./app.json');

const PLACEHOLDER_API_BASE_URL = 'https://your-backend-domain.com';

const cleanBaseUrl = (value) => {
  if (!value || value === PLACEHOLDER_API_BASE_URL) return null;
  return value.replace(/\/$/, '');
};

module.exports = ({ config }) => {
  const baseConfig = config ?? appJson.expo;
  const configuredApiBaseUrl = cleanBaseUrl(
    process.env.EXPO_PUBLIC_API_BASE_URL ||
      baseConfig.extra?.apiBaseUrl,
  );
  const apiBaseUrl =
    configuredApiBaseUrl ||
    'https://jagruk-mahila.onrender.com';
  const chatApiBaseUrl =
    cleanBaseUrl(
      process.env.EXPO_PUBLIC_CHAT_API_BASE_URL ||
        baseConfig.extra?.chatApiBaseUrl,
    ) || apiBaseUrl;

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
      apiBaseUrl,
      chatApiBaseUrl,
      reportApiBaseUrl:
        cleanBaseUrl(process.env.EXPO_PUBLIC_REPORT_API_BASE_URL) ||
        apiBaseUrl,
    },
  };
};
