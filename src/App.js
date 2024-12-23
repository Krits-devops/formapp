import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [formData, setFormData] = useState({firstName : '', lastName : '', email: '', comments: ''
    , checks: true, mode: '' , favCar: ''});
  console.log(formData);
  function changeHandler(event){
    const {name, value, type,checked} = event.target;
    setFormData(prevFormData=>{
      return{
        ...prevFormData,
        [name] : type === 'checkbox' ? checked : value
      }
    })
  }

  function submitHandler(event){
    event.preventDefault();
    console.log(formData);

  }

//  function firstNameHandler(event){
//   console.log(event.target.value);
//  }

//  function lastNameHandler(event){
//   console.log(event.target.value);
//  }

  return (
    <div className="App">
      <form onSubmit={submitHandler}>
        <input
          name='firstName'
          type='text'
          placeholder='first name'
          onChange={changeHandler}
          value={formData.firstName}
          />

          <br></br>
          <br></br>

      <input
          name='lastName'
          type='text'
          placeholder='last name'
          onChange={changeHandler}
          value={formData.lastName}
          />

            <br></br>
            <br></br>

          <input
          name='email'
          type='text'
          placeholder='email'
          onChange={changeHandler}
          value={formData.email}
          />

          <br></br>
          <br></br>

          <textarea
            placeholder='Enter you text'
            onChange={changeHandler}
            name='comments'
            value={formData.commets}
          />

<br></br>
<br></br>

          <input
          type='checkbox'
          onChange={changeHandler}
          name = 'checks'
          checked={formData.checks}
          />
          <label htmlFor='checks'>Am I visible ?</label>

          <br></br>
          <br></br>

          <input
            type='radio'
            name='mode'
            onChange={changeHandler}
            value='Online Mode'
            id='Online Mode'
          />
          <label htmlFor='Online-Mode'>Online Mode</label> 

          <br></br>
          <br></br>

          <select
          onChange={changeHandler}
            name = 'favCar'
            id='favCar'
            value={formData.favCar}
          >
            <option value='scorpio'>Scorpio</option>
            <option value='fortuner'>Fortuner</option>
            <option value='thar'>Thar</option>
            <option value='legender'>Legender</option>
            
          </select>

          <label htmlFor='favCar'> Select your favirote Car</label>

         <button>Submit</button>

      </form>
    </div>
  );
}

export default App;
