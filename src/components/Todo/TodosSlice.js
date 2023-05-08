const initState = [
  { id: 1, name: "Learn Yoga", completed: false, proprity: "Medium" },
  { id: 2, name: "Learn Redux", completed: true, proprity: "High" },
  { id: 3, name: "Learn Javascript", completed: false, proprity: "Low" },
];

const todoListReducer = (state = initState, action) => {
  switch (action.type) {
    case "todoList/addTodo":
      return [...state, action.payload];
    default:
      return state;
  }
};
export default todoListReducer;
