import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import places from '../assets/data/feeds'
import DetailsPost from '../components/DetailsPost'
import { useRoute } from '@react-navigation/native';

const PlaceScreen = () => {
    const route = useRoute();
    const post = route.params.post
    return (
        <View style={styles.container}>
            <DetailsPost post={post}/>
        </View>
    )
}

export default PlaceScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white'
    }
})
