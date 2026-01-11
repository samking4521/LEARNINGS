import { Canvas, Circle, Group, ImageFormat, useCanvasRef } from "@shopify/react-native-skia";
import { router } from "expo-router";
import React, { useEffect, useState } from "react";
import { Button, Image, LayoutChangeEvent, StyleSheet, useWindowDimensions, View } from "react-native";
import { useSharedValue } from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";

const App = () => {
    const { width, height } = useWindowDimensions()
    const [img, setImg] = useState<string | null>(null)
    const canvasRef = useCanvasRef()

  const r = 60

  const canvasSize = (event: LayoutChangeEvent) => {
    const { x, y, width, height } = event.nativeEvent.layout;
            // You can use width and height here if needed
            console.log(`x: ${x}, y: ${y}, width: ${width}, height: ${height}`)
  }

  const size = useSharedValue({width: 0, height: 0})
  
  useEffect(()=>{
   
        console.log('reanimated size: ', size.value)
  }, [])
  

  const createImage = ()=>{
       const image = canvasRef.current?.makeImageSnapshot()
       if(image){
          const base64 = image.encodeToBase64?.(ImageFormat.PNG);
           setImg(`data:image/png;base64,${base64}`)
       }
  }
  
  
  return (
    <SafeAreaView style={styles.container}>
     <Canvas ref={canvasRef} onSize={size} onLayout={canvasSize}  style={styles.canvasSize}>
        <Group blendMode="multiply">
            <Circle cx={width/2} cy={120} r={r} color="yellow" />
           <Circle cx={width/2 - r/2} cy={120 - r} r={r} color="cyan" />
           <Circle cx={width/2 + r/2} cy={120 - r} r={r} color="magenta" />
        </Group>
         
    </Canvas>
    {img && <Image source={{uri: img}} style={styles.image}/>}
    <View style={styles.button}>
        <Button onPress={createImage} title="Create Image"/>
    </View>
    <View style={styles.button}>
        <Button onPress={()=> router.push("/painting")} title="Next"/>
    </View>
    </SafeAreaView>
    
  );
};

export default App;

const styles = StyleSheet.create({
    container : {
        flex: 1,
        
    },
    canvasSize: {
        width: "100%",
        height: 200,
       
    },
    button: {
        marginTop: 20,
        alignSelf:"center"
    },
    image: {
        width: "100%", 
        height: 200
    }
})