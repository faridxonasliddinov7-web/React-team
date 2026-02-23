import './style/style.css'

import { useEffect } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Karta from './_components/karta'
import UserCard from './_components/userCard'
const Mentor = () => {
	useEffect(() => {
		document.title = 'Mentor Template'
	}, [])
	return (
		<>
			<main className='bg-radial from-slate-300 to-slate-500 min-h-screen  p-12'>
				<UserCard
					age={25}
					email='ilxomdeveloper@gmail.com'
					lastname='Toshqulov'
					phone='+998771232115'
					key={1}
					firstname='Ilhom'
					imageUrl='https://picsum.photos/id/120/300/300'
					isStudent='Student'
				/>
			</main>
			<div className='grid lg:grid-cols-4 sm:grid-cols-2 gap-4 p-4'>
				<Karta title='Villa' icon='🧑🏻‍🏫'>
					<button>Reserve Now</button>
				</Karta>
				<Karta title='Villa' icon='🧑🏻‍🏫'>
					<button>Reserve Now</button>
				</Karta>
				<Karta title='Villa' icon='🧑🏻‍🏫'>
					<button>Reserve Now</button>
				</Karta>
				<Karta title='Villa' icon='🧑🏻‍🏫'>
					<button>Reserve Now</button>
				</Karta>
				<Karta title='Villa' icon='🧑🏻‍🏫'>
					<button>Reserve Now</button>
				</Karta>
				<Karta title='Villa' icon='🧑🏻‍🏫'>
					<button>Reserve Now</button>
				</Karta>
			</div>

			<div>
				<Link to={'/students/farid'}>
					<button className='bg-green-400 border-2 py-2 px-4 m-8 rounded-xl'>
						Faridni sahifasi
					</button>
				</Link>
				<Link to={'/students/fozil'}>
					<button className='bg-green-400 border-2 py-2 px-4 m-8 rounded-xl'>
						Fozilni sahifasi
					</button>
				</Link>
				<Link to={'/students/ozodbek'}>
					<button className='bg-green-400 border-2 py-2 px-4 m-8 rounded-xl'>
						Ozodbek sahifasi
					</button>
				</Link>
			</div>

			{/* =============== */}

			<Routes>
				<Route
					path='/'
					element={
						<UserCard
							age={25}
							email='ilxomdeveloper@gmail.com'
							lastname='Toshqulov'
							phone='+998771232115'
							key={1}
							firstname='Ilhom'
							imageUrl='https://picsum.photos/id/120/300/300'
							isStudent='Student'
						/>
					}
				/>
			</Routes>
		</>
	)
}

export default Mentor
