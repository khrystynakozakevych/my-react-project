import './App.css';

import Product from '../Product/Product';
import Test from '../Test/Test';
import BookList from '../BookList/BookList';
import { favouriteBooks } from '../Books/FavouriteBooks';
import Card from '../Card/Card';
import Alert from '../Alert/Alert';

export default function App() {
  return (
    <div>
      <Alert>Alert</Alert>
      <h1>Best selling</h1>
      <Product name="Tacos With Lime" price={10.99} />
      <Product
        name="Fries and Burger"
        imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
        price={14.29}
      />
      <Test />
      <h2>Books of the week</h2>
      <BookList books={favouriteBooks} />
      <Card>Text between opening and closing tag</Card>
    </div>
  );
}
