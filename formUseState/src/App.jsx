import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App



import React, { useState } from 'react'

function Form() {
  const [name,setName] = useState();

  const handleChange = (event) =>{
    setName(event.target.value)
    console.log(event);
    
  }

  const handleSubmit = (e) => {
    alert(`You typed ${name}`)
    setName("")

  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        Name:
      <input type="text"
        placeholder='Enter the name'
        onChange={handleChange}
        value={name} />



        <button type='submit'>Submit</button>
      </form>
      
    </div>
  )
}

// export default Form

// import React, { useState } from 'react'

// function Form() {
//   const [name,setName] = useState();

//   const handleChange = (event) =>{
//     setName(event.target.value)
//     console.log(event);
    
//   }

//   const handleSubmit = (e) => {
//     alert(`You typed ${name}`)
//     setName("")

//   }

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         Name:
//       <input type="text"
//         placeholder='Enter the name'
//         onChange={handleChange}
//         value={name} />



//         <button type='submit'>Submit</button>
//       </form>
      
//     </div>


// -------------------------------------------------------------------------------------

// import React, { useState } from 'react'

// function FormMult() {

//   const [formData,setFormData] = useState ({
//     name:"",
//     email:"",
//     number:""
//   })

//   const handleChange = (event) =>{
//     const {name,value} = event.target // get field value & name
//     setFormData({
//       ...formData, 
//       [name]:[value]   // update the field
//     })
//   }

//   const handleSubmit =(e) =>{
//     e.preventDefault();  //prevent page refresh
//     alert(`you typed: 
//        Name: ${formData.name}
//        Email: ${formData.email}
//        Number:${formData.number}
//     `)
//     setFormData({
//       name:"",
//       email:"",
//       number:""
//     })
//   }

//   return (
//     <div>

//       <form onSubmit={handleSubmit}>
//         <label >Name</label>
//         <input 
//             type="text" 
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             placeholder='Enter name'
//         /> <br /> <br />

//         <label >Email</label>
//         <input 
//             type="email" 
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             placeholder='Enter email'
//         /> <br /> <br />


//         <label >Number</label>
//         <input 
//             type="number" 
//             name="number"
//             value={formData.number}
//             onChange={handleChange}
//             placeholder='Enter number'
//         /> <br /> <br />

//         <button type='submit'> Submit</button>


//       </form>

//     </div>
//   )
// }

// export default FormMult
