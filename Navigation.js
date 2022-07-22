import { StatusBar } from 'expo-status-bar';
import { } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ManageExpenses from './screens/ManageExpenses';
import AllExpenses from './screens/AllExpenses';
import RecentExpenses from './screens/RecentExpenses';
import { NavigationContainer } from '@react-navigation/native';
import { AppColors } from './constants/Colors';
import {Ionicons} from '@expo/vector-icons'
import IconButton from './components/IconButton';
import ExpenseProvider, { ExpenseManager } from './state/ExpenseManager';

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

export default function Navigations(){
    return (
        <>
            <StatusBar style="inverted" />
            <ExpenseProvider>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen component={ExpensesOverview} name="ExpensesOverview" options={{headerShown: false}}/>
                    <Stack.Screen component={ManageExpenses} name="ManageExpenses" options={{
                        headerStyle: { backgroundColor: AppColors.colors.primaryColor,  },
                        headerTintColor: AppColors.colors.textColorPrimary,
                        presentation: 'modal'
                    }}/>
                </Stack.Navigator>
            </NavigationContainer>
            </ExpenseProvider>
        </>
    );
            
};

function ExpensesOverview() {
    return (
        <BottomTab.Navigator screenOptions={({navigation, route})=> ({
            headerStyle: { backgroundColor: AppColors.colors.primaryColor },
            headerTintColor: AppColors.colors.textColorPrimary,
            headerRight: ({ tintColor }) => <IconButton color={tintColor} icon='add' size={24} onPress={() => {navigation.navigate("ManageExpenses")}} />,
            tabBarActiveTintColor: AppColors.colors.tabBarActive,
            tabBarInactiveTintColor: AppColors.colors.tabBarInactive,   
            tabBarStyle: { backgroundColor: AppColors.colors.primaryColor, height: 55 },
            tabBarLabelStyle:
                navigation.isFocused() ? { fontSize: 13, color: AppColors.colors.summarBgColor, paddingBottom: 5, fontWeight: '700' }
                    :
                    { fontSize: 12,  paddingBottom: 5, fontStyle: 'italic' },
            tabBarIconStyle:{ marginTop: 5,  },
            tabBarIcon: ({ focused, size, color }) => {
                let iconName;
                switch (route.name) {
                    case "RecentExpenses":
                        iconName = focused ? 'hourglass' : 'hourglass-outline';
                        break;
                    case "AllExpenses":
                        iconName = focused ? 'calendar' : 'calendar-outline';
                        break;
                    default:
                        break;
                }
                size = focused ? 22 : 14;
               return <Ionicons name={iconName} color={color} size={size} />;
             }
        })}>
            <BottomTab.Screen component={RecentExpenses} name="RecentExpenses" options={{
                title: "Recent Expenses",
                tabBarLabel: "Recent Expenses",
            }}/>
            <BottomTab.Screen component={AllExpenses} name="AllExpenses" options={{
                title: "All Expenses",
                tabBarLabel: "All Expenses",
            }}/>    
        </BottomTab.Navigator>
    );
};