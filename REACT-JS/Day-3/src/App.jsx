//import React from 'react'
import Head from "./Header";
import {Footer} from "./Footer";

const App = () => {

  let firstName = "Himanshu";

  function greet(){
    console.log("Hello Student");
  }

  const skills = ["HTML" , "CSS" , "JS"];
  let age = 16;
  return (
    <div>
      <h1 className="heading">Hello{firstName}</h1>
      {greet()}
      {console.log(15+15)}
      {console.log(skills)}
      {age >= 18? "Eligible " : "Not Eligible"}


      {/* { {for(let i = 0; i<skills.length; i++){
    console.log(skills[i])
      }} } */} /* NOT WORK */



      {skills.map((skill) => {
        console.log(skill);
      })}

      <Footer/>
      <Head/>
    </div>
  )
}


export default App
