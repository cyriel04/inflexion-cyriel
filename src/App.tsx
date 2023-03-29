import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route index path="/" element={<Dashboard />} />
					<Route path="signin" element={<SignIn />} />
					<Route path="signup" element={<SignUp />} />
					{/* <Route path="*" element={<NoPage />} /> */}
				</Routes>
			</BrowserRouter>
		</div>
	)
}

export default App
