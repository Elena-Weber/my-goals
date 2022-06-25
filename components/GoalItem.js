import {StyleSheet} from 'react-native'

function GoalItem() {
    return (
        <View style={styles.goalItem}>
            <Text style={styles.goalText}>
                {itemData.item.text}
            </Text>
        </View>
    )
}

export default GoalItem;

const styles = StyleSheet.create({
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
})