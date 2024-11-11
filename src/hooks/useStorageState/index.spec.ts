import { useStorageState } from './';
import { act, renderHook } from '@testing-library/react-native';

describe('useStorageState', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const key = 'session';

  describe('getStorageItem', () => {
    it('should return the storage value', async () => {
      jest.spyOn(require('expo-secure-store'), 'getItemAsync');

      const {
        result: {
          current: { getStorageItem },
        },
      } = renderHook(() => useStorageState());

      act(() => {
        getStorageItem(key);
      });

      expect(require('expo-secure-store').getItemAsync).toHaveBeenCalledTimes(
        1,
      );
      expect(require('expo-secure-store').getItemAsync).toHaveBeenCalledWith(
        key,
      );
    });
  });

  describe('setStorageItem', () => {
    it('should set the storage item', async () => {
      jest.spyOn(require('expo-secure-store'), 'setItemAsync');

      const {
        result: {
          current: { setStorageItem },
        },
      } = renderHook(() => useStorageState());

      act(() => {
        setStorageItem(key, 'testValue');
      });

      expect(require('expo-secure-store').setItemAsync).toHaveBeenCalledTimes(
        1,
      );
      expect(require('expo-secure-store').setItemAsync).toHaveBeenCalledWith(
        key,
        'testValue',
      );
    });
  });

  describe('removeStorageItem', () => {
    it('should remove the storage item', async () => {
      jest.spyOn(require('expo-secure-store'), 'deleteItemAsync');

      const {
        result: {
          current: { removeStorageItem },
        },
      } = renderHook(() => useStorageState());

      act(() => {
        removeStorageItem('session');
      });

      expect(
        require('expo-secure-store').deleteItemAsync,
      ).toHaveBeenCalledTimes(1);
      expect(require('expo-secure-store').deleteItemAsync).toHaveBeenCalledWith(
        key,
      );
    });
  });
});
