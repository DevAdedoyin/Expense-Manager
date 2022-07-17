import { StatusBar } from 'expo-status-bar';
import { } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ManageExpenses from './screens/ManageExpenses';
import AllExpenses from './screens/AllExpenses';
import RecentExpenses from './screens/RecentExpenses';

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

export default function Navigations(){
    return (
        <>
            <StatusBar style="auto"/>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen component={ExpensesOverview} name="ExpensesOverview"/>
                    <Stack.Screen component={ManageExpenses} name="ManageExpenses"/>
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
            
};

function ExpensesOverview() {
    return (
        <BottomTab.Navigator>
            <BottomTab.Screen component={AllExpenses} name="AllExpenses" />
            <BottomTab.Screen component={RecentExpenses} name="RecentExpenses"/>
        </BottomTab.Navigator>
    );
};