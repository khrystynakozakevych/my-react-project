import Product from '../Product/Product';
import { useState } from 'react';
export default function Button() {
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    // alert("I'm a button!");
    setIsClicked(!isClicked);
    {
      console.log(isClicked);
    }
  };
  return (
    <div>
      <button onClick={handleClick}>Click on me!</button>
      {console.log(isClicked)}
      {isClicked && (
        <Product
          name="Fries and Burger"
          imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
          price={14.29}
        />
      )}
    </div>
  );
}
