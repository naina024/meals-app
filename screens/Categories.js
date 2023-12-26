import { FlatList, StyleSheet } from 'react-native';
import CategoryGridTile from '../components/CategoryGridTile';
import { SCREEN } from '../constants';
import { CATEGORIES } from '../data/dummy-data';

// Note: components loaded as a stack screen gets the 'navigation' and 'route' props
function Categories({navigation}){
    renderCategoryItem = (itemData) => {
        pressHandler = () => {
            navigation.navigate(SCREEN.MEALS, {
                categoryId: itemData.item.id,
            });
        }
        return (
            <CategoryGridTile 
                title={itemData.item.title}
                color={itemData.item.color}
                onPress={pressHandler}
            />
        );
    }
    

    return (
        <>
            <FlatList 
                data={CATEGORIES} 
                keyExtractor={(item) => item.id}
                renderItem={renderCategoryItem}
                numColumns={2}
            />
        </>
    )
}

const styles = StyleSheet.create({
    
})

export default Categories;