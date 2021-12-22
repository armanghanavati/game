import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Header = (props) => {
    return (
        <View style={styles.header} >
            <Text style={styles.textHeader} >{props.title} </Text>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    header:{
        paddingTop:30,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#f7287b',
        height:90,
        width:'100%',
    },
    textHeader:{
        fontSize:25
    }
})
