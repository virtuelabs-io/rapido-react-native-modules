import React from 'react';
import { View } from 'react-native';
import { EventHolderProps, EventHolderState } from './types';
import { Styles } from './styles';
import { RMediumText, DateTime, OrderStatus, RText } from '../../atoms';
import { Feather } from '@expo/vector-icons';
import { Colors } from '../../../commons/styles/colors';


export class EventHolder extends React.Component<EventHolderProps, EventHolderState> {

    constructor(props: EventHolderProps) {
        super(props)
    }

    render(): React.ReactNode {
        return (
            <View style={Styles.eventContainer}>
                <View style={Styles.eventLeftContainer}>
                    <Feather name="git-commit" size={36} color={Colors.primary} />
                </View>
                <View style={Styles.eventRightContainer}>
                    <View style={Styles.eventHeaderContainer}>
                        <View style={Styles.eventAuthorContainer}>
                            <Feather name="user" size={24} color={Colors.primary} />
                            <RMediumText> {this.props.data.changedBy}</RMediumText>
                        </View>
                        <OrderStatus>{this.props.data.changedState.toUpperCase()}</OrderStatus>
                    </View>
                    <RText>{this.props.data.comment}</RText>
                    <View style={Styles.eventTimeContainer}>
                        <DateTime>{this.props.data.eventDate}</DateTime>
                    </View>
                </View>
            </View >
        )
    }
}
