import { useState } from 'react';
import './App.css';

export const App = () => {
const [newJoke, setNewJoke] = useState('');

  return (
    <input
      className='joke-input'
      type='text'
      placeholder='New One Liner'
      onChange={(event) => {
        setNewJoke(event.target.value);
        console.log(newJoke);
      }}
    />
  );
};
