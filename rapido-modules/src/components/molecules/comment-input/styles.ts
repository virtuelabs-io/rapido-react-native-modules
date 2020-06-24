import { StyleSheet } from 'react-native';

export const Styles = StyleSheet.create({
    commentInputContainer: {
        flexDirection: 'column',
        width: "100%",
        paddingVertical: 5
    },
    commentAuthorContainer: {
        flexDirection: 'row',
        alignContent: 'flex-start',
        justifyContent: 'flex-start',
        paddingHorizontal: '5%',
        paddingVertical: 5
    },
    commentIconContainer: {
        paddingRight: 5
    }
});

export default Styles
