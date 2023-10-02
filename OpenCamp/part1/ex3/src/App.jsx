import { useState } from 'react'

const Header = ({title}) => {
  return(
    <h1>{title}</h1>
  )
}

const Button = ({click, title}) => {
  return (
    <button onClick={click}>{title}</button>
  )
}

const App = () => {
  const [anecdoteVotes, setAnecdoteVotes] = useState([0,0,0,0,0,0,0,0])

  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)

  const RandomAnecdote = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }

  const AddVote = () => {
    const newArray = anecdoteVotes.map((number, index) => {
      if (index === selected) {
        return number + 1;
      } else {
        return number;
      }
    });
    setAnecdoteVotes(newArray);
  }

  const mostVotedIndex = anecdoteVotes.indexOf(Math.max(...anecdoteVotes))

  return (
    <div>
      <Header title={"Anecdote of the day"} />
      {anecdotes[selected]}<br/>
      Anecdote has {anecdoteVotes[selected]} votes<br/>
      <Button click={AddVote} title={"Vote"} />
      <Button click={()=>RandomAnecdote()} title={"Random Anecdote"} />
      <br/>
      <Header title={"Anecdote with the most votes"}/>
      {anecdotes[mostVotedIndex]}<br/>
      Anecdote has {anecdoteVotes[mostVotedIndex]} votes
    </div>
  )
}

export default App