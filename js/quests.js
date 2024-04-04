$(document).ready(function() {
	const difficulties = [
		{'Novice': 200}, 
		{'Easy': 400}, 
		{'Medium': 600}, 
		{'Hard': 800}, 
		{'Expert': 1000}
	];

	const quests = [
		{
			title: 'Ruteng',
			detail: 'Tugas Akhir Membuat Website sebagai syarat kelulusan kelas Belajar Dasar Pemrograman JavaScript di Dicoding. Saya memilih topik mengenai kota kelahiran saya.',
			missions: [
				'Membuat web dengan menerapkan konsep semantik',
				'Menampilkan identitas diri secara float pada aside'
			],
			exp: 100,
			lastSaved: 2022,
			url: 'https://kenjirl.github.io/halaman-profil-Ruteng/'
		},
		{
			title: 'Bookshelf App',
			detail: 'Aplikasi Pengelolaan Data Menggunakan DOM dan Web Storage sebagai syarat kelulusan kelas Belajar Membuat Front-End Web untuk Pemula di Dicoding. Aplikasi ini bertujuan untuk mencatat daftar buku-buku yang sedang dibaca maupun buku yang akan dibaca.',
			missions: [
				'Dapat menambah buku baru',
				'Memiliki 2 rak buku (belum selesai dibaca dan selesai dibaca',
				'Dapat memindahkan buku antar rak',
				'Dapat menghapus buku',
			],
			exp: 300,
			lastSaved: 2022,
			url: 'https://kenjirl.github.io/bookshelf-app/'
		},
		{
			title: 'The Movie DB',
			detail: 'Membuat Aplikasi Web dengan ES6, Custom Element, NPM, Module Bundler, dan AJAX sebagai syarat kelulusan kelas Belajar Fundamental Front-End Web Development di Dicoding. Aplikasi ini bertujuan untuk menampilkan daftar film yang terdaftar pada The Movie DB dengan memanfaatkan API.',
			missions: [
				'Menggunakan standar ES6',
				'Menggunakan satu custom element',
				'Menggunakan Webpack',
				'Memanfaatkan API dengan konsep AJAX',
			],
			exp: 700,
			lastSaved: 2022,
			url: 'https://kenjirl.github.io/the-movie-db/'
		},
		{
			title: 'Personal Note',
			detail: 'Membangun SPA + API, Context, dan Hooks sebagai syarat kelulusan kelas Belajar Fundamental Aplikasi Web dengan React di Dicoding. Aplikasi ini bertujuan untuk menyimpan catatan, di mana terdapat catatan aktif dan catatan arsip, dan setiap catatan milik masing-masing pengguna hanya dapat diakses oleh pengguna tersebut (menggunakan autentikasi).',
			missions: [
				'Dapat menampilkan, menambah, dan menghapus catatan',
				'Memanfaatkan Restful API sebagai sumber data',
				'Menggunakan registrasi dan autentikasi',
				'Dapat mengubah tema',
			],
			exp: 800,
			lastSaved: 2022,
			url: 'https://kenjirl.github.io/personal-note-2/'
		},
		{
			title: 'Better Me',
			detail: 'SIB Cycle 3 Capstone Project sebagai syarat kelulusan SIB di Dicoding. Aplikasi ini memanfaatkan spoonacular API untuk dapat menampilkan resep makanan yang sesuai dengan kebutuhan kalori atau pencarian pengguna.',
			missions: [
				'Menampilkan daftar & detail resep makanan',
				'Memiliki fitur filter pencarian',
				'Memiliki fitur menyimpan resep makanan pada perangkat pengguna',
			],
			exp: 1000,
			lastSaved: 2022,
			url: 'https://better-me-242.netlify.app'
		},
		{
			title: 'Timer App',
			detail: 'Sesuai namanya, aplikasi ini menrupakan aplikasi yang dapat melakukan perhitungan mundur sesuai dengan input yang diberikan.',
			missions: [
				'Menambah durasi timer',
				'Melakukan perhitungan mundur'
			],
			exp: 200,
			lastSaved: 2022,
			url: 'https://2001kevin.github.io'
		},
	];

	quests.forEach(function(quest, index) {
		$('#questButtonsContainer').append(`
			<div>
				<button class="relative w-full aspect-square mx-auto mb-4 last:mb-0 rounded bg-cst-black border-[3px] border-cst-cream shadow-down-cream outline-none
					hover:bg-cst-cream hover:border-cst-black hover:shadow-up-cream hover:-translate-y-2 hover:text-cst-black 
					focus:bg-cst-cream focus:border-cst-black focus:shadow-up-cream focus:-translate-y-2 focus:text-cst-black 
					active:shadow-down-cream active:-translate-y-0 
					transition-all group quest-button text-center"
					type="button" id="questButton-${index}">
						<span class="font-bold text-xl">
							${index+1}
						</span>
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
		console.log('asdasda')
	});

	$('#openQuestButtonsContainer').click(function () { 
		toggleQuestContainerStatus('open')
	});

	$('.quest-button').click(function () {
		let id = parseInt($(this).attr('id').replace('questButton-', ''));
		let quest = quests[id];

		$('#questImage').attr("src", `../img/portfolio/${id+1}.png`).attr("alt", `Quest ${id+1}`);
		$('#questTitle').text(quest.title);
		$('#questStory').text(quest.detail);
		$('#questNumber').text(`#${id+1}`);

		let questDifficulty = '';
		for (let i = 0; i < difficulties.length; i++) {
			let difficulty = Object.keys(difficulties[i])[0];
			let expRequirement = difficulties[i][difficulty];
			if (quest.exp <= expRequirement) {
				questDifficulty = difficulty;
				break;
			}
		}
		$('#questDifficulty').text('Difficulty : ' + questDifficulty);

		$('#questExp').text(quest.exp);
		$('#questLastSaved').text(quest.lastSaved);
		$('#questUrl').attr('href', quest.url);

		let missionList = '';
		quest.missions.forEach(function(mission) {
			missionList += '<li>' + mission + '</li>';
		});
		$('#questMission').html(missionList);

		toggleQuestContainerStatus('close');

		let idPrev = id-1;
		let idNext = id+1;
		if (idPrev < 0) {
			idPrev = quests.length-1;
		}
		if (idNext >=quests.length) {
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
});
