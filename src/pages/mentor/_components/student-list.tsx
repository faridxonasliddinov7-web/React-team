const students = [
	{
		id: 1,
		name: 'Ozodbek',
	},
	{
		id: 2,
		name: 'Foziljon',
	},
	{
		id: 3,
		name: 'Faridxon',
	},
]

const StudentList = () => {
	return (
		<div>
			{students.map(user => (
				<li
					key={user.id}
					className='bg-teal-500 m-2 list-none py-2 px-4 rounded-lg'
				>
					{user.name}
				</li>
			))}
		</div>
	)
}

export default StudentList
