import { StyleSheet, View } from "react-native";
import ExpenseInput from "./ExpenseInput";


export default function ExpenseForm () {
    return (
        <View style={ styles.form }>
            <View style={styles.amountDateContainer}>
                <ExpenseInput label='Amount' textInputConfig={{
                    keyboardType: 'decimal-pad',}} style={styles.inputStyle} />    
                <ExpenseInput label='Date' style={styles.inputStyle} />
            </View>
            <ExpenseInput label='Description' textInputConfig={{multiline: true,}}  />
      </View>  
    );
}

const styles = StyleSheet.create({
    form: {
        // marginTop: 40,
    },
    amountDateContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        // flex: 1,
        // backgroundColor: 'white',
        alignItems: 'center'
    },
    inputStyle: {
        flex: 1,
    }
});