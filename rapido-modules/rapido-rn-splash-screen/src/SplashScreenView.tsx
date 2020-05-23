import React from 'react';
import { Text, View } from 'react-native';
import { SplashScreenStyles } from './SplashScreenStyles';
import { SplashScreenProps, SplashScreenState } from './SplashScreenTypes';


export class SplashScreen extends React.Component<SplashScreenProps, SplashScreenState> {
  constructor(props: SplashScreenProps) {
    super(props);
  }
  render() {
    return (
        <View style={SplashScreenStyles.container}>
            <Text style={SplashScreenStyles.title}>{this.props.name}</Text>
        </View>
    );
  }
}
