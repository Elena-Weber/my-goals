import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{margin: 15, borderWidth: 1, borderColor: 'red', padding: 15}}>Hello!</Text>
      <Text style={styles.h1}>Hello World!</Text>
      <Button title="Click me!" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  h1: {
    margin: 15,
    borderWidth: 1,
    borderColor: 'blue',
    padding: 15
  }
});
