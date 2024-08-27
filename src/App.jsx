import {React, useState}from 'react'
import appFirebase from './Credenciales'
import {getAuth, onAuthStateChanged} from 'firebase/auth'
import Login from './Components/Login'
import Home from './Components/Home'
import TopBar from './Components/TopBar'
import ProductList from './Components/ProductList'

const auth = getAuth(appFirebase)



function App() {

  // Paramatriza el login guardando el estado del usuarion

  const [user, setUser] = useState(null)
  onAuthStateChanged(auth, (userFirebase) => {
    if (userFirebase) {
      setUser(userFirebase)
  }
  else {
    setUser(null)
  }
})

  return (
    <div>

     
      <TopBar />
      <div className="main-content"> {/* Contenedor para el contenido principal */}
         {/* Llama el correo del user  */}
        {user ? <Home  correoUsuario = {user.email}/> : <Login />}
        <ProductList/>
      </div>

    </div>
  )
}

export default App
