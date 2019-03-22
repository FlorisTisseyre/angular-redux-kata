# Angular redux kata

The goal of this kata is to link the empty interface to data thanks to redux.

## Set up
1. Install dependencies `npm install`
2. Serve the application `yarn start`
3. Navigate to `http://localhost:4200/`
4. Check that you have an interface with no data
5. Install redux `npm install redux @angular-redux/store —save`

## Step 1 - Create a state
1. Look at how Todo-List and Todo-Overview components are structured
2. In a store.ts, create an interface IAppState that will contain the state of the application. Start as simple as possible
3. Create also an initial state

## Step 2 - Create the simplest reducer possible
1. Create a function reducer : (station, action) => state

## Step 3 - Activate the Application Store
1. Add NgReduxModule to the imports array
2. Inject NgRedux<IAppState> in the constructor and configure store on it

## Step 4 - Attach state to a component
1. In a component add ngRedux to the constructor
2. Decorate with `select()` a member of the component.
   Ex : `select() lastUpdate;`
3. Check that you see the result on the web page

## Step 5 - Create action types and change the state
1. Create your first action
2. Implement how it change the state in the reducer
3. Call the reducer from a component.
   Ex : `this.ngRedux.dispatch({type: ADD_TODO, todo: this.model});`
3. Verify that it produce a change on the web page

## Step 6 - Expand reducer to every action in the interface
Step-by-step, do either :
1. State -> Attach
2. Action -> Reducer -> Call from component
