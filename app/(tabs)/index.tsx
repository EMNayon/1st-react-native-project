import React from 'react';
import { Image, StyleSheet, Platform, SafeAreaView, View,Text,Button} from 'react-native';
import { Card } from 'react-native-elements';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { ExternalLink } from '@/components/ExternalLink';



export default function HomeScreen() {
  const handlePress = () =>{
    alert('Button Pressed');
  };
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/logo.jpg')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome!</ThemedText>
        <ThemedText type="title">Our House</ThemedText>
        <HelloWave />
      </ThemedView>
      
      <Button title='Test' onPress={handlePress}/>
      
      
    </ParallaxScrollView>





  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginTop: 8,
  },
  reactLogo: {
    height: 224,
    width: 395,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
