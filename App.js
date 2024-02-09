
import React, { useState } from 'react'
import { Java, Html, Sql } from './Subject';
import './Styles.css'

function App() {
  let [pg, setpg] = useState(1)
  function redirect(pg) {
    setpg(pg)

  }
  return (
    <>
      <button onClick={() => redirect(1)} className={pg === 1 ? 'activeButton' : ''}> JAVA</button>
      <button onClick={() => redirect(2)} className={pg === 2 ? 'activeButton' : ''}> SQL</button>
      <button onClick={() => redirect(3)} className={pg === 3 ? 'activeButton' : ''}> HTML</button>
      {/* {pg===1? <Java />:  pg===2? <Sql /> : <Html />}   */}
      {pg === 1 && <Java />}
      {pg === 2 && <Sql />}
      {pg === 3 && <Html />}
    </>
  );
}

export default App;
