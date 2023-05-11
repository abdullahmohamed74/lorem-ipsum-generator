# lorem Ipsum generator

## Steps

the flow of the application should look something like this:

- Set up a Form component that contains a number input and a submit button.
- In Form.jsx, set up a count state value using the useState hook.
- Import the text array from data.js and set up a text state value using the useState hook.
- Attach an onSubmit event to the form, and create a handleSubmit function to handle the form submission.
- Render the text state value below the form using the map method to iterate over the array and render each paragraph with a unique id generated by the nanoid library.