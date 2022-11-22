import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import CustomNavbar from './components/Navbar'
import CustomFooter from './components/Footer'
import CustomJumbotron from './components/Welcome'
import Books from './components/Books'


function App() {
  return (
    <div>
    <CustomNavbar />
    <CustomJumbotron />
    <Books />
    <CustomFooter />

    </div>
   
  );
}

export default App;
