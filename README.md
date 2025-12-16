useEffect allows you to run side effects in a functional component when props change.


It takes two arguments: a callback function and a dependency array.


When a prop is added to the dependency array, the effect runs whenever that prop’s value updates.


Common use cases include fetching data based on props, syncing state with props, or updating the DOM.


It replaces lifecycle methods like componentDidMount and componentDidUpdate.


You can return a cleanup function to handle unmounting or before the prop changes again.


Proper dependency management avoids unnecessary re-renders and bugs.

