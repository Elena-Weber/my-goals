import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container} >
      <Text style={styles.greeting}>Hello, Goal-Setter!</Text>
      <View style={styles.inputContainer} >
        <TextInput placeholder='Type your goal here' style={styles.input} />
        <Button title="Add" />
      </View>
      <Text style={styles.goalsContainer}>List of goals</Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    padding: 10,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  greeting: {
    // flex: 1,
    backgroundColor: '#fff',
    marginTop: 30,
    textAlign: 'center'
  },
  inputContainer: {
    padding: 15,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    flex: 1
  },
  input: {
    marginRight: 10,
    padding: 5,
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '85%',
    borderRadius: 8
  },
  goalsContainer: {
    flex: 9,
    marginTop: 10
  }
});
