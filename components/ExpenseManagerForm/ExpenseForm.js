import { Alert, StyleSheet, View, Text } from "react-native";
import ExpenseInput from "./ExpenseInput";
import { useState } from "react";
import AppButton from "../Button";


export default function ExpenseForm({ onCancel, buttonLabel, onSubmit, updatableExpense }) {
    
    const [inputs, setInputs] = useState({
        amount: {
            value: updatableExpense ? updatableExpense.amount.toString() : '',
            isValid: !!updatableExpense
        },
        description: {
            value: updatableExpense ? updatableExpense.description : '',
            isValid: !!updatableExpense
        },
        date: {
            value: updatableExpense ? updatableExpense.date.toISOString().slice(0, 10) : '',
            isValid: !!updatableExpense
        },
    });

    function inputChangeHandler(inputIdentifier, inputText) {
        setInputs((currentInputValues) => {
            return {
                ...currentInputValues,
                [inputIdentifier]: {value:inputText, isValid:true},
            }
        });
    }

    function submitHandler() {
        const inputData = {
            amount: +inputs.amount.value,
            description: inputs.description.value,
            date: new Date(inputs.date.value)
        };

        const amountData = inputData.amount > 0 && !isNaN(inputData.amount);
        const descriptionData = inputData.description.trim().length > 0;
        const dateData = inputData.date.toString() !== 'Invalid Date';

        if (!amountData || !descriptionData || !dateData) {
            // return Alert.alert('Wrong Data', 'Please enter an accurate data');
            setInputs((currentInputs) => {
                return {
                    amount: { value: currentInputs.amount.value, isValid: amountData },
                    description: { value: currentInputs.description.value, isValid: descriptionData },
                    date: { value: currentInputs.date.value, isValid: dateData },
                };
            });
            
            return;
        }

        onSubmit(inputData);
    }

    const formIsInvalid = (!inputs.amount.isValid || !inputs.date.isValid || inputs.description.isValid);

    return (
        <View style={ styles.form }>
            <View style={styles.amountDateContainer}>
                <ExpenseInput label='Amount' textInputConfig={{
                    keyboardType: 'decimal-pad',
                    onChangeText: inputChangeHandler.bind(this, 'amount'),
                    value: inputs.amount.value,
                }} style={styles.inputStyle} />
                <ExpenseInput label='Date' style={styles.inputStyle} textInputConfig={{
                    onChangeText: inputChangeHandler.bind(this, 'date'),
                    value: inputs.date.value,
                }} />
            </View>
            <ExpenseInput label='Description' textInputConfig={{
                multiline: true,
                onChangeText: inputChangeHandler.bind(this, 'description'),
                value: inputs.description.value,
            }} />
            {formIsInvalid && (<Text style={{color:'grey'}}>Invalid input data. Please enter a valid data.</Text>)}
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