import React, {useState} from 'react';
import { StyleSheet, View } from 'react-native';
import { Header } from './src/components/Header';
import { MainScreen } from './src/screens/MainScreen';
import { TodoScreen } from './src/screens/TodoScreen';


export default function App() {

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

  const onRemoove = (id)=> {
    setNewtodo(null)
    setTodo(prev => prev.filter(t => t.id!==id))
  }

  let content = ( <MainScreen todo = { todo } addUse = { addUse } idSubmit = { idSubmit } /> )

  if ( newtodo ) {
    content = (<TodoScreen idSubmit={idSubmit} ntodo={newtodo} onRemoove = {onRemoove} />)
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
