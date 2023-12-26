import { Pressable, View, Text, StyleSheet, Image } from 'react-native';

function MealItem({item, onPress}){
    return (
        <View style={styles.rootContainer}>
            <Pressable
                style={({pressed}) => [
                    pressed ? styles.pressedMeal : null
                ]}
                android_ripple={{color: '#eee'}}
                onPress={onPress}
            >
                <View>
                    <Image source={{uri: item.imageUrl}} style={styles.image}/>
                    <Text style={styles.title}>{item.title}</Text>
                </View>
                <View style={styles.details}>
                    <Text style={styles.detailsText}>{item.duration}m</Text>
                    <Text style={styles.detailsText}>{item.complexity.toUpperCase()}</Text>
                    <Text style={styles.detailsText}>{item.affordability.toUpperCase()}</Text>
                </View>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({

    rootContainer: {
        margin: 12,
        borderRadius: 10,
        overflow: 'hidden',
        backgroundColor: 'white',
        elevation: 4,
    },

    image: {
        width: '100%',
        height: 200,
    },

    title: {
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center',
        margin: 8,
    },

    details: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 8,
    },

    detailsText: {
        marginHorizontal: 8,
        fontSize: 12
    },

    pressedMeal: {
        opacity: 0.5,
    },

})

export default MealItem;