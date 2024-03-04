import './App.css';
import ProductList from './ProductList';
import Products from './Products';


function App() {
  return (
    <div className="App">
    <header>Products-App</header>
    <ProductList />
    <Products />
    <footer>
    <p>&copy; 2024 E-commerce Website. All rights reserved.</p>
  </footer>
  </div>
  );
}

export default App;