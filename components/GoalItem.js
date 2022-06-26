import { StyleSheet, Text, View, Pressable } from 'react-native';

function GoalItem(props) {
    return (
        <View style={styles.goalItem}>
            <Pressable
                onPress={props.onDeleteGoal.bind(this, props.id)}
                android_ripple={{color: '#210664'}}
                style={({pressed}) => pressed && styles.pressedGoal} // for iphone ripple effect
            >
                <Text style={styles.goalText}>
                    {props.text}
                </Text>
            </Pressable>
        </View>
    )
}

export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
        margin: 6,
        borderRadius: 6,
        backgroundColor: '#5e0acc',
    },
    goalText: {
        padding: 6,
        color: 'white'
    },
    pressedGoal: {
        opacity: 0.5
    }
})