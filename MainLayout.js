import React, {useState, useContext} from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import { Header } from './src/components/Header';
import { MainScreen } from './src/screens/MainScreen';
import { TodoScreen } from './src/screens/TodoScreen';
import { TodoContext } from './src/context/todoContext';
import { ScreenContext } from './src/context/screen/screenContext';



export const MainLayout = ()=> {
    const todoContext = useContext(TodoContext)
    const screenContext = useContext(ScreenContext)
    const [todo, setTodo] = useState([]);
    const [newtodo, setNewtodo] = useState(null);

    //Добавление в масси дела
  const addUse = (title) => {
    setTodo((prev)=> [...prev,{
      id: Date.now().toString(),
      title
    }])
  }

  const idSubmit = (item)=> {
    setNewtodo(item)
  }
   
  //Удаление элемента
  const onRemoove = (id)=> {
    const todoRemoove = todo.find(t=>t.id==id)
    Alert.alert(
      'Удаление дела',
      `Вы действительно хотите удалить дело ${todoRemoove.title}?`,
      [
        {
          text: 'Отмена',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => {
          setNewtodo(null)
          setTodo(prev => prev.filter(t => t.id!==id))
        }},
      ],
      {cancelable: false},
    );
    
  }
  
  //Изменение элементов
  const changeTodo = (id, newTitle) => {
    setTodo(prev => prev.map(item => {
      if (item.id === id) {
        item.title = newTitle
      }
      return item;
    }) )
  }

  let content = ( <MainScreen todo = { todoContext.todos } addUse = { todoContext.addTodo } idSubmit = { screenContext.changeScreen } /> )

  if ( screenContext.todoId ) {
    content = (<TodoScreen idSubmit={screenContext.changeScreen} ntodo={screenContext.todoId} onRemoove = {todoContext.removeTodo} changeTodo = {todoContext.updateTodo} />)
  }


    
  
    return (
        <View>
          <Header title = "Todo App" />
            <View  style={styles.container}>
              {content}
            </View>
        </View>
      );
}

const styles = StyleSheet.create({
    container: {
      padding: 10
    }
  });

