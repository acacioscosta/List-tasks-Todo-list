import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native'

import Routes from './src/routes'
import { colors } from './src/global_styles';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style='light' backgroundColor={colors.primary} />
      <Routes />
    </NavigationContainer>
  );
}
