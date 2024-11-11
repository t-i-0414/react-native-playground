import { useSession } from '@/hooks/useSession';
import { SignInScreen } from '@/screens/SignInScreen';
import Constants from 'expo-constants';
import { Redirect, useLocalSearchParams } from 'expo-router';

export type UrlParams = {
  expiring?: string;
};

const App = () => {
  const { isLoading, session } = useSession();
  const { expiring } = useLocalSearchParams<UrlParams>();

  if (isLoading) {
    return null;
  }

  if (session) {
    return <Redirect href="/home" />;
  }

  return <SignInScreen hasExpired={expiring === 'true'} />;
};

const AppEntryPoint =
  Constants.expoConfig?.extra?.storybookEnabled === 'true'
    ? require('../../.storybook').default
    : App;

export default AppEntryPoint;
