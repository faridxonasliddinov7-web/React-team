import UserCard from '../mentor/_components/userCard'

const Ilhom = () => {
	return (
		<>
			<main className='bg-radial from-slate-300 to-slate-500 min-h-screen container p-12'>
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
		</>
	)
}

export default Ilhom
