import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Marker } from 'react-native-maps'

export type MarkerProps = {
    coordinate: {
        latitude: number,
        longitude: number,
    },
    isSelected: boolean
    setSelectedPlaceId(): void
    price: number
}

const CustomMaker = ({ coordinate, price, setSelectedPlaceId, isSelected }: MarkerProps) => {
    return (
        <Marker
            onPress={setSelectedPlaceId}
            coordinate={coordinate}>
            <View style={{ ...styles.containerMarkerPrice, backgroundColor: isSelected ? 'black' : 'white' }}>
                <Text style={{ ...styles.markerPrice, color: isSelected ? 'white' : 'black' }}>{price} €</Text>
            </View>
        </Marker>
    )
}

export default CustomMaker

const styles = StyleSheet.create({
    containerMarkerPrice: {
        padding: 5,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: 'gray'
    },
    markerPrice: {
        fontWeight: 'bold'
    }
})
