import { useStorageState } from '@/hooks/useStorageState';
import {
  createContext,
  type PropsWithChildren,
  useEffect,
  useState,
} from 'react';

export const SessionContext = createContext<{
  signIn: () => void;
  signOut: () => void;
  session?: string | null;
  isLoading: boolean;
}>({
  signIn: () => null,
  signOut: () => null,
  session: null,
  isLoading: false,
});

export const SessionProvider = ({ children }: PropsWithChildren) => {
  const { getStorageItem, setStorageItem, removeStorageItem } =
    useStorageState();
  const [session, setSession] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getSession = async () => {
      const session = await getStorageItem('session');
      setSession(session);
      setIsLoading(false);
    };
    getSession();
  }, [getStorageItem]);

  return (
    <SessionContext.Provider
      value={{
        signIn: () => {
          setSession('test');
          setStorageItem('session', 'test');
        },
        signOut: () => {
          setSession(null);
          removeStorageItem('session');
        },
        session,
        isLoading,
      }}
    >
      {children}
    </SessionContext.Provider>
  );
};
