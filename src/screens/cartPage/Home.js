import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Home = (props) => {
  return (
    <View style={styles.mainContainer}>
      <Button title='Go to shopping' onPress={()=> props.navigation.navigate("ShoppingPage")}/>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  mainContainer:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})