import * as SecureStore from 'expo-secure-store';
import { useCallback } from 'react';

type StorageKey = 'session';
type StorageValue = string | null;

export const useStorageState = () => {
  const getStorageItem = useCallback(
    async (key: StorageKey): Promise<StorageValue> =>
      await SecureStore.getItemAsync(key),
    [],
  );

  const setStorageItem = useCallback(
    async (key: StorageKey, value: Exclude<StorageValue, null>) => {
      await SecureStore.setItemAsync(key, value);
    },
    [],
  );

  const removeStorageItem = useCallback(
    async (key: StorageKey) => await SecureStore.deleteItemAsync(key),
    [],
  );

  return {
    getStorageItem,
    setStorageItem,
    removeStorageItem,
  };
};
