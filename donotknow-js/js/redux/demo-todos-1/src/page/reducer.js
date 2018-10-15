let textId = 0;
console.log(textId)
let initState = {
  todos: [],
  filter: "FILTER_ALL"
};

//注意此处state的设置，对于全局的store而言，每个reducer文件都会在此store下挂载各自文件对应的变量，
//由于各自文件里的state的变量不一定全是数据或者对象，所以需要在initState变量中设置有哪些变量，然后再reducer中，对各个action对应的变量分别处理
//这种方式按照页面拆分reducer比较实际。。。如果说不同的数据类型拆分不同的reducer则比较繁琐不切实际了
function PageReducer (state = initState, action) {
  switch (action.type) {
    case "ADD_TODOS":
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: textId++,
            text: action.text
          }
        ]
      };
    /* return [...state,{
        id: textId++,
        text: action.text
      }] */
    case "TOGGLE_TODO":
      const newTodos = state.todos.map(
        todo =>
          todo.id === action.id
            ? Object.assign(todo, { complete: !todo.complete })
            : todo
      );
      return {
        ...state,
        todos: newTodos
      };
    /* return state.map(
        todo =>
          todo.id === action.id
            ? Object.assign(todo, { complete: !todo.complete })
            : todo
      ); */
    case "FILTER_VISIBLE":
        //过滤的动作，只记录了当前点击的filter类型，此处有两种方式：1、点击过滤，重新修改state里的todos   2、只记录filter的动作，然后展示逻辑在render
        //如果采用1的话，那内存中state的todos会被重新修改，性能上不合算
      return {
        ...state,
        filter: action.filter
      };
    default:
      return state;
  }
};

export default PageReducer