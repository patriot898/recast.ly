// TODO: Render the `App` component to the DOM
import App from './components/App.js';
import exampleVideoData from './data/exampleVideoData.js';



ReactDOM.render(<App videoData={exampleVideoData}/>, document.getElementById('app'));

//ReactDOM.render(<GroceryListWithClass groceryItems={myGroceryItems} />, listDiv);
//document.getElementById("app")

