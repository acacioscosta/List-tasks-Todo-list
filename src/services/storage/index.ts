import AsyncStorage from '@react-native-async-storage/async-storage';

type Store = {
  key: string,
  value: string | object
}

export const store_data = async (data: Store) => {
  const { key, value } = data

  try {
    await AsyncStorage.setItem(`@${key}`, value as string)
  } catch (error) {
    console.log('[ERROR-STORE-DATA] => ', error)
  }
}

export const store_task = async (task: string) => {
  try {
    const 
    await AsyncStorage.setItem(`@${key}`, value as string)
  } catch (error) {
    console.log('[ERROR-STORE-DATA] => ', error)
  }
}

export const get_data = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(`@${key}`)
    
    return JSON.parse(value)
  } catch(error) {
    console.log('[ERROR-GET-DATA] => ', error)
  }
}