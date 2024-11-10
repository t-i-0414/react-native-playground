import { SessionProvider } from '@/providers/SessionProvider';
import { Slot } from 'expo-router';

const Root = () => (
  <SessionProvider>
    <Slot />
  </SessionProvider>
);
export default Root;
