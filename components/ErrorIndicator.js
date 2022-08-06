import { View, StyleSheet, Text, Button } from "react-native";
import { AppColors } from "../constants/Colors";



function ErrorIndicator({ message }) {
    
    return (
        <View style={styles.container}>
            <Text style={[styles.text, styles.title]}>Ooops! An error occured.</Text>
            <Text style={styles.text}>{ message }</Text>
        </View>
    );

}

export default ErrorIndicator;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 24,
        backgroundColor: AppColors.colors.accentColor
    },
    text: {
        textAlign: 'center',
        marginBottom: 8,    
    },
    title:{
        fontSize: 20,
        fontWeight: 'bold'
    },
  
    
});