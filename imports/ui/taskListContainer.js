
import { connect } from 'react-redux';
import { subscribe, addTask, removeTask } from  '../actions';
import taskListComponent from './taskListComponent';


// container
const mapState = ({tasks, count}) => {
  return {
    tasks, count
  }
}
const mapDispatch = (dispatch, getState) => {
  return {
    subscribe: () => dispatch(subscribe()),
    addTask: (task) => dispatch(addTask(task)),
  }
}
export default connect(mapState, mapDispatch)(taskListComponent)
