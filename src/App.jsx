// No need to import "react" just for JSX in React 17+
import HelloWorld from '@components/HelloWorld';
import Recipes from '@components/Recipes';
import sword from './assets/images/swc-sword.png';
import swordSvg from './assets/images/sword.svg';
import './components/HelloWorld/index.scss';

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

  // ES7 Object spread example
  const elvenGauntletsRecipe = {
    ...elvenShieldRecipe,
    leather: 1,
    refinedMoonstone: 1
  };
  return (
    <>
      <h1>{JSON.stringify(elvenGauntletsRecipe, null, 4)}</h1>
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
        {...data}
      />
    </>
  );
}

export default App;
