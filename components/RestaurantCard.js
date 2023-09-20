import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import { StarIcon } from 'react-native-heroicons/solid'
import { LocationMarkerIcon } from 'react-native-heroicons/outline'
import { urlFor } from '../sanity'
import { useNavigation } from '@react-navigation/native'
const RestaurantCard = (
    {

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
    }
) => {
    const navigation = useNavigation()
    return (
        <TouchableOpacity
            style={styles.ninth}
            onPress={() => {
                navigation.navigate('Restaurant'),
                {

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
                }
            }}
        >
            <Image
                source={{
                    uri: urlFor(imgUrl).url(),
                }}
                style={styles.first} />
            <View style={styles.third}>
                <Text style={styles.second}>{title}</Text>

                <View style={styles.forth}>
                    <StarIcon
                        color="green"
                        opacity={0.5}
                        size={22}
                    />
                    <Text style={styles.sixth}>
                        <Text style={styles.fifth}>{rating}</Text>
                        . {genre}</Text>
                </View>

                <View style={styles.eight}>
                    <LocationMarkerIcon
                        color="gray"
                        size={22}
                        opacity={0.4} />
                    <Text style={styles.seventh}>Nearby . {address}</Text>
                </View>
            </View>

        </TouchableOpacity>
    )
}

export default RestaurantCard

const styles = StyleSheet.create
    ({
        first:
        {
            height: 144,
            width: 256,
            borderRadius: 4
        },
        second:
        {
            fontWeight: 'bold',
            fontSize: 20,
            paddingTop: 8
        },
        third:
        {
            paddingLeft: 12,
            paddingBottom: 16

        },
        forth:
        {
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 2

        },
        fifth:
        {
            color: 'green'

        },
        sixth:
        {
            fontSize: 12,
            color: '#718096'

        },
        seventh:
        {
            fontSize: 12,
            color: '#718096'
        },
        eight:
        {
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 2
        },
        ninth:
        {
            backgroundColor: '#fff',   // Equivalent to bg-white in Tailwind CSS
            marginRight: 12,          // Equivalent to mr-3 in Tailwind CSS
            shadowColor: '#000',       // Assuming you want a black shadow
            shadowOffset: { width: 0, height: 2 },  // Shadow offset
            shadowOpacity: 0.2,       // Shadow opacity
            shadowRadius: 4,          // Shadow radius
            width: 256,               // Equivalent to w-64 in Tailwind CSS
            height: 256               // Equivalent to h-64 in Tailwind CSS
        }


    })