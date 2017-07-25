import React from 'react';
import { 
    StyleSheet, 
    Text,
    View,
    Modal,
    TouchableHighlight,
    TextInput
} from 'react-native';

export default class TodoCreate extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            text: ''
        };

        this.onCreate = this.onCreate.bind(this);
    }

    onCreate() {
        this.props.onCreate(this.state.text);
    }

    render() {
        return (
            <Modal
                animationType={"slide"}
                transparent={false}>
                <View>
                    <Text>Create new task</Text>

                    <TextInput
                        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                        onChangeText={(input) => this.setState({text: input})}
                    />

                    <TouchableHighlight onPress={this.onCreate}>
                        <Text>Create</Text>
                    </TouchableHighlight>
                </View>
            </Modal>
        )
    }
}