import './App.css';
import Product from './components/Product';

function App() {
  return (
    <div className="App">
      <div className='productContainer'>
        <Product id='1' title='The Great Gatsby' price={'10'} currency='€' />
      </div>
    </div>
  );
}

export default App;
