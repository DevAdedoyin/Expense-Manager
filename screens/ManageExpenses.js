import { useLayoutEffect } from "react";
import {
    Text, View, StyleSheet
} from "react-native";
import  AppButton  from "../components/Button";
import { AppColors } from "../constants/Colors";


export default function ManageExpenses({ route, navigation }) {
    const expenseId = route.params?.expenseId;
    const isEditing = !!expenseId;

    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? 'Edit Expense' : 'Add Expense'
        });
    }, [navigation, isEditing]);

    function cancelHandler(){}
    
    function confirmHandler(){}

    return (<View style={styles.body}>
            <View style={styles.buttonsContainer}>
                <AppButton style={styles.buttonStyle} mode="flat" onPress={cancelHandler}>Cancel</AppButton>
                <AppButton style={styles.buttonStyle} onPress={confirmHandler}>{isEditing ? 'Update' : 'Add'}</AppButton>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    body: {
        flex:1,
        backgroundColor: AppColors.colors.primaryColor,
        padding: 24
    },
    buttonStyle: {
        minWidth: 120,
        marginHorizontal: 8
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems:'center'
    }
});