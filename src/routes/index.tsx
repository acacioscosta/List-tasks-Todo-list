import { NativeStackNavigationProp, createNativeStackNavigator } from '@react-navigation/native-stack'
import { RouteProp } from '@react-navigation/native'

import { colors } from '../global_styles'
import Home from '../screens/Home'
import TaskGeneral from '../screens/TaskGeneral'
import TaskShopping from '../screens/TaskShopping'
import AddTask from '../screens/AddTask'

const Stack = createNativeStackNavigator()

type StackNavigation = {
  Home: undefined;
  AddTask: undefined;
  TaskGeneral: {
    title: string
  };
  TaskShopping: {
    title: string
  }
}

export type StackTypes = NativeStackNavigationProp<StackNavigation>
export type TaskGeneralRouteProp = RouteProp<StackNavigation, 'TaskGeneral'>
export type TaskShoppingRouteProp = RouteProp<StackNavigation, 'TaskShopping'>

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
        name='TaskGeneral'
        component={TaskGeneral}
        options={{
          title: 'Geral',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: colors.primary
          },
          headerTintColor: colors.secondary
        }}
      />

      <Stack.Screen
        name='TaskShopping'
        component={TaskShopping}
        options={{
          title: 'Compras',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: colors.primary
          },
          headerTintColor: colors.secondary
        }}
      />
    </Stack.Navigator>
  )
}