/*
const skills = [
	{
		skill: 'HTML+CSS',
		level: 'advanced',
		color:'#2662EA'
	},
	{
		skill: 'JavaScript',
		level: 'advanced',
		color:'#EFD81D'
	},
	{
		skill: 'Web Design',
		level: 'advanced',
		color:'#C3DCAF'
	},
	{
		skill: 'Git and GitHub',
		level: 'intermediate',
		color:'#E84F33'
	},
	{
		skill: 'React',
		level: 'advanced',
		color:'#60DAFB'
	},
	{
		skill: 'Svelte',
		level: 'beginner',
		color:'#FF3B00'
	}
]

function SkillSet({name='', color='', level}) {
	return (
		<div style={{padding: '2px 12px', borderRadius: '5px', backgroundColor: color, marginLeft: '15px',
			display: 'flex', alignItems: 'center', gap: '8px', fontWeight: '800'}}>
			<span style={{textAlign: 'left', paddingLeft: '10px', fontSize: '12px'}}>{name}</span>
			<span style={{marginLeft: '9px'}}>{level === 'beginner' && '👶🏽'}</span>
			<span style={{marginLeft: '9px'}}>{level === 'intermediate' && '👍🏽'}</span>
			<span>{level === 'advanced' && '💪🏽'}</span>
		</div>
	)
}
	
function Card() {
	return (
		<div style={{border: '3px solid black', margin: '10px', width: '400px'}}>
			<img style={{width: '100%', height: '60%'}} src={picture} alt="Developer" />
			<h2 style={{textAlign: 'center', }}>John Doe</h2>
			<p style={{width: '90%',textAlign: 'left', paddingLeft: '15px'}}>
				Fullstack web developer and teacher at Udemy. When not coding or developing a course,
		  	I like to play board games, to cook (and eat) or I like to enjoy the 
				Portuguese sun at the beach.
			</p>
			<div style={{listStyle: 'none', display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '10px'}}>
				{skills.map(skill => <SkillSet
					name={skill.skill}
					color={skill.color}
					level={skill.level}
				/>)}
			</div>
		</div>
	);
}

function App() {
	return (
		<Card />
	)
}*/