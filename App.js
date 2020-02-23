import React, {useState} from 'react';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { MainLayout } from './MainLayout';
import { TodoState } from './src/context/todoState';
import { ScreenState } from './src/context/screen/screenState';

//Загрузка шрифтов асинхронная
async function uploadFont() {
  await Font.loadAsync({
    'roboto-bold': require('./assets/font/Roboto-Bold.ttf'),
    'roboto-regular': require('./assets/font/Roboto-Regular.ttf')
  })
}

export default function App() {

  const [ready, setReady] = useState(false);

//Приложение загружается после подгрузки шрифтов
  if(!ready) {
    return<AppLoading
    startAsync = {uploadFont}
    onFinish = {()=> setReady(true)}
    onError = {console.log('warn')}
     />
  }

  return (
    <ScreenState>
    <TodoState>
        <MainLayout />
    </TodoState>
    </ScreenState>
  );
}
