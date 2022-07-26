import { View, Text, StyleSheet } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { AppColors } from "../../constants/Colors";


export default function ExpenseInput({ label, textInputConfig, style}) {
    const inputStyle = [styles.inputStyle];

    if (textInputConfig && textInputConfig.multiline) {
        inputStyle.push(styles.multilineInput);
    }
   return (<View style={[styles.formContainer, style]}>
        <Text style={styles.labelStyle} >{ label }</Text>
        <TextInput {...textInputConfig} style={ inputStyle } />
   </View>)
}

const styles = StyleSheet.create({
    formContainer: {
        marginHorizontal: 4,
        marginVertical: 8,   
    },
    labelStyle: {
        color: AppColors.colors.textColorPrimary,
        fontSize: 15,
        marginBottom: 4,
    },
    inputStyle: {
        backgroundColor: 'grey',
        padding:6,
        // height: 35,
        borderRadius: 7,
    },
    multilineInput: {
        textAlignVertical: "top",
        minHeight: 100,    
        marginBottom: 1,
    }
});