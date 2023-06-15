import logo from './logo.svg';
import './App.css';
import TextForm from './components/TextForm';
import Todo from './components/Todo';

function App() {
  return (
    <div className="App">
      <h1>Text Modifier app</h1>
      <TextForm />
      <h1 style={{ paddingTop: '40px' }}>Todo App</h1>
      <Todo />
    </div >
  );
}

export default App;
