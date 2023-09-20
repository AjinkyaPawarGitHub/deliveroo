import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurantCard from './RestaurantCard'
import sanityClient from '../sanity'

const FeaturedRow = ({ id, title, description }) => {
    const [restaurants, setRestaurants] = useState([])

    useEffect(() => {
        sanityClient.fetch(
            `
            *[_type == "featured" && _id == $id ]{
              ...,
            restaurants[]->{
              ...,
              dishes[]->,
          type-> {
            name
          }
            },
          }[0]
      `,
            { id }
        )
            .then((data) => {
                setRestaurants(data?.restaurants);
            });
    }, [id])

    console.log(restaurants)

    return (
        <View>
            <View style={styles.first}>
                <Text style={styles.second}>{title}</Text>
                <ArrowRightIcon
                    color="#00ccbb" />
            </View>

            <Text style={styles.third}>{description}</Text>

            <ScrollView
                horizontal
                contentContainerStyle=
                {{
                    paddingHorizontal: 15,

                }}
                showsHorizontalScrollIndicator={false}
                style={styles.fourth}
            >
                {restaurants?.map(restaurant =>
                (
                    <RestaurantCard
                        key={restaurant._id}
                        id={restaurant._id}
                        imgUrl={restaurant.image}
                        title={restaurant.name}
                        rating={restaurant.rating}
                        genre={restaurant.type?.name}
                        address={restaurant.name}
                        short_description={restaurant.short_description}
                        dishes={restaurant.dishes}
                        log={restaurant.long}
                        lat={restaurant.lat}



                    />

                ))}


            </ScrollView>
        </View>
    )
}

export default FeaturedRow

const styles = StyleSheet.create
    ({
        first:
        {
            marginTop: 4, // Equivalent to mt-4 in Tailwind CSS
            flexDirection: 'row', // Equivalent to flex-row in Tailwind CSS
            alignItems: 'center', // Equivalent to items-center in Tailwind CSS
            justifyContent: 'space-between', // Equivalent to justify-between in Tailwind CSS
            padding: 4,
            marginLeft: 9
        },
        second:
        {
            fontWeight: 'bold', // Equivalent to font-bold in Tailwind CSS
            fontSize: 18, // Equivalent to text-lg in Tailwind CSS
        },
        third:
        {
            fontSize: 12,  // Equivalent to text-xs in Tailwind CSS
            color: '#718096',  // Equivalent to text-gray-500 in Tailwind CSS
            paddingHorizontal: 16  // Equivalent to px-4 in Tailwind CSS
        },
        fourth:
        {
            paddingTop: 4,

        }


    })