import { StatusBar } from 'expo-status-bar';
import { } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ManageExpenses from './screens/ManageExpenses';
import AllExpenses from './screens/AllExpenses';
import RecentExpenses from './screens/RecentExpenses';
import { NavigationContainer } from '@react-navigation/native';
import Colors, { AppColors } from './constants/Colors';
import {Ionicons} from '@expo/vector-icons'
import IconButton from './components/IconButton';

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

export default function Navigations(){
    return (
        <>
            <StatusBar style="auto"/>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen component={ExpensesOverview} name="ExpensesOverview" options={{headerShown: false}}/>
                    <Stack.Screen component={ManageExpenses} name="ManageExpenses" options={{
                        headerStyle: { backgroundColor: AppColors.colors.primaryColor },
                        headerTintColor: AppColors.colors.textColorPrimary,
                    }}/>
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
            
};

function ExpensesOverview() {
    return (
        <BottomTab.Navigator screenOptions={({navigation})=> ({
            headerStyle: { backgroundColor: AppColors.colors.primaryColor },
            headerTintColor: AppColors.colors.textColorPrimary,
        headerRight: ({ tintColor }) => <IconButton color={tintColor} icon='add' size={24} onPress={() => {navigation.navigate("ManageExpenses")}} />,
            tabBarStyle: { backgroundColor: AppColors.colors.primaryColor },
            tabBarActiveTintColor: AppColors.colors.textColorPrimary,
            tabBarInactiveTintColor: AppColors.colors.tabBarInactive,

            // tabBarLabelStyle: { color: AppColors.colors.textColorPrimary, fontSize: 14, fontWeight: "bold"},
        })}>
            <BottomTab.Screen component={RecentExpenses} name="RecentExpenses" options={{
                title: "Recent Expenses",
                tabBarLabel: "Recent Expenses",
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="hourglass" color={color} size={size} />
                 )
            }}/>
            <BottomTab.Screen component={AllExpenses} name="AllExpenses" options={{
                title: "All Expenses",
                tabBarLabel: "All Expenses",
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="calendar" color={color} size={size} />
                )
            }}/>    
        </BottomTab.Navigator>
    );
};