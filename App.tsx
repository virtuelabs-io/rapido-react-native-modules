import React, { useState } from 'react';
import * as Font from 'expo-font';
import { ScrollView, View, StyleSheet } from 'react-native';
import { RText, RHeadingText } from './rapido-modules/src/components/atoms';
import { enableScreens } from 'react-native-screens';
import { AppLoading } from 'expo';
import Constants from './rapido-modules/src/commons/constants/index';

enableScreens()

const fetchFonts = () => {
    return Font.loadAsync(Constants.FONTS);
};

export default function App() {
    const [fontLoaded, setFontLoaded] = useState(false);

    if (!fontLoaded) {
        return (
            <AppLoading
                startAsync={fetchFonts}
                onFinish={() => setFontLoaded(true)}
            />
        );
    }
    return (
        <ScrollView>
            <View style={styles.screen}>
                <RHeadingText>Rapidobuild</RHeadingText>
                <RText>Modules</RText>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    screen: {
        marginTop: 30,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
