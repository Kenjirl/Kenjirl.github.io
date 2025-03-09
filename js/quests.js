$(document).ready(function() {
	const difficulties = [
		{ 'Novice': { exp: 200, color: 'text-green-500' } }, 
		{ 'Easy': { exp: 400, color: 'text-blue-500' } }, 
		{ 'Medium': { exp: 600, color: 'text-yellow-500' } }, 
		{ 'Hard': { exp: 800, color: 'text-red-500' } }, 
		{ 'Expert': { exp: 1000, color: 'text-purple-500' } }
	];

	const quests = [
		{
			title: 'Ruteng',
			detail: 'My Final Project is to create a website as a graduation requirement for the "Basic JavaScript Programming" class at Dicoding. I have chosen a topic about my hometown.',
			missions: [
				'Creating a website by applying semantic concepts.',
				'Displaying personal identity using float in the aside section.'
			],
			exp: 100,
			lastSaved: 2022,
			url: 'https://kenjirl.github.io/halaman-profil-Ruteng/',
			tech: ['HTML, CSS, JavaScript']
		},
		{
			title: 'Bookshelf App',
			detail: 'A Data Management Application Using DOM and Web Storage as a graduation requirement for the "Beginner Front-End Web Development" class at Dicoding. This application is designed to record books that are currently being read or will be read.',
			missions: [
				'Add new books',
				'Have two bookshelves (unfinished and finished books)',
				'Move books between shelves',
				'Delete books'
			],
			exp: 300,
			lastSaved: 2022,
			url: 'https://kenjirl.github.io/bookshelf-app/',
			tech: ['HTML, CSS, JavaScript']
		},
		{
			title: 'The Movie DB',
			detail: 'A Web Application utilizing ES6, Custom Elements, NPM, Module Bundler, and AJAX as a graduation requirement for the "Fundamental Front-End Web Development" class at Dicoding. This application aims to display a list of movies registered in The Movie DB API.',
			missions: [
				'Implement ES6 standards',
				'Use at least one custom element',
				'Utilize Webpack',
				'Fetch data using AJAX'
			],
			exp: 700,
			lastSaved: 2022,
			url: 'https://kenjirl.github.io/the-movie-db/',
			tech: ['HTML, CSS, JavaScript, AJAX, NodeJS, API']
		},
		{
			title: 'Personal Note',
			detail: 'Building an SPA with API, Context, and Hooks as a graduation requirement for the "Fundamental Web Application Development with React" class at Dicoding. This application allows users to store notes, where there are active and archived notes, and each user can only access their own notes (using authentication).',
			missions: [
				'Display, add, and delete notes',
				'Use a Restful API as a data source',
				'Implement user registration and authentication',
				'Allow users to switch themes'
			],
			exp: 800,
			lastSaved: 2022,
			url: 'https://kenjirl.github.io/personal-note-2/',
			tech: ['HTML, CSS, JavaScript, ReactJS, API']
		},
		{
			title: 'Better Me',
			detail: 'SIB Cycle 3 Capstone Project as a graduation requirement for SIB at Dicoding. This application utilizes the Spoonacular API to display food recipes based on calorie needs or user searches.',
			missions: [
				'Display a list & details of food recipes',
				'Include a search filter feature',
				'Allow users to save recipes on their devices'
			],
			exp: 1000,
			lastSaved: 2022,
			url: 'https://better-me-242.netlify.app',
			tech: ['HTML, CSS, JavaScript, ReactJS, API']
		},
		{
			title: 'Timer App',
			detail: 'As the name suggests, this application is a countdown timer that runs based on the user\'s input.',
			missions: [
				'Add timer duration',
				'Perform countdown'
			],
			exp: 200,
			lastSaved: 2022,
			url: 'https://2001kevin.github.io',
			tech: ['HTML, CSS, JavaScript']
		},
		{
			title: 'Digital Wedding Invitation',
			detail: 'This project was the first paid job I received. It was created to generate digital wedding invitations that can be shared with guests. Guest management can be handled from the admin side.',
			missions: [
				'Design wedding invitations',
				'Develop a back-end system for managing guest invitations'
			],
			exp: 1000,
			lastSaved: 2023,
			url: 'https://github.com/Kenjirl/wedding-invitation-app-backend',
			tech: ['HTML, CSS, JavaScript, PHP, MySQL, Laravel']
		},
		{
			title: 'Random Rates',
			detail: 'A personal rating system. I created this to keep track of my ratings for products I have tried.',
			missions: [
				'Display ratings for reviewed products'
			],
			exp: 500,
			lastSaved: 2024,
			url: 'https://kenjirl.github.io/random-rate/',
			tech: ['HTML, CSS, TailwindCSS, JavaScript, ReactJS']
		},
		{
			title: 'Endless Tic-Tac-Toe',
			detail: 'An endless Tic-Tac-Toe game! Keep playing until a winner is determined.',
			missions: [
				'Classic Tic-Tac-Toe gameplay',
				'Endless mode (until a winner is found)',
				'Keyboard input support'
			],
			exp: 200,
			lastSaved: 2024,
			url: 'https://kenjirl.github.io/endless-tic-tac-toe/',
			tech: ['HTML, CSS, TailwindCSS, Javascript']
		},
		{
			title: 'Wedding Marketplace',
			detail: 'As the name suggests, this application is a specialized marketplace for wedding-related needs. Users can take on the role of either a couple planning their wedding or a service provider offering wedding-related services.',
			missions: [
				'Search for and book the most suitable wedding service providers.',
				'Make payments directly within the app and leave reviews.',
				'Create digital wedding invitations with a variety of available templates.'
			],
			exp: 1000,
			lastSaved: 2024,
			url: 'https://github.com/Kenjirl/wedding-marketplace/',
			tech: ['HTML, CSS, TailwindCSS, JavaScript, PHP, MySQL, Laravel, Midtrans Payment Gateway']
		},
		{
			title: 'GreenTech Solution Group Company Profile',
			detail: 'This is a Company Profile for GreenTech Solution as my Nusacodes Bootcamp 1st Assignment.',
			missions: [
				'Make a Company Profile.',
				'Need to have Homepage, About Us, Services, and Contact Us.'
			],
			exp: 100,
			lastSaved: 2025,
			url: 'https://kenjirl.github.io/greentech-solution-company-profile/index.html',
			tech: ['HTML, CSS, TailwindCSS, JavaScript']
		},
		{
			title: 'Point of Sales',
			detail: 'This is a simple POS application for managing product stock and transactions efficiently. It streamlines sales processes, tracks inventory, and ensures seamless payment integration.',
			missions: [
				'Manage new Roles and new User.',
				'CRUD for datas around retail like suppliers, customers, categories, etc.',
				'Payment system for sales using payment gateways.',
				'Export transaction and opname report data.'
			],
			exp: 700,
			lastSaved: 2025,
			url: 'https://github.com/Kenjirl/kodemastery-pos/',
			tech: ['HTML, CSS, TailwindCSS, JavaScript, PHP, MySQL, Inertia.js, ReactJS, Laravel, Midtrans Payment Gateway']
		},
		{
			title: 'Warm Log Residence',
			detail: 'Just a fun website that promotes houses on snowy place.',
			missions: [
				'Have Four Horsemen page for company page (landing page, about us, services, & contact).',
				'A few list of houses to sell.',
				'Have a blog for each house type.',
			],
			exp: 150,
			lastSaved: 2025,
			url: 'https://kenjirl.github.io/warm-log-residence/',
			tech: ['HTML, CSS, TailwindCSS, JavaScript']
		},
	];

	quests.forEach(function(quest, index) {
		let questDifficulty = '';
		let questColor = '';

		for (let i = 0; i < difficulties.length; i++) {
			let difficulty = Object.keys(difficulties[i])[0];
			let expRequirement = difficulties[i][difficulty].exp;
			if (quest.exp <= expRequirement) {
				questDifficulty = difficulty;
				questColor = difficulties[i][difficulty].color;
				break;
			}
		}

		$('#questButtonsContainer').append(`
			<div>
				<button class="relative w-full flex items-center justify-center gap-2 mx-auto rounded bg-cst-cream border-[2px] border-cst-black text-cst-black shadow-up-cream outline-none brightness-75
					hover:brightness-100 focus:brightness-100
					active:shadow-down-cream active:translate-y-2 
					transition-all group quest-button"
					type="button" id="questButton-${index}">
						<img class="w-[100px] aspect-video rounded-l-sm"
							src="../img/portfolio/${index+1}.jpg" alt="Image Button ${index}">
						<div class="w-full">
							<p class="text-start">${quest.title}</p>
						</div>
						<div>
							<span class="${questColor}">${questDifficulty}</span>
						</div>
						<div class="w-[75px] play-btn">
							<i class="fa-solid fa-circle-play"></i>
						</div>
				</button>
			</div>
		`);
	});

	function toggleQuestContainerStatus(status) {
		if (status === 'open') {
			$('#questListContainer')
				.removeClass(['-right-[100%]'])
				.addClass(['-right-0']);
		} else {
			$('#questListContainer')
				.removeClass(['-right-0'])
				.addClass(['-right-[100%]']);
		}
	};

	$('#closeQuestButtonsContainer').click(function () { 
		toggleQuestContainerStatus('close');
	});

	$('#openQuestButtonsContainer').click(function () { 
		toggleQuestContainerStatus('open')
	});

	$('.quest-button').click(function () {
		let id = parseInt($(this).attr('id').replace('questButton-', ''));
		let quest = quests[id];

		$('.quest-button')
			.removeClass('translate-y-2 bg-cst-black text-cst-cream border-cst-cream shadow-down-cream brightness-100')
            .addClass('bg-cst-cream text-cst-black border-cst-black shadow-up-cream brightness-75');

		$(this)
			.addClass('translate-y-2 bg-cst-black text-cst-cream border-cst-cream shadow-down-cream brightness-100')
			.removeClass('bg-cst-cream text-cst-black border-cst-black shadow-up-cream brightness-75');

		$('#questImage').attr("src", `../img/portfolio/${id+1}.jpg`).attr("alt", `Quest ${id+1}`);
		$('#questTitle').text(quest.title);
		$('#questStory').text(quest.detail);
		$('#questNumber').text(`#${id+1}`);

		let questDifficulty = '';
		let questColor = '';

		for (let i = 0; i < difficulties.length; i++) {
			let difficulty = Object.keys(difficulties[i])[0];
			let expRequirement = difficulties[i][difficulty].exp;
			if (quest.exp <= expRequirement) {
				questDifficulty = difficulty;
				questColor = difficulties[i][difficulty].color;
				break;
			}
		}

		$('#questDifficulty').text(questDifficulty).removeClass().addClass(questColor);

		$('#questExp').text(quest.exp);
		$('#questLastSaved').text(quest.lastSaved);
		$('#questUrl').attr('href', quest.url);

		let missionList = '';
		quest.missions.forEach(function(mission) {
			missionList += '<li>' + mission + '</li>';
		});
		$('#questMission').html(missionList);

		let techList = '';
		quest.tech.forEach(function(tech) {
			techList += '<li>' + tech + '</li>';
		});
		$('#questTechnology').html(techList);

		toggleQuestContainerStatus('close');

		let idPrev = id-1;
		let idNext = id+1;
		if (idPrev < 0) {
			idPrev = quests.length-1;
		}
		if (idNext >= quests.length) {
			idNext = 0;
		}
		$('#questPrevButton').data('id', idPrev);
		$('#questNextButton').data('id', idNext);
	});

	$('#questPrevButton').data('id', quests.length-1);

	$('#questPrevButton').click(function () {
		let id = parseInt($(this).data('id'));
		$('#questButton-' + id).click();
	});

	$('#questNextButton').click(function () {
		let id = parseInt($(this).data('id'));
		$('#questButton-' + id).click();
	});

	$('#questButton-0').trigger('click');
});
