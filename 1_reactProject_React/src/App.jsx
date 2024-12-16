function App() {
  return (
    <div id="app ">
      <h1> Time to Practice !</h1>
      <p>
        Build a <code>&lt; MainGoal&gt;</code> compoennt and insert it below
        this
      </p>
      <p>
        your <code>&lt;MainGoal&gt ;</code> components should simply output some
        text that describes your main course goal (e.g., &quot;My main goal:
        Learn React in greate detail &quot;).
      </p>
      <p>
        <strong>Important:</strong> You custom component must contain the text
        &quot;My main goal:&quot;
      </p>
      <p>
        <strong>Also important:</strong> For the automatic checks to succeed,
        you <strong>must export</strong> your custom component function! Not as
        a default but simply by adding the <code>export</code> keyword in front
        of your function (e.g., <code>export function YOUR_COMPONENT_NAME</code>
        ).
      </p>
      {MainGoal()}
    </div>
  );
}

function MainGoal() {
  return (
    <p>
      My main goal : Learn react and all it components , functionality and
      understanding
    </p>
  );
}

export default App;
