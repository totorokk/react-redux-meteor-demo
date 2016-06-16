import React, { Component } from 'react';
import { connect } from 'react-redux';

import TaskListComponent from '../components/taskList.js';
import { subscribe, addTask } from  '../actions';

const mapState = ({tasks, count}) => {
  return {
    tasks,
    count
  }
}
const mapDispatch = (dispatch, getState) => {
  return {
    subscribe: () => dispatch(subscribe()),
    addTask: (task) => dispatch(addTask(task)),
  }
}
export default connect(mapState, mapDispatch)(TaskListComponent)
