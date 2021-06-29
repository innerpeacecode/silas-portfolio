import * as React from "react"
import { withLDProvider } from 'launchdarkly-react-client-sdk';
import HelloWorld from './helloWorld';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <HelloWorld />
        
      </header>
    </div>
  );
}

export default withLDProvider({
  clientSideID: '60d9ba082e18760d739e5ee0',
  user: {
      "key": "user_key",
      "name": "Silas Sundar",
      "email": "sundars@tctd.ie"
  }
})(App);


