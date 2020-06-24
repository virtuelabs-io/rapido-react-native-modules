import React from 'react';
import { View } from 'react-native';
import { DetailsHolderProps, DetailsHolderState } from './types';
import { Styles } from './styles';
import { RMediumText, RText } from '../../atoms';


export class DetailsHolder extends React.Component<DetailsHolderProps, DetailsHolderState> {

    constructor(props: DetailsHolderProps) {
        super(props)
    }

    render(): React.ReactNode {
        return (
            <View style={Styles.detailsContainer}>
                <View style={Styles.leftContainer}>
                    <RMediumText>{this.props.name}</RMediumText>
                </View>
                <View style={Styles.rightContainer}>
                    <RText>{this.props.value}</RText>
                </View>
            </View>
        )
    }
}
