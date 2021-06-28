import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MicroFrontend from "./MicroFrontend";
import "./App.css";
import 'antd/dist/antd.css';

// COMPONENTS
import RedirectComponent from './components/entryPoint'
import Header from './components/header'
import ErrorPage from './components/errorPage'
import PermissionDenied from './components/permissionDenied'

// import { createBrowserHistory } from "history";
// const defaultHistory = createBrowserHistory();

const {
  REACT_APP_DOGS_HOST: dogsHost,
  REACT_APP_CATS_HOST: catsHost,
  REACT_APP_GREETING_HOST: greetingHost,
} = process.env;


function Dogs({ history }) {
  return <MicroFrontend history={history} host={dogsHost} name="Dogs" />;
}

function Cats({ history }) {
  return <MicroFrontend history={history} host={catsHost} name="Cats" />;
}

function GreetingCat({ history }) {
  return (
    <div>
      <Header history={history} />
      <div className="home">
        <MicroFrontend history={history} host={greetingHost} name="Greeting" />
      </div>
    </div>
  );
}

function NewGreetingCat({ history }) {
  return (
    <div>
      <Header history={history} />
      <div className="home">
        <MicroFrontend history={history} host={greetingHost} name="Greeting" />
      </div>
    </div>
  );
}

function Home({ history }) {
  const [input, setInput] = useState("");

  const handleOnClick = () => {
    console.log('history ===>', history)
    history.push(`/cat/${input}`);
  };

  const handleOnClickNew = () => {
    console.log('history ===>', history)
    history.push(`/new-cat/${input}`);
  };

  return (
    <div>
      <Header history={history} />

      <div className="home" style={{ marginTop: '100px' }}>
        <input
          placeholder="Insert a greeting"
          defaultValue={input}
          onBlur={(e) => setInput(e.target.value)}
        />
        <button onClick={handleOnClick}>Greet Me</button>
      </div>

      <div className="home" style={{ marginTop: '20px' }}>
        <input
          placeholder="Insert a new greeting"
          defaultValue={input}
          onBlur={(e) => setInput(e.target.value)}
        />
        <button onClick={handleOnClickNew}>Greet Me New</button>
      </div>

      <div className="home">
        <div className="content">
          <div className="cat">
            <Cats />
          </div>
          <div className="dog">
            <Dogs />
          </div>
        </div>
      </div>
    </div>
  );
}

function DogComponent({ history }) {
  return (
    <div>
      <Header history={history}/>

      <div className="home" style={{ marginTop: '100px' }}>
        <div className="content">
          <div className="dog">
            <Dogs />
          </div>
        </div>
      </div>

    </div>
  );
}

function CatComponent({ history }) {
  return (
    <div>
      <Header history={history}/>

      <div className="home" style={{ marginTop: '100px' }}>
        <div className="content">
          <div className="cat">
            <Cats />
          </div>
        </div>
      </div>

    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/nova-rota/:role/:path/:token" component={RedirectComponent} />
          
          <Route exact path="/dogs" component={DogComponent} />
          <Route exact path="/cats" component={CatComponent} />
          <Route exact path="/cat/:greeting" component={GreetingCat} />
          <Route exact path="/new-cat/:greeting" component={NewGreetingCat} />

          <Route exact path="/permissao-negada" component={PermissionDenied} />
          <Route exact path="*" component={ErrorPage} />
        </Switch>
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;