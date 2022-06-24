import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container} >
      <Text style={{margin: 15, padding: 15}}>Hello, Goal-Setter!</Text>
      <View style={styles.goalAdd} >
        <TextInput placeholder='Type your goal here'  style={styles.input} />
        <Button title="Add" />
      </View>
      
      <Text style={styles.h1}>List of goals</Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 50,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  goalAdd: {
    margin: 15,
    padding: 15,
    flexDirection: 'row'
  },
  input: {
    // margin: 15,
    padding: 5,
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '80%',
    borderRadius: 8
  }
});
