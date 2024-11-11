import { useSession } from '@/hooks/useSession';
import { Slot } from 'expo-router';
import { Redirect } from 'expo-router';

const AppLayout = () => {
  const { isLoading, session } = useSession();

  if (isLoading) {
    return null;
  }

  if (!session) {
    return <Redirect href="/?expiring=true" />;
  }

  return <Slot />;
};
export default AppLayout;
