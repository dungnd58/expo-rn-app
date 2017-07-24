import React from 'react';
import { 
    StyleSheet, 
    Text, 
    ScrollView, 
    View, 
    TouchableHighlight } from 'react-native';
import Data from '../data/data.json';
import TodoCreate from './modal.js';

export default class Todo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            tasks: [],
            showModal: false
        };

        this.getTasks = this.getTasks.bind(this);
        this.create = this.create.bind(this);
        this.changeStatus = this.changeStatus.bind(this);
    }

    componentWillMount() {
        this.getTasks();
    }

    getTasks() {
        if(Data) {
            this.setState({
                loading: true,
                tasks: Data.tasks
            })
        } else {
            getTasks();
        }
    }

    create(text) {
        var tasks = this.state.tasks;
        tasks.push({
            id="1",
            content= text,
            status= 0
        });
            
        this.setState({
            ...this.state,
            tasks
        });
    }

    update() {

    }

    delete() {
        
    }

    changeStatus() {
        
    }

    render() {
        const { loading, tasks } = this.state;
        return (
            <View style={{flex: 1}}>
                <View style={styles.todoButtonWrapper}>
                    <TouchableHighlight 
                        onPress={ () => this.state.setState({showModal: true}) }>
                        <Text style={styles.button}>Add new</Text>
                    </TouchableHighlight>
                </View>

                <TodoCreate 
                    onCreate= {this.create}
                    showModal= {this.state.showModal}
                />

                <ScrollView contentContainerStyle={styles.todoContainer}>
                    { tasks && tasks.map(task =>
                            <View key={task.id} style={styles.taskItem}>
                                <Text style={[styles.contentStyle, styles.fontStyle]}>{task.id}. {task.content}</Text>
                                
                            </View>
                        )
                    }
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    todoContainer: {
        backgroundColor: '#F5FCFF'
    },
    taskItem: {
        borderWidth: 1,
        borderColor: '#f2f2f2',
        flexDirection: 'row'
    },
    contentStyle: {
        padding: 10,
        margin: 0,
        flex: 0.8
    },
    fontStyle: {
        fontSize: 18,
        color: '#222',
    },
    todoButtonWrapper: {
        marginTop: 35,
        padding: 5,
        flexDirection: 'row'
    },
    button: {
        padding: 20,
        backgroundColor: '#222',
        color: '#fff',
        marginLeft: 5,
        width: 100
    },
    checkBox: {
        borderWidth: 0
    }
})