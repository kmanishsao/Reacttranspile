import React from 'react';
import { render} from 'react-dom';
import Loadable from 'react-loadable';  
// import MyComponent from 'my-component';

function Loading({ error }) {
    if (error) {
      return 'Oh nooess!';
    } else {
      return <h3>Loading...</h3>;
    }
  }


  const MyComponent = Loadable({
    loader: () => import('my-component'  /* webpackChunkName: 'MyComponent' */),
    loading: Loading
  });
  
const App = () => (
  <div className="copyright">
  <h1>Welcome to Main Component</h1>
  <p>Your are most welcome</p>
  <br/>
    <MyComponent /> 
  </div>
   
);
render(<App />, document.getElementById("root"));