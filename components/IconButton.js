import { Pressable, StyleSheet, View } from "react-native";
import {Ionicons} from "@expo/vector-icons"


export default function IconButton({ color, size, onPress, icon }) {
    return <Pressable onPress={onPress} style={({pressed})=> pressed && styles.pressed}>
        <View style={styles.iconContainer}>
            <Ionicons color={color} size={size} name={icon} />
        </View>
    </Pressable>
}

const styles = StyleSheet.create({
    pressed: {
        opacity: 0.75
    },
    iconContainer: {
        marginRight: 15
    }
});