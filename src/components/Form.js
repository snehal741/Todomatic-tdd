import React, {useState} from 'react';

function Form(props){

    const [name, setName] = useState('');
    function handleSubmit(e){
        e.preventDefault();
        if(name !== ""){
            props.addTask(name);
            setName("");
        }
    }

    function handleChange(e){
        setName(e.target.value);
    }
    return(
        <form data-testid="todo-form" onSubmit = {handleSubmit}>
        <h2 data-testid="form-heading" className="label-wrapper">
          <label htmlFor="new-todo-input" className="label__lg">
            What needs to be done?
          </label>
        </h2>
        <input
          type="text"
          id="new-todo-input"
          data-testid="form-input"
          className="input input__lg"
          name="text"
          autoComplete="off"
          value= {name}
          onChange = {handleChange}
        />
        <button type="submit" data-testid="form-button" className="btn btn__primary btn__lg">
          Add
        </button>
      </form>
    )
}

export default Form;