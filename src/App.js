import './App.css'
import SearchBar from './components/SearchBar'
import Header from './components/Header'

function App () {
  return (
    <div className='App'>
      <Header />
      <main className='container max-screen-xl mx-auto'>
        <SearchBar />
      </main>
    </div>
  )
}

export default App
