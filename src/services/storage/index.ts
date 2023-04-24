import AsyncStorage from '@react-native-async-storage/async-storage';

type Store = {
  key: string,
  value: string | object
}

export const store_data = async (data: Store) => {
  const { key, value } = data

  try {
    const value_string = typeof value !== 'string'
      ? JSON.stringify(value)
      : value

    await AsyncStorage.setItem(key, value_string)
  } catch (error) {
    console.log('[ERROR-STORE-DATA] => ', error)
  }
}

export const get_data = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(key)
    
    return value ? JSON.parse(value as string) : ''
  } catch(error) {
    console.log('[ERROR-GET-DATA] => ', error)
  }
}

export const store_task = async (task: Store) => {
  const { key, value } = task

  try {
    let actual_data = await get_data(key)

    const new_data = actual_data
      ? [...actual_data, value]
      : [value]

    await store_data({
      key: 'tasks',
      value: new_data
    })
  } catch (error) {
    console.log('[ERROR-STORE-TASK] => ', error)
  }
}

export const clear = async () => await AsyncStorage.clear()