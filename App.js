import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import Answer1,{Answer2, Answer3, Answer4} from './components/Answer1';
import Hello1 from './components/Hello1';
import Ans1,{Ans2, Ans3, Ans4} from './components/Answer2';

function App() {
  return (
    <div className="App">

        <Hello></Hello>
        <Answer1/>
        <Answer2/>
        <Answer3/>
        <Answer4/>
        <Hello1></Hello1>
        <Ans1/>
        <Ans2/>
        <Ans3/>
        <Ans4/>
    </div>
  );
}

export default App;
