// import logo from './logo.svg';
import './App.css';

import './componets/Demo.js';

import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="App">
      <div class="container mt-5">
        <card class="card p-3">
          Bootstap is Working
          <button class="btn btn-primary m-4">Click This Button!</button>
          {/* <Demo name="Mark"/>  */}
        </card>
      </div>
    </div>
  );
}


export default App;
