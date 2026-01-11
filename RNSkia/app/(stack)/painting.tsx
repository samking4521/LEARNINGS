import { Canvas, Circle, Group, Paint, Skia, vec } from '@shopify/react-native-skia'
import React from 'react'
import { Dimensions, SafeAreaView, StyleSheet } from 'react-native'

const {width, height} = Dimensions.get('window')
const RADIUS = 80
const paint = Skia.Paint()
paint.setColor(Skia.Color("green"))


export default function Painting() {
    const c = vec( width/2, height/4 )
    const c2 = vec(width/3, height/2 + RADIUS*2)
     const c3 = vec(width - RADIUS, height/2 + RADIUS*2 )
      const c4= vec(width/3, height/2 + RADIUS*2 )
  return (
     <SafeAreaView style={styles.topContainer}>
         <Canvas style={styles.container}>
                <Circle c={c} color={"red"} r={RADIUS}>
                        <Paint color={'cyan'} style={"stroke"} strokeWidth={20} />
                         <Paint color={'magenta'} style={"stroke"} strokeWidth={10}  />
                          <Paint color={'yellow'} style={"stroke"} strokeWidth={5} />
                </Circle>

                <Group color={'rgb(0, 0, 255)'} >
                     <Circle c={c3} r={RADIUS - 20} style={"stroke"} strokeWidth={10}/>
                </Group>
                    <Group blendMode={'overlay'}>
                                             <Circle color={'red'} c={c2} r={RADIUS - 20}/>

                <Circle color="green"  c={c4} r={RADIUS}/>

                    </Group>
                    
         </Canvas>
     </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    topContainer: {
        flex: 1
    },
    container: {
        flex: 1,
        backgroundColor: "pink"
    }
})