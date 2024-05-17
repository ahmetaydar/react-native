
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ReportScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Report</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default ReportScreen;
