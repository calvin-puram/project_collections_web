const projects = [
	{
		name: 'IP Tracker Using React/Nextjs',
    web: 'https://ip-address-tracker-rho.vercel.app/',
    img: './img/0.png',
		github:
			'https://github.com/calvin-puram/ip-address-tracker-main'
	},
	{
		name: 'Nodejs Tour App API Documentation',
    web: 'https://geo-tours.herokuapp.com/',
    img: './img/1.png',
		github:
			'https://github.com/calvin-puram/GeoTours'
	},
	{
		name: 'Search Github Users Built with Reactjs',
    web:'https://dev-search.netlify.app/',
    img: './img/2.png',
		github:
			'https://github.com/calvin-puram/Dev-Search'
	},
	{
		name: 'Developer Connect App built with Reactjs',
    web:'https://tech-connectme.herokuapp.com/',
    img: './img/3.png',
		github:
			'https://github.com/calvin-puram/tech_connect'
	},
	
];

const list = document.getElementById('list');

projects.forEach(({ name, github, web, img }, i) => {
	const listItem = document.createElement('li');

	listItem.innerHTML = `
		<a href="${web}">
			<img src="${img}" alt="${name}" />
			<p>${i + 1}. ${formatProjectName(name)}</p>
		</a>
		<div class="links-container">
			<a href="${web}" class="blue">
				<i class="fas fa-eye"></i>
			</a>
			<a href="${github}" class="youtube">
				<i class="fab fa-github"></i>
			</a>
		</div>
	`;

	list.appendChild(listItem);
});

function formatProjectName(name) {
	return name
		.split('-')
		.map(word => word[0].toUpperCase() + word.slice(1))
		.join(' ');
}