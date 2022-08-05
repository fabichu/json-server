import './App.css';
import Product from './components/Product';
import { useState, useEffect } from 'react';

function App() {

  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const response = await fetch('http://localhost:8001/products');
    const data = await response.json();
    setProducts(data);
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="App">
      <div className='productContainer'>
        {products.map(product => (
          <Product
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            currency={product.currency}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
