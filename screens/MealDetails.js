import { useEffect } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Button } from 'react-native';
import { MEALS } from '../data/dummy-data';

import List from '../components/List';
import IconButton from '../components/ui/IconButton';

function MealDetails({route, navigation}){

    const mealId = route.params.mealId;
    const selectedMeal = MEALS.find((meal) => meal.id === mealId);

    pressHandler = () => {
        console.log('press')
    }

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return <IconButton icon='star' color='white' onPress={pressHandler}/>
              }
        })
    }, [mealId, navigation, pressHandler])


    return (
        <ScrollView style={styles.rootContainer}>
            <Image source={{uri: selectedMeal.imageUrl}} style={styles.image}/>
            <Text style={styles.title}>{selectedMeal.title}</Text>
            <View style={styles.details}>
                <Text style={styles.detailsText}>{selectedMeal.duration}m</Text>
                <Text style={styles.detailsText}>{selectedMeal.complexity.toUpperCase()}</Text>
                <Text style={styles.detailsText}>{selectedMeal.affordability.toUpperCase()}</Text>
            </View>
            <View style={styles.listOuterContainer}>
                <View style={styles.listContainer}>
                    <Text style={styles.subTitle}>Ingredients</Text>
                    <List data={selectedMeal.ingredients}/>
                    <Text style={styles.subTitle}>Steps</Text>
                    <List data={selectedMeal.steps}/>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({

    rootContainer: {
        marginBottom: 32,
    },

    image: {
        width: '100%',
        height: 300,
    },

    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 8,
        color: 'white',
    },

    details: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 8,
    },

    detailsText: {
        marginHorizontal: 8,
        fontSize: 12,
        color: 'white',
    },

    subTitle: {
        color: '#e2b497',
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 6,
        marginHorizontal: 12,
        padding: 4,
        textAlign: 'center',
        borderBottomColor: '#e2b497',
        borderBottomWidth: 2,
    },

    listOuterContainer: {
        alignItems: 'center',
    },

    listContainer: {
        width: '80%',
    }
})

export default MealDetails;