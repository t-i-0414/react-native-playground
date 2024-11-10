import React from 'react';
import { Text, View } from 'react-native';

type Props = {
  hasExpired?: boolean;
};
export const SignInScreen: React.FC<Props> = ({ hasExpired }) => (
  <View
    style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <Text>Sign in</Text>
    {hasExpired && <Text>Session expired</Text>}
  </View>
);
