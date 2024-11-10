import * as SecureStore from 'expo-secure-store';
import { useCallback, useEffect, useState } from 'react';

type StorageKey = 'session';
type StorageValue = string | null;

const getStorageItemAsync = async (key: StorageKey): Promise<StorageValue> =>
  await SecureStore.getItemAsync(key);

const setStorageItemAsync = async (key: StorageKey, value: StorageValue) => {
  if (value == null) {
    await SecureStore.deleteItemAsync(key);
  } else {
    await SecureStore.setItemAsync(key, value);
  }
};

export const useStorageState = (
  key: StorageKey,
): [[boolean, StorageValue], (value: StorageValue) => void] => {
  const [state, setState] = useState<StorageValue>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const load = async () => {
      const value = await getStorageItemAsync(key);
      setState(value);
      setIsLoading(false);
    };
    load();
  }, [key]);

  const setValue = useCallback(
    async (value: StorageValue) => {
      setState(value);
      await setStorageItemAsync(key, value);
    },
    [key],
  );

  return [[isLoading, state], setValue];
};
