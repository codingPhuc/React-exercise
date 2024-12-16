import React from "react";
import reactImg from "./assets/react-core-concepts.png";
// import componetsImg from ".assets\";
import Header from "./components/Header";
import CoreConcept from "./components/CoreConcept";
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

function App() {
  return (
    <div>
      <main>
        <section id="core-concepts">
          <Header></Header>
        </section>
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

export default App;
