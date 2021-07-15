// No need to import "react" just for JSX in React 17+
import HelloWorld from '@components/HelloWorld';
import Recipes from '@components/Recipes';
import './components/HelloWorld/index.scss';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import ErrorBoundary from '@components/ErrorBoundary/ErrorBoundary';
import sword from './assets/images/swc-sword.png';

const Contact = lazy(() => import('@components/Contact'));

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
  const elvenShieldRecipe = {
    leatherStrips: 2,
    ironIngot: 1,
    refinedMoonstone: 4
  };
  const clickMe = () => {
    return elvenShieldRecipe.a.a;
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
  return (
    <ErrorBoundary>
      <Suspense fallback={<div>loading...</div>}>
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
              <button type="button" onClick={clickMe}>
                CLICK Me Jisoossasasasas
              </button>
            </li>
          </ul>
          <Switch>
            <Route exact path="/" component={HelloWorld} />
            <Route exact path="/contact" component={Contact} />
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
  );
}

export default App;
