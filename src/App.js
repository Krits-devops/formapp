import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [formData, setFormData] = useState({firstName : '', lastName : '', email: ''});
  console.log(formData.email);
  function changeHandler(event){
    setFormData(prevFormData=>{
      return{
        ...prevFormData,
        [event.target.name] : event.target.value
      }
    })
  }

//  function firstNameHandler(event){
//   console.log(event.target.value);
//  }

//  function lastNameHandler(event){
//   console.log(event.target.value);
//  }

  return (
    <div className="App">
      <form>
        <input
          name='firstName'
          type='text'
          placeholder='first name'
          onChange={changeHandler}
          />

      <input
          name='lastName'
          type='text'
          placeholder='last name'
          onChange={changeHandler}
          />

          <input
          name='email'
          type='text'
          placeholder='email'
          onChange={changeHandler}
          />
             


      </form>
    </div>
  );
}

export default App;
