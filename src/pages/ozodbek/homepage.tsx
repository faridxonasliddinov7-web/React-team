import { Link,Route } from 'react-router-dom'
import UserCard from './companenti/card'
import LikeDisplay from './companenti/likedisplay'
function Ozodbek() {
	return (
		<>
			<main className='bg-radial from-slate-300 to-slate-500 min-h-screen container p-12'>
				<UserCard
					age={15}
					email='ozodabdushukurov364@gmail.com'
					lastname='Abdushukurov'
					phone='+998943551545'
					key={1}
					firstname='Ozodbek'
					imageUrl='https://picsum.photos/id/120/300/300'
					isStudent='Student'
				/>
			</main>
			<LikeDisplay />
			<div className='mt-24'>
				<Link to={'https://google.com'}>Google ga o'tish</Link>
			</div>
		
		</>
	)
}

export default Ozodbek
