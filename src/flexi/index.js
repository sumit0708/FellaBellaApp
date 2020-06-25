import React from "react";
import propTypes from "prop-types";

const Flexi = (props) => {
  const [name, setName] = React.useState("");
  const [state, handleStateChange] = React.useState("");

  const handleSubmit = (event) => {
    console.log(`
      Name: ${name}
      State: ${state}
    `);

    event.preventDefault();
  }

  const wrapper = {
    margin: '32px',
    padding: '16px',
    border: '2px solid lightgrey'
  }

  const label = {
    padding: '16px',
    margin: '8px'
  }

  const select = {
    width: '30%',
    padding: '8px',
    margin: '8px'
  }

  const input = {
    width: '30%',
    padding: '8px',
    margin: '8px'
  }

  const button = {
    padding: '8px',
    width: '10%'
  }



  return (
    <form style={wrapper} onSubmit={handleSubmit}>

      <label style={label}>
        Name:
        <input style={input}
          name="name"
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          required />
      </label>

      <label>
        State:
        <select style={select}
          name="state"
          value={state}
          onChange={e => handleStateChange(e.target.value)}
          required>
          <option key=""></option>
          {(props.config.items[1].values).map(country => (
            <option key={country}>{country}</option>
          ))}
        </select>
      </label>
      <p>{`After pressing the button we can see the name and state will get passed in the form of JSON.
         Please check console`}</p>
      <button style={button}>Submit</button>
    </form>
  );
}

Flexi.propTypes = {
  props: propTypes.object,
  name: propTypes.string,
  state: propTypes.string
}

export default Flexi; 