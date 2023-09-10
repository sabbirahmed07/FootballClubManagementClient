import { Route, Routes, Navigate } from 'react-router-dom';
import Footer from './Components/Layout/Footer';

import Header from './Components/Layout/Header';
import Layout from './Components/Layout/Layout';
import ClubList from './Pages/ClubList';
import HomePage from './Pages/HomePage';
import EditClub from './Pages/EditClub';
import EditMember from './Pages/EditMember';
import MemberList from './Pages/MemberList';

import setBaseUrl from './utils/setUrl';

setBaseUrl();

function App() {
	return (
		<div className='App'>
			<Header />
			<Layout>
				<Routes>
					<Route path='/' element={<Navigate replace to='/home' />} />
					<Route path='/home' element={<HomePage />} />
					<Route path='/clubs' element={<ClubList />} />
					<Route path='/clubs/add' element={<EditClub />} />
					<Route path='/clubs/edit' element={<EditClub />} />
					<Route path='/members' element={<MemberList />} />
					<Route path='/members/add' element={<EditMember />} />
					<Route path='/members/edit' element={<EditMember />} />
				</Routes>
			</Layout>
			<Footer />
		</div>
	);
}

export default App;
