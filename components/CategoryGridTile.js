import { Pressable, View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function CategoryGridTile({title, color, onPress}){
    return (
        <>
            <View style={[styles.gridItem, {backgroundColor: color}]}>
                <Pressable
                    onPress={onPress}
                    style={({pressed}) => [
                        styles.pressableContainer,
                        pressed ? styles.pressedContainer : null
                    ]}
                    android_ripple={{color: '#eee'}}
                >
                    <View style={[styles.innerContainer, {backgroundColor: color}]}>
                        <Text style={styles.title}>{title}</Text>
                    </View>
                </Pressable>
            </View>
        </>
    )
}

const styles = StyleSheet.create({

    gridItem: {
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 6,
        elevation: 4,
        backgroundColor: 'white'
    },

    pressableContainer: {
        flex: 1,
    },

    pressedContainer: {
        opacity: 0.5,
    },

    innerContainer: {
        flex: 1,
        padding: 16,
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center'
    },

    title: {
        fontWeight: 'bold',
        fontSize: 18
    }


})

export default CategoryGridTile;