import { useEffect } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { SCREEN } from '../constants';
import {CATEGORIES, MEALS} from '../data/dummy-data';
import MealItem from '../components/MealItem';

function Meals({route, navigation}){

    const catId = route.params.categoryId;
    // const route = useRoute(); // Note: alternative hook to get route params

    const displayedMeals = MEALS.filter(meal => {
        return meal.categoryIds.includes(catId);
    })

    useEffect(() => {
        navigation.setOptions({
            title: CATEGORIES.find((category) => category.id === catId).title
        })
    }, [catId, navigation])

    renderMealItem = (itemData) => {
        pressHandler = () => {
            navigation.navigate(SCREEN.MEAL_DETAILS, {
                mealId: itemData.item.id,
            });
        }
        return <MealItem item={itemData.item} onPress={pressHandler}/>;
    }

    return (
        <View style={styles.container}>
            <FlatList 
                data={displayedMeals} 
                keyExtractor={(item) => item.id}
                renderItem={renderMealItem}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    }
})

export default Meals;