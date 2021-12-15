
import React from 'react';
import SongList from './SongsList';

const App = () => {
  return (
    <div>
      <div className='ui container grid'>
        <div className='ui row'>
          <div className='column eight wide'>
            <SongList />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;