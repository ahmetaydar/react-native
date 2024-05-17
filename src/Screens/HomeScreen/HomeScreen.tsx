import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    FlatList,
    ScrollView,
    StatusBar,
    SafeAreaView,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as data from '../../data/data.json';

export default function HomeScreen() {
    const renderCoin = ({ item }: any) => (
        <View style={styles.coinContainer}>
            <Image source={{ uri: item.iconUrl }} style={styles.icon} />
            <View style={styles.coinDetails}>
                <Text style={styles.coinShortName}>{item.shortName}</Text>
                <Text style={styles.coinName}>{item.name}</Text>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}>
                    <Text>${item.value}</Text>
                    <Text
                        style={
                            item.changePercentage >= 0
                                ? styles.positiveChange
                                : styles.negativeChange
                        }>
                        {item.changePercentage} %
                    </Text>
                </View>
            </View>
        </View>
    );

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: '#f2f2f2',
            }}>
            <StatusBar barStyle='dark-content' />
            <SafeAreaView></SafeAreaView>
            <ScrollView
                style={styles.container}
                contentContainerStyle={{ flexGrow: 1 }}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>
                        Trade Now and Get {'\n'} Your Life
                    </Text>
                </View>
                <LinearGradient
                    colors={['#900271', '#00BFB2']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={styles.profitContainer}>
                    <Text style={styles.totalCoins}>Total Coins</Text>
                    <Text style={styles.totalValue}>
                        $ {data.totalValue.toLocaleString()}
                    </Text>
                    <View style={styles.profits}>
                        <View>
                            <Text style={styles.todaysProfit}>
                                Today's Profit
                            </Text>
                            <Text style={styles.profitValue}>
                                $ {data.todayProfit.toFixed(2)}
                            </Text>
                        </View>
                        <View
                            style={{
                                borderRadius: 30,
                                backgroundColor: '#D6F5F3',
                            }}>
                            <Text style={styles.profitPercentage}>
                                % {data.profitPercentage}
                            </Text>
                        </View>
                    </View>
                </LinearGradient>
                <Text style={styles.myCoins}>My Coins</Text>
                <FlatList
                    data={data.coins.slice(0, 4)} // Display only first 4 coins
                    renderItem={renderCoin}
                    keyExtractor={(item) => item.name}
                    numColumns={2}
                />
                <Text style={styles.viewMore}>View More</Text>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: '#f2f2f2',
    },
    titleContainer: {
        marginHorizontal: 54,
        marginBottom: 20,
        alignItems: 'center', // Center the text horizontally
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#141B29',
        textAlign: 'center',
    },
    profits: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 30,
        alignItems: 'center',
    },
    profitContainer: {
        borderRadius: 15,
        marginHorizontal: 10,
        padding: 20,
        height: 228,
        marginBottom: 20,
        overflow: 'hidden', // Ensure child views don't overflow the container
        shadowColor: 'black',
        shadowOpacity: 0.3,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowRadius: 4,
        elevation: 5, // Android only
    },
    totalCoins: {
        fontSize: 16,
        color: '#D6D7D8',
        marginBottom: 10,
    },
    totalValue: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
    },
    todaysProfit: {
        fontSize: 16,
        color: '#D6D7D8',
        marginTop: 10,
        marginBottom: 10,
        flexDirection: 'column',
    },
    profitValue: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
    },
    profitPercentage: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#10DC78',

        borderRadius: 20,
        height: 36,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    myCoins: {
        fontSize: 16,
        fontWeight: 'medium',
        marginBottom: 10,
        color: '#141B29',
    },
    coinContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        margin: 5,
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#ddd',
        height: 100,
    },
    icon: {
        width: 40,
        height: 40,
        marginRight: 10,
    },
    coinDetails: {
        flex: 1,
        gap: 5,
    },
    coinName: {
        fontSize: 14,
        fontWeight: 'medium',
        color: '#70747C',
    },
    coinShortName: {
        fontSize: 16,
        fontWeight: 'semibold',
        color: '#141B29',
    },
    positiveChange: {
        color: 'green',
    },
    negativeChange: {
        color: 'red',
    },
    viewMore: {
        textAlign: 'center',

        fontSize: 14,
        color: 'black',
        fontWeight: 'bold',
    },
});
