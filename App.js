import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';

export default function App() {

  const [goal, setGoal] = useState('')
  const [goals, setGoals] = useState([])

  function goalInputHandler(text) {
    // console.log(text)
    setGoal(text)
  }

  function addGoalHandler() {
    // console.log(goal)
    setGoals(currentGoals => [...currentGoals, {text: goal, key: Math.random().toString()}])
  }

  return (
    <View style={styles.container} >
      <Text style={styles.greeting}>Hello, Goal-Setter!</Text>
      <View style={styles.inputContainer} >
        <TextInput
          placeholder='Type your goal here'
          style={styles.input}
          onChangeText={goalInputHandler}
        />
        <Button title="Add" onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
        <FlatList
          data={goals}
          renderItem={(itemData) => {
            itemData.index
            return (
              <View style={styles.goalItem}>
                <Text style={styles.goalText}>
                  {itemData.item.text}
                </Text>
              </View>
            )
          }}
          keyExtractor={(item, index) => {
            return item.key
          }}
          alwaysBounceVertical={false}>
        </FlatList>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  greeting: {
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
    marginTop: 10,
    paddingHorizontal: 15
  },
  goalItem: {
    margin: 6,
    padding: 5,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  goalText: {
    padding: 3,
    color: 'white'
  }
});
