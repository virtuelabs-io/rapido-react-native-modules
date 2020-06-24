import React from 'react';
import { View } from 'react-native';
import { CommentInputProps, CommentInputState } from './types';
import { Styles } from './styles';
import { Feather } from '@expo/vector-icons';
import { Colors } from '../../../commons/styles/colors';
import { MultiLineInput, RTitleText } from '../../atoms';


export class CommentInput extends React.Component<CommentInputProps, CommentInputState> {

    constructor(props: CommentInputProps) {
        super(props)
    }

    render(): React.ReactNode {
        return (
            <View style={Styles.commentInputContainer}>
                <View style={Styles.commentAuthorContainer}>
                    <View style={Styles.commentIconContainer}>
                        <Feather name="user" size={30} color={Colors.primary} />
                    </View>
                    <RTitleText> {this.props.author}</RTitleText>
                </View>
                <MultiLineInput
                    value={this.props.value}
                    placeHolder={this.props.placeholder}
                    numberOfLines={this.props.numberOfLines}
                    onChange={this.props.onChange}
                />
            </View>
        );
    }
}
