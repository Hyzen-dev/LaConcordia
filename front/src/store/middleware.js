const myMiddleware = (store) => (next) => (action) => {
    console.log('Dispatching', action);
    const result = next(action);
    console.log('New state', store.getState());
    return result;
  };
  
  export default myMiddleware;