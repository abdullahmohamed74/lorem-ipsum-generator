import { nanoid } from 'nanoid';

function ShowText({ text }) {
  const renderedText = text.map((item) => {
    return <p key={nanoid()}>{item}</p>;
  });

  return <article className="lorem-text">{renderedText}</article>;
}
export default ShowText;
