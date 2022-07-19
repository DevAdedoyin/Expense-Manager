import { Button, Pressable, View, StyleSheet } from "react-native";
import { AppColors } from "../constants/Colors";


export default function Button({children, mode, style, onPress}){
    return <View style={style}>
        <Pressable onPress={onPress} style={({pressed})=> {pressed && styles.pressed}}>
            <View style={[styles.button, mode === 'flat' && styles.flat ]}>
                <Text style={[styles.buttonText, mode === 'flat' && styles.flatText]}>
                    {children}
                </Text>
            </View>
        </Pressable>
    </View>
}

const styles = StyleSheet.create({
    button: {
        padding: 8,
        borderRadius: 5,
        backgroundColor: AppColors.colors.primaryColor
    },
    buttonText: {
        color: AppColors.colors.textColorPrimary,
        textAlign: 'center',
    },
    flatText: {
      color:AppColors.colors.textColorPrimary,  
    },
    flat: {
       backgroundColor: 'transparent' 
    },
    pressed: {
        opacity: 0.75,
        borderRadius: 5,
        backgroundColor: 'grey'
    },
});