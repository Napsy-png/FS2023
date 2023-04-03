
const Total = ({ sum }) => <p style={{fontWeight:"bold"}}>total number of exercises {sum}</p>

const Header = ({header}) => <h1>{header}</h1>

const Part = ({ part }) => 
  <p>
    {part.name} {part.exercises}
  </p>

const Content = ({ parts }) => 
  <>
   {parts.map(part => <Part key={part.id} part={part}/>)}
  </>

  const Course = ({course}) => {

    let total = course.parts.reduce((s, p) => s + p.exercises, 0)

    return (
        <>
        <Header header={course.name}/>
        <Content parts={course.parts}/>
        <Total sum={total}/>
        </>
    )

  }
  export default Course;

