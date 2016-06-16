import React, { Component, PropTypes } from 'react';
import {
  Button,
} from 'react-bootstrap';

export default class TaskComponent extends Component {
  handleRemoveTask(taskId, e) {
    e.preventDefault();
    this.props.removeTask(taskId);
  }
  render() {
    const {text, _id} = this.props.task;
    return (
      <li>{text} <Button bsStyle="danger" style={{float: "right"}}
                         onClick={this.handleRemoveTask.bind(this, _id)}> Remove Task </Button></li>
    );
  }
}

TaskComponent.propTypes = {
  task: PropTypes.object.isRequired,
};
