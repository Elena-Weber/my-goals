import { useState } from 'react';
import { StyleSheet, View, Button, TextInput } from 'react-native';

function GoalInput(props) {

    const [goal, setGoal] = useState('');

    function goalInputHandler(text) {
        setGoal(text);
    }

    function addGoalHandler() {
        props.onAddGoal(goal);
        setGoal('');
    }

    return (
        <View style={styles.inputContainer} >
            <TextInput
                placeholder='Type your goal here'
                style={styles.input}
                onChangeText={goalInputHandler}
                value={goal}
            />
            <Button title="Add" onPress={addGoalHandler} />
        </View>
    )
}

export default GoalInput;

const styles = StyleSheet.create({
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
    }
})