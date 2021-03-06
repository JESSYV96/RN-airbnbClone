import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, View, Image, Text, Pressable } from 'react-native'
import { PostType } from '../types'

export type PostProps = {
    post: PostType
}

const Post = ({ post }: PostProps) => {
    const navigation = useNavigation();
    const goToPostDetailsPage = () => {
        navigation.navigate('PlaceDetails', {post})
    }
    return (
        <Pressable onPress={goToPostDetailsPage} style={styles.container}>
            <Image
                source={{ uri: post.image }}
                style={styles.image} />
            <Text style={styles.bedrooms}>{post.bed} {post.bed > 1 ? 'lits' : 'lit'} • {post.bedroom} {post.bedroom > 1 ? 'chambres' : 'chambre'}</Text>
            <Text style={styles.description}>{post.type} • {post.title}</Text>
            <Text style={styles.prices}>
                <Text style={styles.oldPrice}>{post.oldPrice} €</Text>
                <Text style={styles.newPrice}> {post.newPrice} € </Text>
                / nuit</Text>
            <Text style={styles.totalPrice}>Total {post.totalPrice} €</Text>
        </Pressable>
    )
}

export default Post

const styles = StyleSheet.create({
    container: {
        margin: 20
    },
    image: {
        width: '100%',
        aspectRatio: 3 / 2,
        resizeMode: 'cover',
        borderRadius: 10
    },
    bedrooms: {
        marginVertical: 10,
        color: 'grey'
    },
    description: {
        marginVertical: 10,
        fontSize: 18,
        lineHeight: 25
    },
    prices: {
        marginVertical: 10,
        fontSize: 18,
        fontWeight: 'bold'
    },
    oldPrice: {
        color: 'gray',
        textDecorationLine: 'line-through',

    },
    newPrice: {},
    totalPrice: {
        marginVertical: 10,
        color: 'gray',
        textDecorationLine: 'underline',
    },
})
