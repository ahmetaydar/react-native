import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import HomeScreen from '../Screens/HomeScreen/HomeScreen';
import { HomeBottomBar } from './BottomBar';

const Stack = createStackNavigator();

export function AppRouter() {
    const navigation = useNavigation();
    return (
        <>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name='HomeBottomBar' component={HomeBottomBar} />
                <Stack.Screen name='Detail' component={HomeScreen} />
            </Stack.Navigator>
        </>
    );
}
