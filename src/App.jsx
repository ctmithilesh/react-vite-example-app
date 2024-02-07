import './App.css'
import ButtonComponent from './components/ButtonComponent'

function App() {


  return (
    <>
      <ButtonComponent
        name="confirm"
        color="lightBlue"
      />
      <ButtonComponent
        name="Reset"
        color="coral"
      />
      <ButtonComponent
        name="Validate"
        color="red"
      />
    </>

  )
}

export default App
