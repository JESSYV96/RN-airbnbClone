import React from 'react'
import { View, FlatList } from 'react-native'
import feeds from '../assets/data/feeds'
import Post from '../components/Post';

const SearchResultsScreen = () => {
    return (
        <View>
            <FlatList
                renderItem={itemData =>
                    <Post
                        key={itemData.item.id}
                        post={itemData.item} />}
                data={feeds} />
        </View>
    )
}

export default SearchResultsScreen