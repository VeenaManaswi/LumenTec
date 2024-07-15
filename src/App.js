import './App.css';
import BusinessCardContent from './components/BusinessCardContent';
import BusinessCardFooter from './components/BusinessCardFooter';
import BusinessCardHeader from './components/BusinessCardHeader';

function App() {
  return (
    <div className="App" >  
    <div className='inside'>
     <BusinessCardHeader/> 
     <BusinessCardContent/>
     <BusinessCardFooter/>
    </div>
    </div>
  );
}

export default App;
