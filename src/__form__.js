/**
 * // Multiple ways to handle form data in React JSX form
 * 
 * 1. use form tag and onSubmit handler with event (e)
 * 1.1. From e, access value like this: e.target.[name_of_the_input_field].value
 * 
 * 2. controlled element: use individual state for each input field
 * 
 * 3. controlled element: one object in a state holding all the input fields value
 * 
 * 4. uncontrolled element: useRef() hook to create a reference to the element and access value by using like: nameRef.current.value
 * 
 * 5. use hook to handle and submit & error. example react hook form
 * 
 * 6. Reusable component.
 */