import React from 'react'
import {
    StyleSheet,
    ImageBackground,
    View,
    Text,
    Dimensions,
    Pressable
} from 'react-native'
import { Fontisto } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
    const navigation = useNavigation();

    return (
        <View>
            <Pressable
                style={styles.searchButton}
                onPress={() => navigation.navigate('DestinationSearch')}>
                <Fontisto name="search" size={25} color="#f15454" />
                <Text style={styles.buttonText}>Where are you going?</Text>
            </Pressable>
            <ImageBackground
                source={require('../assets/images/wallpaper.jpg')}
                style={styles.image}>
                <Text style={styles.title}>Go near</Text>
                <Pressable
                    style={styles.button}
                    onPress={() => console.warn('Press')}>
                    <Text style={styles.buttonText}>Explore nearby stays</Text>
                </Pressable>
            </ImageBackground>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: Dimensions.get('window').height / 1.7,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    title: {
        fontSize: 80,
        fontWeight: 'bold',
        color: 'white',
        width: '60%',
        marginLeft: 20
    },
    button: {
        backgroundColor: 'white',
        width: 200,
        height: 40,
        marginLeft: 20,
        justifyContent: 'center',
        paddingLeft: 15,
        borderRadius: 10
    },
    searchButton: {
        flexDirection: 'row',
        backgroundColor: 'white',
        width: Dimensions.get('screen').width - 20,
        marginHorizontal: 10,
        height: 55,
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 15,
        borderRadius: Dimensions.get('screen').width / 2,
        position: 'absolute',
        top: 50,
        zIndex: 9999
    },
    buttonText: {
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold'
    }
})
