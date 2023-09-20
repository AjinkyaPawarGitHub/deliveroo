import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'

const RestaurantScreen = () => {

    const {
        params: {
            id,
            imgUrl,
            title,
            rating,
            genre,
            address,
            short_description,
            dishes,
            log,
            lat,
        },
    } = useRoute();
    return (
        <View>
            <Text>{title}{id}</Text>
        </View>
    )
}

export default RestaurantScreen

const styles = StyleSheet.create({})