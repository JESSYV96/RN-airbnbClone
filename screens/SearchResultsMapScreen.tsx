import React, { useEffect, useState, useRef } from 'react'
import { Dimensions, StyleSheet, Text, View, FlatList, useWindowDimensions } from 'react-native'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import CustomMaker from '../components/CustomMaker'
import places from '../assets/data/feeds'
import PostCarouselItem from '../components/PostCarouselItem'

const SearchResultsMapScreen = () => {
    const [selectedPlaceId, setSelectedPlaceId] = useState()
    const windowWidth = useWindowDimensions().width;
    const flatlist = useRef()
    const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 90 })
    const map = useRef()

    const onViewChanged = useRef(({ viewableItems }: any) => {
        if (viewableItems.length > 0) {
            const selectedPlace = viewableItems[0].item
            setSelectedPlaceId(selectedPlace.id)

        }
    })

    useEffect(() => {
        if (!selectedPlaceId || !flatlist) {
            return
        }
        const index = places.findIndex(place => place.id === selectedPlaceId)
        flatlist.current.scrollToIndex({ index })
        const selectedPlace = places[index]
        const region = {
            latitude: selectedPlace.coordinate.latitude,
            longitude: selectedPlace.coordinate.longitude,
            latitudeDelta: 0.8,
            longitudeDelta: 0.8,
        }
        map.current.animateToRegion(region)
    }, [selectedPlaceId])

    return (
        <View style={{ height: '100%' }}>
            <MapView
                ref={map}
                provider={PROVIDER_GOOGLE}
                style={styles.map}
                initialRegion={{
                    latitude: 28.3279822,
                    longitude: -16.5124847,
                    latitudeDelta: 0.8,
                    longitudeDelta: 0.8,
                }}>
                {places && places.map(place => (
                    <CustomMaker
                        key={place.id}
                        isSelected={place.id === selectedPlaceId}
                        coordinate={place.coordinate}
                        setSelectedPlaceId={() => setSelectedPlaceId(place.id)}
                        price={place.newPrice} />
                ))}

            </MapView>
            <View style={{ position: 'absolute', bottom: 20 }}>
                <FlatList
                    ref={flatlist}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    snapToInterval={windowWidth - 40}
                    snapToAlignment='center'
                    decelerationRate='fast'
                    viewabilityConfig={viewConfig.current}
                    onViewableItemsChanged={onViewChanged.current}
                    renderItem={(itemData) =>
                        <PostCarouselItem
                            key={itemData.item.id}
                            post={itemData.item} />
                    }
                    data={places} />
            </View>

        </View>


    )
}

export default SearchResultsMapScreen

const styles = StyleSheet.create({
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
})
