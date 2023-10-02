
const Header = ({course}) => {
  return (
    <div>
      <h1>{course}</h1>
    </div>
  )
}

const Part = ({prt, ex}) => {
  return (
    <div>{prt}: {ex}</div>
  )
}

const Content = ({parts}) => {
  return(
    <div>
      <Part prt={parts[0].name} ex={parts[0].exercises}/>
      <Part prt={parts[1].name} ex={parts[1].exercises}/>
      <Part prt={parts[2].name} ex={parts[2].exercises}/>
    </div>
  )
}

const Total = ({parts}) => {
  return (
    <div>
      Total: {parts[0].exercises + parts[1].exercises + parts[2].exercises}
    </div>
  )
}


const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default App
