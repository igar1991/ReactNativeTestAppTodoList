import React, {useState, useContext} from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import { Header } from './src/components/Header';
import { MainScreen } from './src/screens/MainScreen';
import { TodoScreen } from './src/screens/TodoScreen';
import { TodoContext } from './src/context/todoContext';
import { ScreenContext } from './src/context/screen/screenContext';



export const MainLayout = ()=> {

  const screenContext = useContext(ScreenContext)
  
    return (
        <View>
          <Header title = "Todo App" />
            <View  style={styles.container}>
              { screenContext.todoId ? <TodoScreen /> : <MainScreen /> }
            </View>
        </View>
      );
}

const styles = StyleSheet.create({
    container: {
      padding: 10
    }
  });

