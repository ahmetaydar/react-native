import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/HomeScreen/HomeScreen';
import BalanceScreen from '../Screens/BalanceScreen/BalanceScreen';
import ReportScreen from '../Screens/ReportScreen/ReportScreen';
import SearchScreen from '../Screens/SearchScreen/SearchScreen';
import ProfileScreen from '../Screens/ProfileScreen/ProfileScreen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { StyleSheet, Text } from 'react-native';

const Tab = createBottomTabNavigator();

interface Props {
    focused: boolean;
    color: string;
    size: number;
}

export function HomeBottomBar() {
    return (
        <Tab.Navigator
            initialRouteName='Home'
            screenOptions={({ route }) => ({
                headerShown: false,

                tabBarShowLabel: false,

                tabBarStyle: styles.tabBar,
                tabBarIcon: ({ focused, color, size }: Props) => {
                    let iconName;
                    if (route.name === 'Home') {
                        iconName = 'home';
                    } else if (route.name === 'Report') {
                        iconName = 'file-document';
                    } else if (route.name === 'Search') {
                        iconName = 'magnify';
                    } else if (route.name === 'Balance') {
                        iconName = 'credit-card';
                    } else if (route.name === 'Profile') {
                        iconName = 'account';
                    }

                    return (
                        <Icon
                            name={iconName as string}
                            size={size}
                            color={focused ? '#00BDB0' : '#B3B4B8'}
                        />
                    );
                },
            })}>
            <Tab.Screen name='Home' component={HomeScreen} />
            <Tab.Screen name='Report' component={ReportScreen} />
            <Tab.Screen name='Search' component={SearchScreen} />
            <Tab.Screen name='Balance' component={BalanceScreen} />
            <Tab.Screen name='Profile' component={ProfileScreen} />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    tabBar: {
        marginBottom: 20,
        borderRadius: 30,
        marginHorizontal: 20,
        padding: 10,
        height: 80,
        alignItems: 'center',
    },
});
