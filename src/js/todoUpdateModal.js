import React from 'react';
import { 
    StyleSheet, 
    Text,
    View,
    Modal,
    TouchableHighlight,
    TextInput
} from 'react-native';

export default class TodoUpdate extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            text: ''
        };

        this.onUpdate = this.onUpdate.bind(this);
    }

    onUpdate() {
        const {currentTask} = this.props;
        var updatedTask = {
            id: currentTask.id,
            content: this.state.text,
            status: currentTask.status
        }
        this.props.onUpdate(updatedTask);
    }

    render() {
        const {currentTask} = this.props;
        return (
            <Modal
                animationType={"slide"}
                transparent={false}>
                <View>
                    <Text>Update task</Text>

                    <TextInput
                        style={[{height: 40, borderColor: 'gray', borderWidth: 1}, {borderColor: 'red'}]}
                        onChangeText={(input) => this.setState({text: input})}
                        value={currentTask.content}
                    />

                    <TouchableHighlight onPress={this.onUpdate}
                        style={styles.updateButton}>
                        <Text style={styles.fontStyle}>Update</Text>
                    </TouchableHighlight>
                </View>
            </Modal>
        )
    }
}

const styles = StyleSheet.create({
    updateButton: {
        padding: 10
    },
    fontStyle: {
        backgroundColor: '#222',
        color: '#fff',
    }
})