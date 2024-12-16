import React from "react";
import reactImg from "./assets/react-core-concepts.png";
// import componetsImg from ".assets\";

export const userData = {
  firstName: "Max ",
  lastName: "schwar",
  title: "INstructor",
};

const reactDescriptions = ["Fundamental", "Curcial", "Core"];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

export function User() {
  return (
    <div id="user" data-testid="user">
      <h2>
        TODO : {userData.firstName} {userData.lastName}
      </h2>
      <p>{userData.title}</p>
    </div>
  );
}
// function App() {
//   return  (
//     <div>
//   )
// }
{
  /* function  Header ()
{
  const  description  = reactDescriptins
}
function CoreConcept()
{
  return (
    <li>
      <img src="..."  alt ="...">
      
      </img>
      <h3>TITLE</h3>
      <p>description </p>
    </li>
  )
} */
}

function App() {
  return (
    <div>
      <main>
        <section id="core-concepts"></section>
        <h2>Core Concepts</h2>
        <ul>
          <CoreConcept
            title="Components"
            description="the core UI building block"
            img={reactImg}
          ></CoreConcept>
          <CoreConcept
            title="Components"
            description="the core UI building block"
            img={reactImg}
          ></CoreConcept>
          <CoreConcept
            title="Components"
            description="the core UI building block"
            img={reactImg}
          ></CoreConcept>
          <CoreConcept
            title="Components"
            description="the core UI building block"
            img={reactImg}
          ></CoreConcept>
        </ul>
      </main>
    </div>
  );
}

function CoreConcept(prop) {
  return (
    <li>
      <img src={prop.img} alt="..."></img>
      <h3>{prop.title}</h3>
      <p>{prop.description} </p>
    </li>
  );
}

export default App;
