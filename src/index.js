import 'react-app-polyfill/stable'
import 'core-js'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { Provider } from 'react-redux'
import store from './store'
import Web3 from 'web3'
import abi from './Abis'

var web3 = new Web3(window.ethereum)
var contractAddress = '0x8fC648D09824327642FD74542d8A66B306ec6446'
var loggedInAccount

var Mycontract = new web3.eth.Contract(abi, contractAddress)

async function connectToMetaMask() {
  await window.ethereum.enable()
  const accounts = await window.ethereum.request({
    method: 'eth_requestAccounts',
  })
  loggedInAccount = accounts[0]
}

function checkMetamask() {
  if (typeof window.ethereum !== 'undefined') {
    alert('MetaMask is installed!')
  } else {
    alert('MetaMask is Not installed!')
  }
}

// checkMetamask()

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()

window.ethereum.on('accountsChanged', (accounts) => {
  if (!accounts.length) {
    alert('You have been logged out')
  }
})

export default connectToMetaMask
