import { NativeStackNavigationProp, createNativeStackNavigator } from '@react-navigation/native-stack'

import { colors } from '../global_styles'
import Home from '../screens/Home'
import Task from '../screens/Task'
import AddTask from '../screens/AddTask'

const Stack = createNativeStackNavigator()

type StackNavigation = {
  Home: undefined;
  AddTask: undefined;
}

export type StackTypes = NativeStackNavigationProp<StackNavigation>

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Home'
        component={Home}
        options={{
          title: 'Minhas listas',
          headerStyle: {
            backgroundColor: '#000'
          },
          headerShown: false,
          headerTintColor: colors.secondary
        }}
      />

      <Stack.Screen
        name='AddTask'
        component={AddTask}
        options={{
          title: 'Nova lista',
          headerStyle: {
            backgroundColor: colors.primary
          },
          headerTintColor: colors.secondary
        }}
      />

      <Stack.Screen
        name='Task'
        component={Task}
        options={{
          title: 'Lista',
          headerStyle: {
            backgroundColor: colors.primary
          },
          headerTintColor: colors.secondary
        }}
      />
    </Stack.Navigator>
  )
}