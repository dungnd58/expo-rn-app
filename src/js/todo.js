import React from 'react';
import { 
    StyleSheet, 
    Text, 
    ScrollView, 
    View, 
    TouchableHighlight 
} from 'react-native';
import Data from '../data/data.json';
import TodoCreate from './todoCreateModal.js';

export default class Todo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tasks: [],
            showTodoCreate: false
        };

        this.getTasks = this.getTasks.bind(this);
        this.create = this.create.bind(this);
    }

    componentWillMount() {
        this.getTasks();
    }

    getTasks() {
        if(Data) {
            this.setState({
                tasks: Data.tasks
            })
        } else {
            getTasks();
        }
    }

    create(text) {
        var {tasks, showTodoCreate} = this.state;
        tasks.push({
            id: tasks[tasks.length-1].id + 1,
            content: text,
            status: 0
        });
        showTodoCreate = false;
            
        this.setState({
            ...this.state,
            tasks,
            showTodoCreate
        });
    }

    update() {

    }

    delete() {
        
    }

    changeStatus() {
        
    }

    render() {
        const { showTodoCreate, tasks } = this.state;
        return (
            <View style={{flex: 1}}>
                <View style={styles.todoButtonWrapper}>
                    <TouchableHighlight 
                        onPress={ () => this.setState({showTodoCreate: true}) }>
                        <Text style={styles.button}>Add new</Text>
                    </TouchableHighlight>
                </View>

                {showTodoCreate ? 
                    <TodoCreate
                        onCreate= {this.create}
                    /> : null }

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