import React, { Component } from 'react';
import { FlatList, Text, View, StyleSheet, ScrollView, Button } from 'react-native';
import AddTodo from './AddTodo';

class Todos extends Component {

    constructor() {
        super();
        this.state = {
             toDos: [
                 {id: 1, item: 'Wake Up', status: true},
                 {id: 2, item: 'Eat', status: false},
                 {id: 3, item: 'Sleep', status: false}
             ]
        }
    }

    addTodo = (todoName) => {
        todoName && this.setState({
            toDos: this.pushTodo(todoName)
        });
    }
    
    pushTodo(todoName) {
        this.state.toDos.push({id: this.state.toDos.length + 1, item: todoName, status: false});
        console.log(this.state.toDos);
        return this.state.toDos;
    }

    deleteTodo = (todo) => {
        this.setState({
            toDos: this.state.toDos.filter(todoItem => todoItem.id !== todo.id)
        });
    }

    updateStatus = (todo) => {
        this.setState({
            toDos: this.updateTodoListStatus(todo)
        })
    }

    updateTodoListStatus(todo) {
        const selectedTodo = this.state.toDos.find(todoItem => todoItem.id === todo.id);
        selectedTodo.status = !selectedTodo.status;
        return this.state.toDos;
    }

    renderItem = ({item}) => (
        <View style={styles.todo}>
            <Text style={styles.todoText}>{item.item}</Text>
            <Button
                title="Delete"
                onPress={() => this.deleteTodo(item)}
            />
        </View>
    );

    render() {
        return (
            <ScrollView>
                <View style={styles.todoContainer}>
                    <FlatList
                        data={this.state.toDos}
                        extraData={this.state}
                        renderItem={this.renderItem}
                        keyExtractor={item => item.id.toString()}
                    />
                 </View>
            
                <AddTodo addTodo={this.addTodo}/>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    todoContainer: {
        padding: 20,
    },
    todo: {
        marginVertical: 8,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },    
    todoText: {
        color: '#3d3d3d',
        fontSize: 20,
        overflow: "hidden"
    },
    input: {
        borderRadius: 100,
        borderColor: '#3d3d3d',
        borderWidth: 1,
        height: 40,
        margin: 20,
        padding: 10,
    }
});

export default Todos;
