import React, { useState } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native';

const GuestsScreen = () => {
    const [adults, setAdults] = useState(0)
    const [children, setChildren] = useState(0)
    const [infants, setInfants] = useState(0)
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View>
                <View style={styles.row}>
                    <View>
                        <Text style={styles.people}>Adultes</Text>
                        <Text style={styles.age}>13 ans et plus</Text>
                    </View>
                    <View style={styles.containerButtons}>
                        <Pressable
                            onPress={() => setAdults(Math.max(0, adults - 1))}
                            style={styles.button}>
                            <Text style={styles.buttonElt}>-</Text>
                        </Pressable>
                        <Text style={styles.buttonElt}>{adults}</Text>
                        <Pressable
                            onPress={() => setAdults(adults + 1)}
                            style={styles.button}>
                            <Text style={styles.buttonElt}>+</Text>
                        </Pressable>
                    </View>
                </View>
                <View style={styles.row}>
                    <View>
                        <Text style={styles.people}>Enfants</Text>
                        <Text style={styles.age}>2 ans à 12 ans</Text>
                    </View>
                    <View style={styles.containerButtons}>
                        <Pressable
                            onPress={() => setChildren(Math.max(0, children - 1))}
                            style={styles.button}>
                            <Text style={styles.buttonElt}>-</Text>
                        </Pressable>
                        <Text style={styles.buttonElt}>{children}</Text>
                        <Pressable
                            onPress={() => setChildren(children + 1)}
                            style={styles.button}>
                            <Text style={styles.buttonElt}>+</Text>
                        </Pressable>
                    </View>
                </View>
                <View style={styles.row}>
                <View>
                    <Text style={styles.people}>Bébé</Text>
                    <Text style={styles.age}>Moins de 2 ans</Text>
                </View>
                <View style={styles.containerButtons}>
                    <Pressable
                        onPress={() => setInfants(Math.max(0, infants - 1))}
                        style={styles.button}>
                        <Text style={styles.buttonElt}>-</Text>
                    </Pressable>
                    <Text style={styles.buttonElt}>{infants}</Text>
                    <Pressable
                        onPress={() => setInfants(infants + 1)}
                        style={styles.button}>
                        <Text style={styles.buttonElt}>+</Text>
                    </Pressable>
                </View>
            </View>
            </View>
            <Pressable 
                onPress={() => navigation.navigate('')}
                style={styles.searchButton}>
                <Text style={styles.searchButtonText}>Rechercher</Text>
            </Pressable>
        </View>
    )
}

export default GuestsScreen

const styles = StyleSheet.create({
    container: {
        marginVertical: 50,
        marginHorizontal: 20,
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: 'lightgray'
    },
    containerButtons: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    people: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    age: {
        fontSize: 16,
        color: 'gray'
    },
    button: {
        width: 40,
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 20,
        marginHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonElt: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'gray'
    },
    searchButton: {
        height: 60,
        width: '100%',
        backgroundColor: '#f15454',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    searchButtonText: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 20,
    },
})
