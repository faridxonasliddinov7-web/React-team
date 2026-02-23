import UserCard from './_components/ui/UserCard'
const Farid = () => {
	return (
		<>
			<main className='bg-radial from-slate-300 to-slate-500 min-h-screen container p-12'>
				<UserCard
					age={16}
					email='faridxonasliddinov@gmail.com'
					lastname='Asliddinov'
					phone='+998938341021'
					key={1}
					firstname='Farid'
					imageUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzR0bIMZ71HVeR5zF4PihQaDvTQQk6bsVERw&s'
					isStudent='Farid'
				/>
			</main>
		</>
	)
}
export default Farid
