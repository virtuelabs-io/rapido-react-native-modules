import React from 'react';
import { Text } from 'react-native';
import { SimpleListHolderProps, SimpleListHolderState } from './types';
import { Styles } from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';


export class SimpleListHolder extends React.Component<SimpleListHolderProps, SimpleListHolderState> {

    constructor(props: SimpleListHolderProps) {
        super(props)
    }

    render(): React.ReactNode {
        return (
            <TouchableOpacity style={Styles.simpleListItemContainer} onPress={this.props.onSelection.bind(this, this.props.value)}>
                <Text style={Styles.simpleItemText}>{this.props.value}</Text>
            </TouchableOpacity>
        );
    }
}
