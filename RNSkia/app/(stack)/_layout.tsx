import { Stack } from 'expo-router'
import React from 'react'

export default function StackLayout(){
  return (
   
        <Stack screenOptions={{ 
          headerShown: false,
          animation: "slide_from_left"
        }}>
           <Stack.Screen name='index'/>
           <Stack.Screen name='painting'/>
        </Stack>
    
  )
}