import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { StyleSheet, Text, View, Image, useWindowDimensions, Pressable } from 'react-native'
import { PostProps } from './Post'

const PostCarouselItem = ({ post }: PostProps) => {
    const windowWidth = useWindowDimensions().width;
    const navigation = useNavigation();
    const goToPostDetailsPage = () => {
        navigation.navigate('PlaceDetails', { post })
    }
    return (
        <Pressable onPress={goToPostDetailsPage} style={styles.innerContainer}>
            <View style={{ ...styles.container, width: windowWidth - 60 }}>
                <Image
                    source={{ uri: post.image }}
                    style={styles.image} />
                <View style={styles.placeInfo}>
                    <Text style={styles.bedrooms}>{post.bed} {post.bed > 1 ? 'lits' : 'lit'} • {post.bedroom} {post.bedroom > 1 ? 'chambres' : 'chambre'}</Text>
                    <Text numberOfLines={2} style={styles.description}>{post.type}. {post.title}</Text>
                    <Text style={styles.prices}>
                        <Text>{post.newPrice} € </Text>
                / nuit</Text>
                </View>
            </View>
        </Pressable>
    )
}

export default PostCarouselItem

const styles = StyleSheet.create({
    container: {
        height: 120,
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: 'white',
        margin: 10,
        borderRadius: 10,
        overflow: 'hidden',

    },
    innerContainer: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    image: {
        height: '100%',
        width: 120,
    },
    placeInfo: {
        flex: 1,
        marginLeft: 15,
    },
    bedrooms: {
        marginVertical: 10,
        color: 'grey'
    },
    description: {
        marginVertical: 5,
        paddingRight: 15,
        fontSize: 16,
    },
    prices: {
        marginVertical: 5,
        fontSize: 14,
        fontWeight: 'bold'
    },
})