import { ConfigContext, ExpoConfig } from 'expo/config';

export default ({ config }: ConfigContext): ExpoConfig => {
  const baseConfig: ExpoConfig = {
    name: 'react-native-playground',
    slug: 'react-native-playground',
    version: '1.0.0',
    orientation: 'portrait',
    icon: './src/assets/images/icon.png',
    scheme: 'myapp',
    userInterfaceStyle: 'automatic',
    splash: {
      image: './src/assets/images/splash.png',
      resizeMode: 'contain',
      backgroundColor: '#ffffff',
    },
    ios: {
      supportsTablet: true,
    },
    android: {
      adaptiveIcon: {
        foregroundImage: './src/assets/images/icon.png',
        backgroundColor: '#ffffff',
      },
    },
    plugins: [
      'expo-router',
      'expo-font',
      'expo-secure-store',
      [
        'expo-build-properties',
        {
          android: {
            enableProguardInReleaseBuilds: true,
            enableShrinkResourcesInReleaseBuilds: true,
          },
        },
      ],
    ],
    experiments: {
      typedRoutes: true,
    },
    owner: 'takudev',
    newArchEnabled: true,
    extra: {
      eas: {
        projectId: 'da88fac7-88c8-4253-aad0-199edb247635',
      },
      storybookEnabled: process.env.STORYBOOK_ENABLED || false,
    },
  };

  return {
    ...baseConfig,
    ...(process.env.STORYBOOK_ENABLED && {
      name: `${baseConfig.name}-storybook`,
      slug: `${baseConfig.slug}-storybook`,
      icon: './src/assets/images/icon-storybook.png',
      splash: {
        ...baseConfig.splash,
        image: './src/assets/images/splash-storybook.png',
        resizeMode: 'cover',
      },
    }),
  };
};
