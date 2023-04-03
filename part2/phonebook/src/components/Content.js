const Content = ({persons}) => (
    <>
    <h2>Numbers</h2>
    {persons.map(person => <p key={person.id}>{person.name} {person.number}</p>)}
    </>
)
export default Content;