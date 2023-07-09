import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { globalStyles } from '../styles/global';

export default function Profile(){
    return(
        <View style={globalStyles.container}>
            <Text style={globalStyles.title}>Profile View</Text>
        </View>
    )
}
