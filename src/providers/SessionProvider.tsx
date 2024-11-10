import { useStorageState } from '@/hooks/useStorageState';
import { createContext, type PropsWithChildren } from 'react';

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
  const [[isLoading, session], setSession] = useStorageState('session');

  return (
    <SessionContext.Provider
      value={{
        signIn: () => {
          // TODO: Implement sign in logic here.
          setSession('xxx');
        },
        signOut: () => {
          setSession(null);
        },
        session,
        isLoading,
      }}
    >
      {children}
    </SessionContext.Provider>
  );
};
