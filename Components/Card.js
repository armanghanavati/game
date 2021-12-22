import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Card = (props) => {
    return (
        <View style={{ ...styles.Card, ...props.style }} >
  {props.children} 
        </View>
    )
}

export default Card

const styles = StyleSheet.create({
    Card:{
        elevation:5,
        padding:20,
        borderRadius:30,
        backgroundColor:'white'
    },
})
