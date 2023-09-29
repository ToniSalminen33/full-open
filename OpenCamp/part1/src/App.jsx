
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

const Content = ({prt1, ex1, prt2, ex2, prt3, ex3}) => {
  return(
    <div>
      <Part prt={prt1} ex={ex1}/>
      <Part prt={prt2} ex={ex2}/>
      <Part prt={prt3} ex={ex3}/>
    </div>
  )
}

const Total = ({totalExs}) => {
  return (
    <div>
      Total: {totalExs}
    </div>
  )
}


const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content prt1={part1} prt2={part2} prt3={part3} ex1={exercises1} ex2={exercises2} ex3={exercises3} />
      <Total totalExs={exercises1 + exercises2 + exercises3} />
    </div>
  )
}

export default App
