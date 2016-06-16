
const initState = {};
export const reducer = (state = initState, action) => {
  switch (action.type) {
    case "UPDATE_TASK":
      return {
        ...state,
        tasks: action.tasks
      }
  }
  return state
}
