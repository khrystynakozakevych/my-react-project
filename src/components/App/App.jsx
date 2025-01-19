import Product from '../Product/Product';
import Test from '../Test/Test';
import BookList from '../BookList/BookList';
import { favouriteBooks } from '../Books/FavouriteBooks';
import Card from '../Card/Card';
import Alert from '../Alert/Alert';
import UserMenu from '../UserMenu/UserMenu';
import Button from '../Button/Button';
import ClickCounter from '../ClickCounter/ClickCounter';
import { useState } from 'react';

export default function Ap() {
  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
    setClicks(clicks + 1);
  };
  return (
    <div>
      <ClickCounter value={clicks} onUpdate={handleClick} />
      <ClickCounter value={clicks} onUpdate={handleClick} />
      <Button />
      <UserMenu name="Jhon" />
      <Alert variant="info" elevated>
        Would you like to browse our recommended products?
      </Alert>
      <Alert variant="error" outlined>
        There was an error during your last transaction
      </Alert>
      <Alert variant="success">
        Payment received, thank you for your purchase
      </Alert>
      <Alert variant="warning">
        Please update your profile contact information
      </Alert>
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
