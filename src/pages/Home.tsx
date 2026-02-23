import { ArrowBigRight } from 'lucide-react'
import { type JSX } from 'react'
import { Link } from 'react-router-dom'
import StudentButton from '../components/StudentButton'
import { students } from '../data/students'
const Home = (): JSX.Element => {
	return (
		<div style={{ padding: 40 }}>
			<h1 className='text-green-500'>Mentor React Platform</h1>

			<Link to='/mentor'>
				<button className='py-2 px-4 bg-green-500 rounded-xl flex text-gray-600 font-bold '>
					🧑🏻‍🏫 Mentor <ArrowBigRight fill='black' />
				</button>
			</Link>

			<hr className='' />
			<h2 className='text-7xl font-bold text-center my-4 text-blue-500 uppercase'>
				My team
			</h2>
			<div className='flex items-center justify-center'>
				{students.map(student => (
					<StudentButton
						key={student.id}
						name={student.name}
						path={student.path}
					/>
				))}
			</div>
		</div>
	)
}

export default Home
