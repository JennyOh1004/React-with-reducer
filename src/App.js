import React, { Component } from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import * as types from "./actions";
import app from "./reducers/app";

export default function App() {
  const isChecked = useSelector(state => app.isChecked);
  const dispatch = useDispatch();
  const action = (type, data) => dispatch({ type, data });
  return (
    <div>
      <div>{isChecked ? "true" : "false"}</div>
      <div onClick={() => action(types.APP_ACTION_TEST, !isChecked)}>Hi</div>
    </div>
  );
}
// class App extends Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     console.log(this.props);
//     const { isChecked, action } = this.props;
//     return (
//       <div>
//         <div>{isChecked ? "true" : "false"}</div>
//         <div onClick={() => action(types.APP_ACTION_TEST, !isChecked)}>Hi</div>
//       </div>
//     );
//   }
// }

// function mapStateToProps(state) {
//   console.log(state);
//   return {
//     app: state.app
//   };
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     increment: () => dispatch({ type: "INCREMENT" }),
//     decrement: () => dispatch({ type: "DECREMENT" }),
//     reset: () => dispatch({ type: "RESET" })
//   };
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     action: (type, data) => dispatch({ type, data })
//   };
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App);
