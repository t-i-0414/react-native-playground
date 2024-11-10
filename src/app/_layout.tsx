import { SessionProvider } from '@/providers/SessionProvider';
import { Slot } from 'expo-router';

const RootLayout = () => (
  <SessionProvider>
    <Slot />
  </SessionProvider>
);
export default RootLayout;
