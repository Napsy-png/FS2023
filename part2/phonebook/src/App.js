import { useState, useEffect } from 'react'
import Content from './components/Content'
import Filter from './components/Filter'
import Form from './components/Form'
import contacts from './services/contacts'

const App = () => {

  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterVal, setFilterVal] = useState('')
  const [filteredNames, setFilteredNames] = useState([])

  const setName = (event) => setNewName(event.target.value)
  const setNumber = (event) => setNewNumber(event.target.value)

  useEffect(() => {
    contacts.getAll()
      .then(response => {
        setPersons(response)
      })
  }, [])

  useEffect(() => {
    const handleFilter = () => {
      setFilteredNames(!filterVal.length ? persons
        : persons.filter(person => person.name.toLowerCase().includes(filterVal.toLowerCase())))
    }

    handleFilter()
  }, [filterVal, persons])

  const deletePerson = (id, name) => {
    if (window.confirm(`Are you sure you want to delete ${name}`)) {
      contacts.remove(id)
        .then(() => {
          setPersons(persons.filter(person => person.id !== id))
        })
        .catch(() => {
          window.alert("Oops, a problem occurred.")
        })
    }
  }

  const handleSubmit = (event) => {

    event.preventDefault()
    const personObject = { name: newName, number: newNumber, id: persons[persons.length - 1].id + 1 }
    let isSame

    persons.forEach(person => {
      personObject.name === person.name ? isSame = true : isSame = false
    });

    if (isSame) {
      window.confirm(`${personObject.name} is already added to the phonebook. Replace the old number with a new one?`)
      let target = persons.find(p => p.name === personObject.name)
      contacts
        .update(personObject, target.id)
        .then(response => setPersons(persons.map(person => person.id !== target.id ? person : response)))
    }
    else {
      contacts.add(personObject)
        .then(response => {
          setPersons(persons.concat(response))
          setNewName('')
          setNewNumber('')

        })
    }
  }

  const handleSearchValue = (e) => setFilterVal(e.target.value)

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handler={handleSearchValue} />
      <h2>add a new</h2>
      <Form name={newName} number={newNumber} setName={setName} setNumber={setNumber} handler={handleSubmit} />
      <h2>Numbers</h2>
      <Content persons={filteredNames} handleDelete={deletePerson} />
    </div>
  )
}

export default App
