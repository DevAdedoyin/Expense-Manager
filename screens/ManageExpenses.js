import { useLayoutEffect } from "react";
import {
    Text, View, StyleSheet
} from "react-native";
import  AppButton  from "../components/Button";
import IconButton from "../components/IconButton";
import { AppColors } from "../constants/Colors";


export default function ManageExpenses({ route, navigation }) {
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
        navigation.goBack();
     }
    
    function deleteHandler() {
        navigation.goBack();
    }

    return (<View style={styles.body}>
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
        padding: 24
    },
    buttonStyle: {
        minWidth: 120,
        marginHorizontal: 8
    },
    iconContainer: {
        flexDirection:'row',
        alignContent: 'center',
        justifyContent: 'center',
        borderTopColor: 'white',
        borderTopWidth: 2,
        marginTop: 20,
        paddingTop: 10
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems:'center'
    }
});