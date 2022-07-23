import { useContext, useLayoutEffect } from "react";
import {
    Text, View, StyleSheet
} from "react-native";
import  AppButton  from "../components/Button";
import ExpenseForm from "../components/ExpenseManagerForm/ExpenseForm";
import IconButton from "../components/IconButton";
import { AppColors } from "../constants/Colors";
import { ExpenseManager } from "../state/ExpenseManager";


export default function ManageExpenses({ route, navigation }) {
    const expenseCtx = useContext(ExpenseManager);
    
    const expenseId = route.params?.expenseId;
    const isEditing = !!expenseId;

    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? 'Edit Expense' : 'Add Expense'
        });
    }, [navigation, isEditing]);

    function cancelHandler() {
        navigation.goBack();
    }
    
    function confirmHandler() {
        if (isEditing) {
            expenseCtx.updateExpenses({description:'Updated expense', amount: 155400.00, date : new Date("2022-07-20")}, expenseId )
        } else {
            expenseCtx.addExpenses({description:'Gucci bag', amount: 200000.00, date : new Date("2022-07-20")})
        }
        navigation.goBack();
     }
    
    function deleteHandler() {
        expenseCtx.deleteExpenses(expenseId);
        navigation.goBack();
    }

    return (<View style={styles.body}>      
            <ExpenseForm />
            <View style={styles.buttonsContainer}>
                <AppButton style={styles.buttonStyle} mode="flat" onPress={cancelHandler}>Cancel</AppButton>
                <AppButton style={styles.buttonStyle} onPress={confirmHandler}>{isEditing ? 'Update' : 'Add'}</AppButton>
        </View>
        {isEditing && (<View style={styles.iconContainer} >
            <IconButton color='red' icon='trash' size={30} onPress={deleteHandler}/>
        </View>)}
        </View>
    );
}

const styles = StyleSheet.create({
    body: {
        flex:1,
        backgroundColor: AppColors.colors.primaryColor,
        padding: 20
    },
    buttonStyle: {
        minWidth: 120,
        marginHorizontal: 8
    },
    iconContainer: {
        flexDirection:'row',
        // alignContent: 'center',
        justifyContent: 'center',
        borderTopColor: 'white',
        borderTopWidth: 2,
        marginTop: 20,
        paddingTop: 10
    },
    buttonsContainer: {
        flexDirection: 'row',
        // flex:1,
        justifyContent: 'center',
        // alignItems: 'center',
        // backgroundColor: 'black'
    },
});