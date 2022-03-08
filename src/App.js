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
    contactsCopy.sort((elem1, elem2)=> elem1.name > elem2.name ? 1 : -1 )    
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
      <button onClick={handleAddContact}>Add Random Contact</button>
      <button onClick={handleSortByName}>Sort by Name</button>
      <button onClick={handleSortByPop}>Sort by Popularity</button>
      
      <table>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
            <th>Actions</th>
          </tr>
        
          {contacts.map((eachContact, index)=>{
            return(
            <tr key={eachContact.id}>
            <td> <img src={eachContact.pictureUrl} alt="{eachContact.name}" width="100px" /></td>
            <td>{eachContact.name}</td>
            <td>{Math.round(eachContact.popularity*100)/100}</td>
            {eachContact.wonOscar ? <td>🏆</td> : <td></td> }
            {eachContact.wonEmmy ? <td>⭐</td> : <td></td> }
            <td><button onClick={() => handleDeleteContact(index)}>Delete</button></td>            
          </tr> 
          )
          })}
      </table>
  </div>
  ) 
  
}

export default App;
