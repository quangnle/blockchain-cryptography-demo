// Importing "react" is still required when using methods from it
import { useState } from 'react';

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

const Job = () => {
  const [recipe, setRecipe] = useState(elvenShieldRecipe);

  return (
    <div>
      <h3>Job</h3>
    </div>
  );
};

export default Job;
