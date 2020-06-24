import React from 'react';
import { View } from 'react-native';
import { CommentHolderProps, CommentHolderState } from './types';
import { Styles } from './styles';
import { Feather } from '@expo/vector-icons';
import { RMediumText, DateTime, RText } from '../../atoms';
import { Colors } from '../../../commons/styles/colors';


export class CommentHolder extends React.Component<CommentHolderProps, CommentHolderState> {

    constructor(props: CommentHolderProps) {
        super(props)
    }

    render(): React.ReactNode {
        return (
            <View style={Styles.commentHolderContainer}>
                <View style={Styles.commentorHolder}>
                    <View style={Styles.commentorInfo}>
                        <Feather name="user" size={24} color={Colors.primary} />
                        <RMediumText> {this.props.commentedBy}</RMediumText>
                    </View>
                    <DateTime>{this.props.commentedOn}</DateTime>
                </View>
                <View style={Styles.commentText}>
                    <RText>{this.props.text}</RText>
                </View>
            </View>
        );
    }
}
