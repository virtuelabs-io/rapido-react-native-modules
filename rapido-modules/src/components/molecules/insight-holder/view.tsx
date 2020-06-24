import React from 'react';
import { View } from 'react-native';
import { InsightHolderProps, InsightHolderState } from './types';
import { Styles } from './styles';
import { RText, Card, InsightPill } from '../../atoms';
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';


export class InsightHolder extends React.Component<InsightHolderProps, InsightHolderState> {

    constructor(props: InsightHolderProps) {
        super(props)
    }

    render(): React.ReactNode {
        return (
            <Card>
                <View style={Styles.insightHolderContainer}>
                    <View style={Styles.insightHeaderContainer}>
                        <View style={Styles.pillContainer}>
                            <InsightPill backgroundColor={this.props.backgroundColor} icon={this.props.icon}>{this.props.insight.type}</InsightPill>
                        </View>
                        <View style={Styles.ackContainer}>
                            <TouchableOpacity onPress={this.props.onAck}>
                                <Feather name="thumbs-up" size={24} color="black" />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View>
                        <RText>{this.props.insight.text.replace("{value}", this.props.formatedValue)}</RText>
                    </View>
                </View>
            </Card>
        );
    }
}
