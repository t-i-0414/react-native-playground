import { useStorageState } from './';
import { renderHook, waitFor } from '@testing-library/react-native';

describe('useStorageState', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const key = 'session';
  const value = 'testValue';

  it('should return the initial state and a function to set the state', async () => {
    const { result } = renderHook(() => useStorageState(key));

    expect(result.current).toEqual([[true, null], expect.any(Function)]);
  });

  it('should get the state', async () => {
    jest
      .spyOn(require('expo-secure-store'), 'getItemAsync')
      .mockResolvedValue(value);
    const { result } = renderHook(() => useStorageState(key));

    waitFor(() => {
      expect(result.current).toEqual([[false, value], expect.any(Function)]);
    });
  });

  it('should remove the state', async () => {
    jest
      .spyOn(require('expo-secure-store'), 'getItemAsync')
      .mockResolvedValue(value);
    jest.spyOn(require('expo-secure-store'), 'deleteItemAsync');

    const { result } = renderHook(() => useStorageState(key));

    const [, setValue] = result.current;
    setValue(null);

    expect(require('expo-secure-store').deleteItemAsync).toHaveBeenCalledTimes(
      1,
    );
    expect(require('expo-secure-store').deleteItemAsync).toHaveBeenCalledWith(
      key,
    );
    waitFor(() => {
      expect(result.current).toEqual([[false, null], expect.any(Function)]);
    });
  });
});
