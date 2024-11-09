import Constants from 'expo-constants';
import { Text, View } from 'react-native';

const App = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
};

const AppEntryPoint =
  Constants.expoConfig?.extra?.storybookEnabled === 'true'
    ? require('../../.storybook').default
    : App;

// eslint-disable-next-line import/no-default-export
export default AppEntryPoint;
