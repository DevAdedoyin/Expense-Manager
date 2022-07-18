import {StyleSheet, View, Text, Pressable } from 'react-native';
import { AppColors } from '../constants/Colors';
import Moment from 'moment';

function getDate(date) {
    return Moment(date).format('DD/MM/YYYY')
}

export default function ExpenseItem({description, amount, date}) {
    
    return (
        <Pressable style={({pressed}) => pressed && styles.pressedStyle } android_ripple={true}>
            <View style={styles.mainContainer}>
                <View>
                    <Text style={styles.descriptionStyle}>{description}</Text>
                    <Text>{getDate(date)}</Text>
                </View>
                <View style={styles.amountContainer}>
                    <Text style={styles.amountStyle}>{amount}</Text>
                </View>
            </View>
        </Pressable>
    )

}

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: 'grey',
        marginHorizontal: 15,
        marginVertical: 5,
        flexDirection: 'row',
        padding: 7,
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 5
    },
    pressedStyle: {
       backgroundColor: AppColors.colors.textColorPrimary 
    },
    descriptionStyle: {
        fontSize: 17,
        fontWeight: 'bold',
    },
    amountContainer: {
        minWidth: 70,
        paddingHorizontal: 10,
        paddingVertical: 10,
        backgroundColor: AppColors.colors.accentColor,
        borderRadius: 7,
        alignItems: 'center'
    },
    amountStyle: {
        color: AppColors.colors.amountColor,
        fontWeight: 'bold',
    }
    
});