import Button from '@mui/material/Button';

function App() {
  return (
    <div>
      <Button variant="contained" onClick={() => {
        alert('click!')
      }}>Click</Button>
    </div>
  )
}

export default App