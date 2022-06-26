import { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {

  const [goals, setGoals] = useState([])

  function addGoalHandler(goal) {
    setGoals(currentGoals => [
      ...currentGoals,
      {text: goal, key: Math.random().toString()}
    ])
  }

  function deleteGoalHandler(id) {
    setGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== id)
    })
  }

  return (
    <View style={styles.container} >
      <Text style={styles.greeting}>Hello, Goal-Setter!</Text>
      <GoalInput onAddGoal={addGoalHandler} />
      <View style={styles.goalsContainer}>
        <FlatList
          data={goals}
          renderItem={(itemData) => {
            return (
              <GoalItem
                text={itemData.item.text}
                onDeleteGoal={deleteGoalHandler}
                id={itemData.item.id}
              />
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
  goalsContainer: {
    flex: 9,
    marginTop: 10,
    paddingHorizontal: 15
  }
});
