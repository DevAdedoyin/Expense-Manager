import { StatusBar } from 'expo-status-bar';
import {} from 'react-native'

export default function NavigationType(){
    return (
        <>
            <StatusBar style="auto"/>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen/> 
                    <Stack.Screen/>
                </Stack.Navigator>
            </NavigationContainer>
        </>
            );
            
};