import logo from './logo.svg';
import './App.css';
import allContacts from "./contacts.json";
import {useState} from "react";

function App() {
  const [contacts, setContacts] = useState(allContacts.slice(0,5))

  const handleAddContact = () => {
    const randomPos = Math.floor(Math.random()*(allContacts.length))
    const randomContact = allContacts[randomPos]
    
    setContacts ([...contacts, randomContact])
  }

  const handleSortByName = () => {
    const contactsCopy = [...contacts]
    contactsCopy.sort((contact1, contact2)=> contact1.name > contact2.name ? 1 : -1 )    
    setContacts(contactsCopy)
  }

  const handleSortByPop = () => {
    const contactsCopy = [...contacts]
    contactsCopy.sort((pop1, pop2)=> pop1.popularity > pop2.popularity ? -1 : 1 )    
    setContacts(contactsCopy)
  }
 
  const handleDeleteContact = (positionContact) => {
    const contactsCopy = [...contacts]
    contactsCopy.splice(positionContact, 1)
    setContacts(contactsCopy)
}
   
  return (

    
  <div className="App">
      
      <h1> IronContacts </h1>
      <div id='btn-padding' class="btn-group" role="group" aria-label="Basic mixed styles example">
        <button onClick={handleAddContact} type="button" class="btn btn-danger">Add Random Contact</button>
        <button onClick={handleSortByName} type="button" class="btn btn-warning">Sort by Name</button>
        <button onClick={handleSortByPop} type="button" class="btn btn-success">Sort by Popularity</button>
      </div>
      
      <table class="table">
          <tr>
            <th scope="col">Picture</th>
            <th scope="col">Name</th>
            <th scope="col">Popularity</th>
            <th scope="col">Won Oscar</th>
            <th scope="col">Won Emmy</th>
            <th scope="col">Actions</th>
          </tr>
        
          {contacts.map((eachContact, index)=>{
            return(
            <tr key={eachContact.id}>
            <td> <img src={eachContact.pictureUrl} alt="{eachContact.name}" width="100px" /></td>
            <td>{eachContact.name}</td>
            <td>{Math.round(eachContact.popularity*100)/100}</td>
            <td>{eachContact.wonOscar ? "🏆" : ""}</td>
            <td>{eachContact.wonEmmy ? "⭐" : ""}</td>
            <td><button onClick={() => handleDeleteContact(index)}>Delete</button></td>            
          </tr> 
          )
          })}
      </table>
  </div>
  )   
}

export default App;
