import React from "react";

export const userData = {
  firstName: "Max ",
  lastName: "schwar",
  title: "INstructor",
};

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
    <div id="app">
      <h1>Time to Practice</h1>
      <p>Welcome on board of this course! You got this 💪</p>
      <User />
    </div>
  );
}

export default App;
