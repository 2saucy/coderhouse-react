import data from "../data.json"
import Header from "./components/Header"
import ItemListContainer from './components/ItemListContainer'

function App() {
  return (
    <>
      <Header />
      <ItemListContainer heading={'Our products'} list={data} />
    </>
  )
}

export default App
