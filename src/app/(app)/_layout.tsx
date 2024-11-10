import { useSession } from '@/hooks/useSession';
import { Slot } from 'expo-router';
import { Redirect } from 'expo-router';

const AppLayout = () => {
  const { session } = useSession();

  return !session ? <Redirect href="/?expiring=true" /> : <Slot />;
};
export default AppLayout;
