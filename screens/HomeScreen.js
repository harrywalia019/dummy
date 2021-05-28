import React from 'react';
import {View,Text, Button, StyleSheet} from 'react-native';

const HomeScreen = ({navigation}) => {
    return(
      <View style={styles.container}>
  <Text>Home Screen</Text>
  <Button title="Go to details screen" onPress={()=> navigation.navigate("Details")}></Button>
      </View>
    );
  };


  const styles=StyleSheet.create({
    container:{
      flex:1,
      alignItems:'center',
      justifyContent:'center'
  }
})
  export default HomeScreen;
  