import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom'

// Step 1: Import ApolloClient Provider from 'react-apollo'
import { ApolloProvider, createNetworkInterface, ApolloClient } from 'react-apollo'

// Step 2: Create an instance of the network interface to look for the endpoint
const networkInterface = createNetworkInterface({
	uri: 'https://api.graph.cool/simple/v1/cj8mk8lbz0fu60176o0s2r36a'
})

// Step 3: Create an instance of ApolloClient with network interface used
const client = new ApolloClient({
	networkInterface
})

// Step 4: Render components to ReactDOM
ReactDOM.render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </BrowserRouter>
  , document.getElementById('root')
)
registerServiceWorker()
