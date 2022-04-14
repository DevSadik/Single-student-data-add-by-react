import './App.css';
import { students } from './data';
import SingleStudent from './SingleStudent';

const App = ({ title }) =>{

  
  
  return (
    
   <>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="heading">
              <h1>{title}</h1>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto aspernatur quo nulla laboriosam repellendus assumenda molestias! Quibusdam dicta suscipit, non, impedit voluptatibus, consequatur illum distinctio similique atque asperiores aliquid dolores deserunt est dignissimos perferendis voluptatem facere repellendus dolorem adipisci ipsam. Molestias dolore aliquid tempora! Accusantium ut aspernatur porro tempore repellat.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">

          {
            students.map( ( student , index ) => 
            
              <SingleStudent style1="team"  serial={index + 1 } name={student.name} skill={student.skill} photo={student.photo} />
            
            )
          }
          
        </div>
      </div>
   
   </>
  );
}

export default App;
