import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { FilterHolderProps, FilterHolderState } from './types';
import { Styles } from './styles';
import { RMediumText, RThinText } from '../../atoms';
import { Feather } from '@expo/vector-icons';
import { Colors } from '../../../commons/styles/colors';


export class FilterHolder extends React.Component<FilterHolderProps, FilterHolderState> {

    constructor(props: FilterHolderProps) {
        super(props)
    }

    render(): React.ReactNode {
        return (
            <TouchableOpacity style={Styles.filterContainer} onPress={this.props.navigationFunc}>
                <View style={Styles.filterIcon}>
                    <Feather name={this.props.icon} size={30} color={Colors.primary} />
                </View>
                <View style={Styles.filterText}>
                    <RMediumText>{this.props.filterTitle}</RMediumText>
                    <RThinText>{this.props.filterValue}</RThinText>
                </View>
                <View style={Styles.filterNavigationIcon}>
                    <Feather name="chevron-right" size={30} color={Colors.primary} />
                </View>
            </TouchableOpacity>
        )
    }
}
