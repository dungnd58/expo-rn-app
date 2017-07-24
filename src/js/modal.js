import React from 'react';
import { 
    StyleSheet, 
    Text,
    View} from 'react-native';

export default class TodoCreate extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            text: '',
            modalVisible: false,
        };
    }

    onCreate() {
        this.props.onCreate(this.state.text);
        this.setState({
            modalVisible: false
        });
    }

    render() {
        <Modal
          animationType={"slide"}
          transparent={false}
          visible={this.state.modalVisible || this.props.showModal}
          onRequestClose={() => {alert("Modal has been closed.")}}
        >
         <View >
          <View>
            <Text>Create new task</Text>

             <TextInput
                style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                onChangeText={(input) => this.setState({text: input})} />

            <TouchableHighlight onPress={this.onCreate}>
              <Text>Create</Text>
            </TouchableHighlight>

            <TouchableHighlight onPress={() => {
              this.setState({modalVisible: false})
            }}>
              <Text>Cancel</Text>
            </TouchableHighlight>

          </View>
         </View>
        </Modal>
    }
}