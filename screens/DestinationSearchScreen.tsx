import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, FlatList, Pressable } from 'react-native'
import { Ionicons } from '@expo/vector-icons'; 
import searchResults from '../assets/data/search'
import { useNavigation } from '@react-navigation/native';

const DestinationSearchScreen = ({ }) => {
    const [searchPlace, setSearchPlace] = useState('')
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <TextInput
                value={searchPlace}
                onChangeText={text => setSearchPlace(text)}
                placeholder="Rechercher un lieu"
                placeholderTextColor="lightgray"
                style={styles.searchInput} />

            <FlatList
                renderItem={itemData => (
                    <Pressable onPress={() => navigation.navigate('Guests')}style={styles.containerResult}>
                        <View style={styles.backgroundIcon}>
                            <Ionicons name="ios-location-sharp" size={30} color="black" />
                        </View>
                        <Text style={styles.textResult}>{itemData.item.description}</Text>
                    </Pressable>
                )}
                data={searchResults} />
        </View>
    )
}

export default DestinationSearchScreen

const styles = StyleSheet.create({
    container: {
        marginTop: 40,
        marginHorizontal: 30,
    },
    searchInput: {
        fontSize: 20, 
        marginBottom: 20
    },
    containerResult: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomColor: 'lightgray',
        borderBottomWidth: 1,
        paddingVertical: 20
    },
    backgroundIcon: {
        height: 50,
        width: 50,
        borderRadius: 10,
        backgroundColor: 'lightgray',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textResult: {
        marginLeft: 15,
        fontSize: 16,
        fontWeight: 'bold'
    }
})
