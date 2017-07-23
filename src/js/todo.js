import React from 'react';
import { StyleSheet, Text, ScrollView } from 'react-native';

export default class Todo extends React.Component {
    constructor() {
        super(props);

        this.state = {
            loading: true,
            tasks: []
        };

        this.getTasks = this.getTasks.bind(this);
    }

    componentWillMount() {
        getTasks();
    }

    getTasks() {
        fetch('../data/data.json')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    loading: false,
                    tasks: responseJson.tasks
                });
            })
            .catch((error) => {
                console.error(error);
            });
    }

    create() {

    }

    update() {

    }

    delete() {
        
    }

    render() {
        const { loading, tasks } = this.state;

        return (
            <View>
                { tasks && tasks.map(task => {
                        <View>
                            <Text>task.content</Text>
                        </View>
                    })
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({

})