import { Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

function IconButton({icon, color, onPress}){
    return (
        <Pressable 
            style={({pressed}) => pressed && styles.pressed}
            onPress={onPress}
        >
            <Ionicons name={icon} size={18} color={color}/>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    pressed: {
        opacity: 0.5,
    }
})

export default IconButton;