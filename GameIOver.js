import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

const GameIOver = ( props ) => {
    return (
        <View style={styles.screen} >
            <Text> بازی تمام شد </Text>
            <Text> دور:{ props.roundsNumber } </Text>
            <Text> رقم شما: { props.userNumber } </Text>
            <Button title='بازی جدید' onPress={props.onRestart} /> 
        </View>
    )
}

export default GameIOver

const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})
