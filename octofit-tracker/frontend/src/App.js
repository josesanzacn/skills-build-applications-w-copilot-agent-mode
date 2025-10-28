import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Activities from './components/Activities';
import Leaderboard from './components/Leaderboard';
import Teams from './components/Teams';
import Users from './components/Users';
import Workouts from './components/Workouts';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Importar el logo
import logo from './octofitapp-small.png';

function App() {
  return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-4 rounded">
          <Link className="navbar-brand d-flex align-items-center" to="/">
            <img src={logo} alt="Octofit Logo" className="octofit-logo" />
            Octofit Tracker
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item"><Link className="nav-link" to="/activities">Actividades</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/leaderboard">Leaderboard</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/teams">Equipos</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/users">Usuarios</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/workouts">Entrenamientos</Link></li>
            </ul>
          </div>
        </nav>
        <Routes>
          <Route path="/activities" element={<Activities />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/users" element={<Users />} />
          <Route path="/workouts" element={<Workouts />} />
          <Route path="/" element={
            <div className="card text-center">
              <div className="card-body">
                <h2 className="card-title">Bienvenido a Octofit Tracker</h2>
                <p className="card-text">¡Comienza a registrar tus actividades y compite con tu equipo!</p>
                <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#welcomeModal">Ver más</button>
              </div>
            </div>
          } />
        </Routes>
        {/* Modal Bootstrap */}
        <div className="modal fade" id="welcomeModal" tabIndex="-1" aria-labelledby="welcomeModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="welcomeModalLabel">Octofit Tracker</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <p>Esta aplicación te permite registrar actividades, ver el leaderboard, gestionar equipos y entrenamientos.</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
