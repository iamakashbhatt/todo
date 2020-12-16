import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const Header = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.textColor}>Todo App</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        height: 50,
        backgroundColor: '#3d3d3d',
        padding: 10
    },
    textColor: {
        fontSize: 20,
        color: '#efefef'
    }
});

export default Header;
