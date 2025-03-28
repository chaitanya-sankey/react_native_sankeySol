import React from 'react';
import { View, Image, Text }from 'react-native'
const appOne = () => {
    const uname ='IRON MAN';
  return(
   
  <View style = {{
       flex:1,
       justifyContent:'center',
       alignItems:'center',
       backgroundColor:'gray'
     }}>
   
    <Image source={{
        uri:'https://w7.pngwing.com/pngs/699/18/png-transparent-iron-man-edwin-jarvis-iron-man-s-avengers-superhero-iron-man-thumbnail.png' 
    
    }}
    style ={{width:200 , height:250 }}></Image>
     <Text> my Name is </Text>
     <Text>{uname}</Text>
 </View>
 
  )  
}
export default appOne;