import React from "react";
//import ReactDOM from "react-dom";
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";
import App from "./App";
import { store } from "./features/store";

// ReactDOM.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </React.StrictMode>,
//   document.getElementById("root")
// );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <Provider store={store}>
         <App />
      </Provider>   
);
