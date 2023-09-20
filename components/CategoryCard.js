import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'

const CategoryCard = ({ imgUrl, title }) => {
    return (
        <TouchableOpacity style={styles.touchableOpacity}>

            <Image source={{
                uri: imgUrl
            }}
                style={styles.image}
            />
            <Text style={styles.text}>
                {title}
            </Text>
        </TouchableOpacity>

    )
}

export default CategoryCard

const styles = StyleSheet.create
    ({
        touchableOpacity:
        {
            marginRight: 4,
            position: 'relative',

        },
        image:
        {
            height: 80,
            width: 80,
            borderRadius: 10
        },
        text:
        {
            position: 'absolute',
            bottom: 1,
            left: 1,
            color: 'white',
            fontWeight: 'bold',

        }
    })