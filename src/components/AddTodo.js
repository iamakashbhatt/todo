import React, { Component } from 'react'
import { View, StyleSheet, TextInput, Button } from 'react-native'

class AddTodo extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             todoName: ''
        }
    }

    onChangeHandler = (event) => {
        this.setState({todoName: event.target.value})
    }

    addTodoToList = () => {
        this.props.addTodo(this.state.todoName);
        this.setState({todoName: ''})
    }

    render() {
        return (
            <View style={styles.addContainer}>
                <TextInput 
                    placeholder='Add a new todo'
                    style={styles.input}
                    value={this.state.todoName}
                    onChange={this.onChangeHandler}
                />

                <Button
                    title="Add"
                    onPress={this.addTodoToList}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    addContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 20,
    },
    input: {
        flex: .9,
        borderColor: '#3d3d3d',
        borderWidth: 1,
        height: 40,
        padding: 10
    }
});

export default AddTodo;