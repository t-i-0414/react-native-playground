import { useSession } from '@/hooks/useSession';
import { SignInScreen } from '@/screens/SignInScreen';
import Constants from 'expo-constants';
import { Redirect } from 'expo-router';

const App = () => {
  const { session } = useSession();

  if (session) {
    return <Redirect href="/home" />;
  }

  return <SignInScreen />;
};

const AppEntryPoint =
  Constants.expoConfig?.extra?.storybookEnabled === 'true'
    ? require('../../.storybook').default
    : App;

export default AppEntryPoint;
