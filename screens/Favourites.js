import {useContext} from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { MEALS } from '../data/dummy-data';
import { SCREEN } from '../constants';
import {FavouritesContext} from '../store/context/favourites.context';

import MealItem from '../components/MealItem';

function Favourites({navigation}){
    
    const favMealsContext = useContext(FavouritesContext);
    const displayedMeals = MEALS.filter(meal => {
        return favMealsContext.ids.includes(meal.id);
    })

    renderMealItem = (itemData) => {

        pressHandler = () => {
            navigation.navigate(SCREEN.MEAL_DETAILS, {
                mealId: itemData.item.id,
            });
        }
        return <MealItem item={itemData.item} onPress={pressHandler}/>;
    }

    const containerStyle = {
        justifyContent: 'center',
        alignItems: 'center',
    }

    let content = (<View style={[styles.container, containerStyle]}>
                    <Text style={styles.text}>You have no favourite meals yet.</Text>
                </View>)

    if (displayedMeals.length){
        content = (
            <View style={styles.container}>
                <FlatList 
                    data={displayedMeals} 
                    keyExtractor={(item) => item.id}
                    renderItem={renderMealItem}
                />
            </View>
        )
    }

    return (
        <>
        { content }
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },

    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
    }
})

export default Favourites;