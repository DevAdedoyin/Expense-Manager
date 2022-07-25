import { StyleSheet, View } from "react-native";
import ExpenseInput from "./ExpenseInput";
import { useState } from "react";
import AppButton from "../Button";


export default function ExpenseForm({ onCancel, buttonLabel, onSubmit, updatableExpense }) {
    
    const [amountValue, setAmountValue] = useState({
        amount: updatableExpense ? updatableExpense.amount.toString() : '',
        description: updatableExpense ? updatableExpense.description : '',
        date: updatableExpense ? updatableExpense.date.toISOString().slice(0, 10) : '',
    });

    function inputChangeHandler(inputIdentifier, amountText) {
        setAmountValue((currentInputValues) => {
            return {
                ...currentInputValues,
                [inputIdentifier]: amountText,
            }
        });
    }

    function submitHandler() {
        const inputData = {
            amount: +amountValue.amount,
            description: amountValue.description,
            date: new Date(amountValue.date)
        };

        onSubmit(inputData);
    }

    return (
        <View style={ styles.form }>
            <View style={styles.amountDateContainer}>
                <ExpenseInput label='Amount' textInputConfig={{
                    keyboardType: 'decimal-pad',
                    onChangeText: inputChangeHandler.bind(this, 'amount'),
                    value: amountValue.amount,
                }} style={styles.inputStyle} />
                <ExpenseInput label='Date' style={styles.inputStyle} textInputConfig={{
                    onChangeText: inputChangeHandler.bind(this, 'date'),
                    value: amountValue.date,
                }} />
            </View>
            <ExpenseInput label='Description' textInputConfig={{
                multiline: true,
                onChangeText: inputChangeHandler.bind(this, 'description'),
                value: amountValue.description,
            }} />
            <View style={styles.buttonsContainer}>
                <AppButton style={styles.buttonStyle} mode="flat" onPress={ onCancel }>Cancel</AppButton>
                <AppButton style={styles.buttonStyle} onPress={ submitHandler }>{ buttonLabel }</AppButton>
            </View>
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
    },
    buttonStyle: {
        minWidth: 120,
        marginHorizontal: 8
    },
    buttonsContainer: {
        flexDirection: 'row',
        // flex:1,
        justifyContent: 'center',
        // alignItems: 'center',
        // backgroundColor: 'black'
    },
});