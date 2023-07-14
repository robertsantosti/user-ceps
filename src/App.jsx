import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { HomePage } from './pages/Home/Home.page';
import { LoginPage } from './pages/Login/Login.page';
// import { LocalStorageService } from './services/User/LocalStorage.service';

// if(!LocalStorageService.get('users')) {
//   LocalStorageService.set('users', [
//     {
//       id: 1,
//       email: 'admin@usercep.com',
//       password: '12345678'
//     },
//     {
//       id: 2,
//       email: 'usuario@usercep.com',
//       password: '98765432'
//     },
//     {
//       id: 3,
//       email: 'usercep@gmail.com',
//       password: '12457896'
//     },
//     {
//       id: 4,
//       email: 'robertsantosti@outlook.com',
//       password: '12345678'
//     },
//   ])
// }

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='*' element={<><p>Pagina não existe</p></>}/>
      </Routes>
    </Router>
  )
}

export default App
