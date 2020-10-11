import React from 'react';
import TextInput from './components/TextInput';
import Greets from './components/Greets';
import logo from './logo.svg';
import './App.css';
import CharacterList, { Character } from './components/CharacterList';

const App: React.FC = () => {
  const characters: Character[] = [
    {
      id: 1,
      name: '桜木花道',
      grade: 1,
      height: 189.2,
    },
    {
      id: 2,
      name: '流川 楓',
      grade: 1,
      height: 187,
    },
    {
      id: 3,
      name: '宮城リョータ',
      grade: 2,
      height: 168,
    },
    {
      id: 4,
      name: '三井 寿',
      grade: 3,
    },
    {
      id: 5,
      name: '赤木剛憲',
      grade: 3,
      height: 197,
    },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Greets name="sakamoto">こんにちは</Greets>
      <TextInput />
      <div className="container">
        <header>
          <h1>SLUMDUNK 登場人物</h1>
          <CharacterList school="湘南高校" characters={characters} />
        </header>
      </div>
    </div>
  );
};

export default App;
