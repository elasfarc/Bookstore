import Navbar from './components/Navbar/Navbar';
import './App.css';
import store from './store/configureStore';
import * as actions from './store/books/book';

function App() {
  store.dispatch(actions.addBook({ title: 'book ##1', author: 'author1' }));
  console.log(store.getState());
  return <Navbar />;
}

export default App;
