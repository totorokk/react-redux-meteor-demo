// dummy
import React, { Component } from 'react';
import {
  Button,
  ButtonToolbar,
  FormGroup,
  InputGroup,
  FormControl
} from 'react-bootstrap';
import Task from './taskComponent';
import TaskHeaderComponent from './taskHeaderComponent'

export default class  extends Component {
  constructor(p) {
    super(p);
    this.state = {
      newTask: null
    }
  }
  componentDidMount() {
    this.props.subscribe();
  }

  handleAddTask(e) {
    e.preventDefault();
    const {addTask} = this.props;
    const newTaskName = this.refs.newTaskName.value;
    if(!newTaskName) return;
    const task = { text: newTaskName };
    addTask(task);
    this.refs.newTaskName.value = '';
  }


  render() {
    return (
      <div className="container">
      <TaskHeaderComponent {...this.props}/>
        <FormGroup>
          <InputGroup>
            <input ref="newTaskName" type="text"/>
            <InputGroup.Button>
              <Button bsStyle="info" onClick={this.handleAddTask.bind(this)}> Add Task </Button>
            </InputGroup.Button>
          </InputGroup>
        </FormGroup>
        <ul>
          {
            Array.isArray(this.props.tasks)?
              this.props.tasks.map((task) =>
                <Task key={task._id} task={task} />)

              :
              null
          }
        </ul>
      </div>
    );
  }
}
