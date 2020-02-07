import React, {useState} from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList, SafeAreaView } from 'react-native';
import { Header } from './src/Header';
import { AddTodo } from './src/AddTodo';
import { TodoList } from './src/TodoList';


export default function App() {

  const [todo, setTodo] = useState([]);

  //Добавление в масси дела
  const addUse = (title) => {
    setTodo((prev)=> [...prev,{
      id: Date.now().toString(),
      title
    }])
  }

  return (
    <View>
      <Header title = "Todo App" />
        <View  style={styles.container}>
          <AddTodo todo = {todo} addUse= {addUse} />
          <ScrollView>
          <FlatList
            data = {todo}
            renderItem={( ({ item }) => <TodoList title={item.title} /> )}
            keyExtractor={item => item.id}
            />
            </ScrollView>

        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10
  }
});
