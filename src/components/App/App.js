import BooksList from '../BooksList';
import BooksForm from '../BookForm';
import Navbar from '../navbar/navbar';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <BooksList />
    <BooksForm />
  </div>
);

export default App;
