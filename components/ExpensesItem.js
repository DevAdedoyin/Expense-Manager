import {StyleSheet, View, Text, Pressable } from 'react-native';
import { AppColors } from '../constants/Colors';
// import { useNavigation } from '@react-navigation/native';
import Moment from 'moment';
import { useNavigation } from '@react-navigation/core';

export function getDate(date) {
    return Moment(date).format('DD/MM/YYYY')
}



export default function ExpenseItem({id, description, amount, date}) {
    const navigation = useNavigation()
    function pressHandler() {
        navigation.navigate('ManageExpenses', { expenseId: id });
    }
    return (
        <Pressable onPress={pressHandler} style={({pressed}) => pressed && styles.pressedStyle } >
            <View style={styles.mainContainer}>
                <View>
                    <Text style={styles.descriptionStyle}>{description}</Text>
                    <Text style={styles.dateStyle}>{getDate(date).toString()}</Text>
                </View>
                <View style={styles.amountContainer}>
                    <Text style={styles.amountStyle}>₦{amount}</Text>
                </View>
            </View>
        </Pressable>
    )

}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: 'grey',
        marginTop: 5,
        marginBottom: 7,
        flexDirection: 'row',
        padding: 7,
        justifyContent: 'space-between',
        // alignItems: 'center',
        borderRadius: 5,
        elevation: 3,
        // shadowColor: 'grey',
        // shadowRadius: 5,
        // shadowOpacity: 0.6,
        // shadowOffset:{width: 2}
    },
    pressedStyle: {
        opacity: 0.85,
        borderRadius: 5,
    },
    descriptionStyle: {
        fontSize: 17,
        fontWeight: 'bold',
    },
    dateStyle: {
        fontWeight: '600',
    },
    amountContainer: {
        minWidth: 70,
        // paddingHorizontal: 10,
        paddingVertical: 10,
        backgroundColor: "black",    //AppColors.colors.primaryColor,
        elevation:10,
        borderRadius: 7,
        alignItems: 'center'
    },
    amountStyle: {
        color: AppColors.colors.summarBgColor,
        fontWeight: 'bold',
    },
    
    
});