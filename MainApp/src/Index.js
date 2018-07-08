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
    loader: () => import('my-component'),
    loading: Loading
  });
  
const App = () => (
   
    <MyComponent />
);
render(<App />, document.getElementById("root"));