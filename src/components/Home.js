import React from 'react';
import Header from './Header';
import Todos from './Todos';
import { View } from 'react-native'

const Home = () => {
    return (
        <View>
            <Header />
            <Todos />
        </View>
    );
}

export default Home;