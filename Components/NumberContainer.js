import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const NumberContainer = ( props ) => {
    return (
        <View style={styles.container} >
            <Text style={styles.Number} >{props.children}</Text>
        </View>
    )
}

export default NumberContainer

const styles = StyleSheet.create({
    container:{
        borderWidth:2,
        borderColor:'red',
        padding:10,
        borderRadius:8,
        marginVertical:8,
        justifyContent:'center',
        alignItems:'center',
        
    },
    
    Number:{
        color:'red',
        fontSize:24,
    }

})
