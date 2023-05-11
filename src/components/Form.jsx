import { useState } from 'react';

function Form({ handleFormSubmit }) {
  const [count, setCount] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleFormSubmit(parseInt(count));
  };

  return (
    <form className="lorem-form" onSubmit={handleSubmit}>
      <label htmlFor="amount">pharagraph</label>
      <input
        value={count}
        onChange={(e) => setCount(e.target.value)}
        type="number"
        name="amount"
        id="amount"
        min={1}
        step={1}
        max={8}
      />
      <button className="btn">generate</button>
    </form>
  );
}
export default Form;
