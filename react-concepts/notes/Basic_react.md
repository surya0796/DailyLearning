History: 
Tradionally every page a bundle of Html, Css and Js.... you click a link or submit a form you will be directed to a new page with it's own bundled files.
All browser worked differently but JQuery’s power of Manupulating DOM in every browser, Organising all the heavy Js files using "backbone Js" library and AJAX to send small chucks of data in real time. Gave birth to SPA like Facebook.

Components in React
Describe a part of the UI. Reusable and can be nested. Two–types: Functional and Class components.
Functional => Are functions which takes properties and returns JSX.
Class => Similar to functional ;just made using ES6 Classes. Can maintain private state and have access to Lifecycle method.

(With export default any component you can change the component name at the time of importing.)

JSX : Extension to JavaScript language Syntax to write XML-like code for elements and components.Notice why we import React even if we don’t use it anywhere in the component, it’s because JSX translates to React.createElement(htmlTag,attributeObject,childNode)
“class replaced by className; for to htmlFor ; onclick to onClick and tabindex to tabIndex”
 
When using a component if you want to pass children inside the component from the parent component just write between the JSX tag and call it inside the child component using props.children.

STATE and PROPS
The state is an instance of React Component Class and can be defined as an object of a set of observable properties that control the behavior of the component. In other words, the State of a component is an object that holds some information that may change over the lifetime of the component.
    • Props are immutable i.e. once set, the props cannot be changed, while State is an observable object that is to be used to hold data that may change over time and to control the behavior after each change.
    • While Props are set by the parent component, State is generally updated by event handlers.
    • props gets passed to the component; state is managed within the component.
    • props are functions parameter whereas state can be seen as variables declared in the function body

Props VS State : props are immutable; props are function parameters and state are variables declared in the function body.
HOW setState Works ?
 - this.setState() is used to update state object in React. It awares React to Re-render the component after every state update. Updating a state can be tricky sometime as it is asynchronous function. 
 - Suppose you update a state in a component and on the basis of it you want to perform certain operation just after state updates, for that use componentDidMount or second argument callback function to write your code.
 - Suppose you update a same state twice or more in a single lifecycle of the component (in two different functions) would it will update properly. No, because state update is asynchronous and it takes unknown time to update the state. If you call setState again before the the first setState gets executed it will take the initial unchanged value for the second state update and only perform single update. React likes to combine all state update in a single operation to improve performance.
So to get the desired result we will pass setState object as a callback function and pass prevState as it’s first argument and use that to update the current state.