import './App.css';
import Product from './components/Product';
import catalogue from './api/products.json';
import { useState, useEffect } from 'react';

function App() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(catalogue.products);
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
