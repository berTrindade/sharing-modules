import React, { lazy, useEffect, useState } from 'react';

function useDynamicModule(path) {
  const [module, setModule] = useState({});
  const [error, setError] = useState();

  useEffect(() => {
    import(path).then(setModule, setError);
  }, [path]);

  return error ? { $error: error } : module.default;
}


const ToolTip = lazy(() => import('MFE1/MFE1'));
// const Dialog = lazy(() => import('MFE1/MFE1'));
// const Common = lazy(() => import('MFE1/MFE1')); 
// const Logo = lazy(() => import('MFE1/MFE1'));
const Button = lazy(() => import('MFE1/MFE1'));

function App() {

  const Test = useDynamicModule('MFE1/MFE1');

  return (
    <div>
      <h1>
        Micro-Frontend Host
      </h1>

      <div
        style={{
          margin: '10px',
          padding: '10px',
          width: '60%',
          border:
            '4px solid black',
        }}>
        <h3>
          Button from MFE1
        </h3>
        <React.Suspense fallback='Loading Button'>
          {/* <Test /> */}
          <ToolTip />
          {/* <ToolTip />
          <Logo />
          <Button /> */}
          <Button />
        </React.Suspense>
      </div>
    </div>
  );
}

export default App;
