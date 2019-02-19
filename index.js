/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */
import React from 'react';
import { AppRegistry, View, StyleSheet } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
});
//create component

const App = () => (
    <View style={styles.container}>
        <Header headerText={'Albums'} />
        <AlbumList />
    </View>);

//Render App Component
AppRegistry.registerComponent('albums', () => App);

