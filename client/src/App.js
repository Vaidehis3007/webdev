// eslint-disable-next-line no-unused-vars
import logo from './logo.svg';
import './App.css';

// components
import Login from './components/account/account/Login';
import DataProvider from './context/DataProvider';

function App() {
  return (
    <div style={{marginTop: 64 }}>
      <DataProvider>
       <Login />
      </DataProvider>
      
    </div>
  );
}

export default App;