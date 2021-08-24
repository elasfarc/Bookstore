import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Library from './components/Library/Library';
import Categories from './components/Categories/Categories';
import './App.css';
import store from './store/configureStore';
import * as actions from './store/books/book';

function App() {
  store.dispatch(actions.addBook({ title: 'book ##1', author: 'author1' }));
  console.log(store.getState());
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Library} />
          <Route path="/categories" exact component={Categories} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
