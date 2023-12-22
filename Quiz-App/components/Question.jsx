const questions = [
  {
    text: "What is ReactJS?",
    options: [
      { id: 0, text: "Server-side framework", isCorrect: false },
      { id: 1, text: "User interface framework", isCorrect: true },
      { id: 2, text: "Both a and b", isCorrect: false },
      { id: 3, text: "None of the above", isCorrect: false },
    ],
  },
  {
    text: "React.js is written in which of the following language?",
    options: [
      { id: 0, text: "JavaScript", isCorrect: true },
      { id: 1, text: "Java", isCorrect: false },
      { id: 2, text: "C", isCorrect: false },
      { id: 3, text: "C++", isCorrect: false },
    ],
  },
  {
    text: "What is a state in React?",
    options: [
      { id: 0, text: "A permanent storage.", isCorrect: false },
      { id: 1, text: "Internal storage of the component.", isCorrect: true },
      { id: 2, text: "External storage of the component.", isCorrect: false },
      { id: 3, text: "None of the above.", isCorrect: false },
    ],
  },
  {
    text: "What is the return value of the useState hook?",
    options: [
      { id: 0, text: "Pair of current state and function updating it", isCorrect: true },
      { id: 1, text: "Current State", isCorrect: false },
      { id: 2, text: "Function updating the current state", isCorrect: false },
      { id: 3, text: "UseState returns nothing", isCorrect: false },
    ],
  },
  {
    text: "How many elements can a valid React component return?",
    options: [
      { id: 0, text: "1", isCorrect: false },
      { id: 1, text: "2", isCorrect: false },
      { id: 2, text: "3", isCorrect: false },
      { id: 3, text: "4", isCorrect: true },
    ],
  },
  {
    text: "What is JSX in React?",
    options: [
      { id: 0, text: "JavaScript XML - A syntax extension", isCorrect: true },
      { id: 1, text: "Java XML - A new XML format", isCorrect: false },
      { id: 2, text: "JavaScript Extension - A React-specific file format", isCorrect: false },
      { id: 3, text: "None of the above", isCorrect: false },
    ],
  },
  {
    text: "What is the purpose of ReactDOM in React?",
    options: [
      { id: 0, text: "To render React components in the DOM", isCorrect: true },
      { id: 1, text: "To manage the state in React components", isCorrect: false },
      { id: 2, text: "To manipulate the React virtual DOM", isCorrect: false },
      { id: 3, text: "None of the above", isCorrect: false },
    ],
  },
  {
    text: "What is a prop in React?",
    options: [
      { id: 0, text: "A component's internal state", isCorrect: false },
      { id: 1, text: "A shorthand for properties", isCorrect: false },
      { id: 2, text: "Data passed from parent to child components", isCorrect: true },
      { id: 3, text: "None of the above", isCorrect: false },
    ],
  },
  {
    text: "What is the purpose of useEffect in React?",
    options: [
      { id: 0, text: "To perform side effects in a functional component", isCorrect: true },
      { id: 1, text: "To replace class lifecycle methods", isCorrect: false },
      { id: 2, text: "To handle state updates in React components", isCorrect: false },
      { id: 3, text: "None of the above", isCorrect: false },
    ],
  },
  {
    text: "What does the term 'controlled component' mean in React?",
    options: [
      { id: 0, text: "A component that is controlled by the DOM", isCorrect: false },
      { id: 1, text: "A component that maintains its own state", isCorrect: false },
      { id: 2, text: "A component whose form elements are fully controlled by React state", isCorrect: true },
      { id: 3, text: "None of the above", isCorrect: false },
    ],
  },
  {
    text: "What are the two main types of components in React?",
    options: [
      { id: 0, text: "Class components and Functional components", isCorrect: true },
      { id: 1, text: "Stateful components and Stateless components", isCorrect: false },
      { id: 2, text: "Parent components and Child components", isCorrect: false },
      { id: 3, text: "DOM components and Virtual components", isCorrect: false },
    ],
  },
  {
    text: "What is the purpose of the 'key' attribute in React lists?",
    options: [
      { id: 0, text: "To uniquely identify siblings in an array", isCorrect: true },
      { id: 1, text: "To style elements within a list", isCorrect: false },
      { id: 2, text: "To create a primary index for the list", isCorrect: false },
      { id: 3, text: "To group elements in a list", isCorrect: false },
    ],
  },
  {
    text: "What is the significance of PureComponent in React?",
    options: [
      { id: 0, text: "It ensures pure functions are used within components", isCorrect: false },
      { id: 1, text: "It optimizes rendering by performing shallow comparison of props and state", isCorrect: true },
      { id: 2, text: "It provides a pure JavaScript implementation for React components", isCorrect: false },
      { id: 3, text: "It is used for rendering only pure HTML elements", isCorrect: false },
    ],
  },
  {
    text: "What is the role of the 'ref' attribute in React?",
    options: [
      { id: 0, text: "To create references to DOM elements or React components", isCorrect: true },
      { id: 1, text: "To refresh the state of a component", isCorrect: false },
      { id: 2, text: "To render components conditionally", isCorrect: false },
      { id: 3, text: "To define default values for props", isCorrect: false },
    ],
  },
  {
    text: "What is the purpose of the React Developer Tools browser extension?",
    options: [
      { id: 0, text: "To write React code in the browser", isCorrect: false },
      { id: 1, text: "To debug and inspect React component hierarchy and state", isCorrect: true },
      { id: 2, text: "To automatically convert HTML to React components", isCorrect: false },
      { id: 3, text: "To optimize React application performance", isCorrect: false },
    ],
  },
];

export default questions;
