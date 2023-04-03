import { useState, useEffect } from 'react'
import Content from './components/Content'
import Filter from './components/Filter'
import Form from './components/Form'

const App = () => {

   const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterVal, setFilterVal] = useState('')
  const [filteredNames, setFilteredNames] = useState([])

  const setName = (event) => setNewName(event.target.value)
  const setNumber = (event) => setNewNumber(event.target.value)

  

  useEffect(() => {
    const handleFilter = () => {
      setFilteredNames(!filterVal.length ? persons 
        : persons.filter(person => person.name.toLowerCase().includes(filterVal.toLowerCase())))
    }
    handleFilter()
  }, [filterVal, persons])


  
  const handleSubmit = (event) => {

    event.preventDefault()
    const dto = { name: newName, number: newNumber, id: persons[persons.length-1].id+1}
    let isSame 

    persons.forEach(person => {
      dto.name===person.name?isSame=true:isSame=false
    });
    
    if(!isSame){
      setPersons(persons.concat(dto))
    } else {
      window.alert(`${newName} is already added to the phonebook`)
    }
  }

  const handleSearchValue = (e) => setFilterVal(e.target.value)


  

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handler={handleSearchValue}/>
      <h2>add a new number</h2>
      <Form setName={setName} setNumber={setNumber} handler={handleSubmit}/>
      <Content persons={filteredNames}/>
    </div>
  )
}

export default App
