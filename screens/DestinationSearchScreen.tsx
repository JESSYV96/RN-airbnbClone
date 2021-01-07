import React, { useState } from 'react'
import { StyleSheet, Text, ScrollView, View, FlatList, Pressable } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_PLACES_API_KEY } from '../env';

const DestinationItem = ({ item, navigation }: any) => {
    return <View style={styles.destination}>
        <View style={styles.backgroundIcon}>
            <Ionicons name="ios-location-sharp" size={18} color="black" />
        </View>
        <Text style={styles.textResult}>{item.description}</Text>
    </View>
}

const DestinationSearchScreen = ({ }) => {
    const [searchPlace, setSearchPlace] = useState('')
    const navigation = useNavigation();

    return (
        <ScrollView
            style={styles.container}
            keyboardShouldPersistTaps='always'>
            <GooglePlacesAutocomplete
                placeholder='Rechercher un lieu'
                onPress={(data, details = null) => {
                    console.log(data, details);
                    navigation.navigate('Guests')
                }}
                query={{
                    key: GOOGLE_PLACES_API_KEY,
                    language: 'fr',
                    types: '(cities)'
                }}
                renderRow={item => <DestinationItem item={item} navigation={navigation} />}
                enablePoweredByContainer={false}
            />
        </ScrollView>
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
    destination: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
    },
    backgroundIcon: {
        height: 30,
        width: 30,
        borderRadius: 10,
        backgroundColor: 'lightgray',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textResult: {
        marginLeft: 15,
        fontSize: 12,
        fontWeight: 'bold'
    }
})
