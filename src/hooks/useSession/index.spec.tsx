import { useSession } from '@/hooks/useSession';
import { SessionProvider } from '@/providers/SessionProvider';
import { renderHook, waitFor } from '@testing-library/react-native';
import React, { ReactNode } from 'react';

describe('useSession', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should return the context value', () => {
    const Wrapper = ({ children }: { children: ReactNode }) => (
      <SessionProvider>{children}</SessionProvider>
    );
    const { result } = renderHook(() => useSession(), { wrapper: Wrapper });

    waitFor(() => {
      expect(result.current).toEqual({
        signIn: expect.any(Function),
        signOut: expect.any(Function),
        session: null,
        isLoading: true,
      });
    });
  });
});
