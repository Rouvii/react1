
import './App.css'
import upper from "./file1";
import {text1,text2, text3} from "./file1";
import person from "./file2";
import {males,females} from "./file2"
import { Welcome,MultiWelcome } from './file3';


function App() {
  const message = text1 + text2 + text3;
  
  console.log(males,females)

  const all = [...males, "Frank Hvam", ...females]
  console.log(all);
  return (
    <>
      <h1>Opgave 1</h1>

        {upper(message)}

        <h2>part 1</h2>
        <h3>
        {`${person.firstName} von ${person.lastName}`} </h3>

        <h3>
          {JSON.stringify(person)}
        </h3>
        <ul>
        {all.map((person) =>
           <li key={person}>{person}</li>)}
        </ul>
        
          <MultiWelcome />

          <Welcome name="JonasDillerMand" />
        
    </>
  )
}

export default App
