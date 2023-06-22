import Title from './Components/Title';

import './App.css'
import Banner from './Components/Banner';
import NumberButton from './Components/Numbers/NumberButton'

const App = () => {

  return (
    <>
      <Title />
      <Banner />
      <NumberButton
        label='1'
        avaiable
      />
      <NumberButton
        label='2'
        avaiable
      />
      <NumberButton
        label='3'
      />
      <NumberButton
        label='4'
      />
      <NumberButton
        label='5'
        avaiable
      />
      {/* Números */}
      {/* Dados de comprar */}
      {/* Footer */}
    </>
  )
}

export default App
