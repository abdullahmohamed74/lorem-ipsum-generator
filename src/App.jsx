import { useState } from 'react';
import data from './components/data';
import Form from './components/Form';
import ShowText from './components/ShowText';

function App() {
  const [text, setText] = useState([]);

  const handleFormSubmit = (count) => {
    setText(data.slice(0, count));
  };

  return (
    <section className="section-center">
      <h4>tired of boring lorem ipsum?</h4>
      <Form handleFormSubmit={handleFormSubmit} />
      <ShowText text={text} />
    </section>
  );
}
export default App;
