// No need to import "react" just for JSX in React 17+
import { Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { Suspense, lazy, useEffect, useState } from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { history } from '@/store';
import image from '@/assets/images/neumodoro.gif';
import ErrorBoundary from './components/ErrorBoundary';
import Contact from './components/Contact';
import Job from './components/Job';
import HelloWorld from './components/HelloWorld';
import './components/HelloWorld/index.scss';
import './utils';
import PageLoading from './components/PageLoading';
import '@/styles/App.scss';

const mock = (success, timeout) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) {
        resolve(console.log('hahaha'));
      } else {
        reject({ message: 'Error' });
      }
    }, timeout);
  });
};
function App() {
  const data = {
    name: 'Eren',
    age: '16',
    address: 'asdsadasdas',
    phone: '121212'
  };

  const [state, setstate] = useState(1);
  const [count, setcount] = useState(1);
  const elvenShieldRecipe = {
    leatherStrips: 2,
    ironIngot: 1,
    refinedMoonstone: 4
  };
  const clickMe = () => {
    // return elvenShieldRecipe.a.a;
    const a = null;
    console.log(a?.a);
    try {
      throw Error('aa');
    } catch (error) {
      console.log(error);
    }
  };
  // ES7 Object spread example
  const elvenGauntletsRecipe = {
    ...elvenShieldRecipe,
    leather: 1,
    refinedMoonstone: 1
  };

  const someEvent = async () => {
    try {
      await mock(true, 4000);
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    setcount(count + 1);
  }, []);

  return (
    <ConnectedRouter history={history}>
      <ErrorBoundary>
        <Suspense fallback={<PageLoading show />}>
          <PageLoading />
          <Router>
            <h1>{process.env.REACT_APP_NAME} env variables</h1>
            <h1>Author: {process.env.REACT_APP_AUTHOR}</h1>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/contact">AboDSDSut</Link>
              </li>
              <li>
                <Link to="/job">job</Link>
              </li>
              <li>
                <button type="button" onClick={clickMe}>
                  CLICK Me Jisoossasasasassddddddđaaaaaaa
                </button>
              </li>
            </ul>
            <div className="home">home</div>
            <div className="home1">home1</div>
            <div className="home2">home2</div>
            <div className="home3">home3</div>
            <section className="hero">Heroooooooooooo</section>
            <HelloWorld
              title="mđct bpack"
              tit2221le="mđct weđasbpack"
              t2i2tle="mđct weđasbpack"
              t121itle="mđct weđasbpack"
              titl2e="mđct weđasbpack"
              ti11tle="mđct weđasbpack"
              {...data}
            />
            <img src={image} alt="sword" width="250" />
            <Switch>
              <Route exact path="/" component={HelloWorld} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/job" component={Job} />
              <Route component={() => <h1>Not found</h1>} />
            </Switch>
          </Router>
          {/* <h1>{JSON.stringify(elvenGauntletsRecipe, null, 4)}</h1>
      <button type="button" onClick={someEvent}>
        click me
      </button>
      <section className="hero" />
      <main>
        <section>
          <h1>Oh Herro, React.</h1>
          <img src={sword} alt="sword" width="250" />
          <img src={swordSvg} alt="sword" width="250" />
          <img src={swordSvg} alt="sword" width="250" />
          <img src={swordSvg} alt="sword" width="250" />
        </section>
        <Recipes />
      </main>
      <HelloWorld
        title="mđct bpack"
        tit2221le="mđct weđasbpack"
        t2i2tle="mđct weđasbpack"
        t121itle="mđct weđasbpack"
        titl2e="mđct weđasbpack"
        ti11tle="mđct weđasbpack"
        {...data} */}
          {/* /> */}
        </Suspense>
      </ErrorBoundary>
    </ConnectedRouter>
  );
}

export default App;
