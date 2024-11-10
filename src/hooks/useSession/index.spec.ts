import { useSession } from '@/hooks/useSession';
import { renderHook } from '@testing-library/react-native';
import React from 'react';

describe('useSession', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should return the context value', () => {
    const mockContextValue = { user: 'testUser' };
    jest.spyOn(React, 'useContext').mockImplementation(() => mockContextValue);

    const { result } = renderHook(() => useSession());

    expect(result.current).toBe(mockContextValue);
  });
});
