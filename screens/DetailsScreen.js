import React from 'react';
import {View,Text, Button, StyleSheet} from 'react-native';

const DetailsScreen = ({navigation}) => {
    return(
      <View style={styles.container}>
  <Text>Details Screen</Text>
  <Button title="Go to details screen again..." onPress={()=> navigation.push("Details")}></Button>
  <Button title="Go to Home screen" onPress={()=> navigation.navigate("Home")}></Button>
  <Button title="Go tback" onPress={()=> navigation.goBack()}></Button>
  <Button title="Go to First Screen" onPress={()=> navigation.popToTop()}></Button>
  
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

  export default DetailsScreen;