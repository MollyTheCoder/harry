
// BOOKS OBJECT

function Books (title, year, series, images, description) {

	this.title = title;
	this.year = year;
	this.series = series;

	this.images = images;
	this.description = description;

}

Books.prototype.displayImage = function() {
		const images = document.createElement('img');
		images.setAttribute('src', this.images);


		return images;

}

Books.prototype.displayDescription = function() {
		const par = document.createElement('p');
		par.textContent = this.description;

		return par;
}


Books.prototype.HTML = function() {

	

	let createHTML = '<li>';

	createHTML += this.series;
	createHTML += '. ';
	createHTML += '<strong>' 
	createHTML += this.title 
	createHTML += '</strong>';
	createHTML += ' ';
	createHTML += this.year;
	createHTML += '   ';
	
	createHTML += '</li>';
	createHTML += '<span>';
	createHTML += '</span>';

	
	
	return createHTML;
}



// LIBRARY OBJECT

function Library() {
	this.books = [];

	
}

Library.prototype.addBooks = function(book) {

	this.books.push(book);
}




Library.prototype.renderElement = function(List) {

	List.innderHTML = "";

	for(var i = 0; i < this.books.length; i++) {
        List.innerHTML += this.books[i].HTML();
     // List.innerHTML += '<button> Show synopsis </button>';
                    
    }

   
}




// CREATE BOOKS 


const library = new Library();


const bookOne = new Books("Harry Potter and the Philosopher's Stone",  "26 June 1997", 1, "covers/one.jpg", "Harry Potter has never even heard of Hogwarts when the letters start dropping on the doormat at number four, Privet Drive. Addressed in green ink on yellowish parchment with a purple seal, they are swiftly confiscated by his grisly aunt and uncle. Then, on Harry's eleventh birthday, a great beetle-eyed giant of a man called Rubeus Hagrid bursts in with some astonishing news: Harry Potter is a wizard, and he has a place at Hogwarts School of Witchcraft and Wizardry. An incredible adventure is about to begin!")
const bookTwo = new Books("Harry Potter and the Chamber of Secrets ",  "2 July 1998", 2, "covers/two.jpg", "Harry Potter's summer has included the worst birthday ever, doomy warnings from a house-elf called Dobby, and rescue from the Dursleys by his friend Ron Weasley in a magical flying car! Back at Hogwarts School of Witchcraft and Wizardry for his second year, Harry hears strange whispers echo through empty corridors - and then the attacks start. Students are found as though turned to stone ... Dobby's sinister predictions seem to be coming true.")
const bookThree = new Books("Harry Potter and the Prisoner of Azkaban",  "8 July 1999", 3, "covers/three.jpg", "When the Knight Bus crashes through the darkness and screeches to a halt in front of him, it's the start of another far from ordinary year at Hogwarts for Harry Potter. Sirius Black, escaped mass-murderer and follower of Lord Voldemort, is on the run - and they say he is coming after Harry. In his first ever Divination class, Professor Trelawney sees an omen of death in Harry's tea leaves ... But perhaps most terrifying of all are the Dementors patrolling the school grounds, with their soul-sucking kiss.");
const bookFour = new Books("Harry Potter and the Goblet of Fire",  "8 July 2000", 4, "covers/four.jpg", "The Triwizard Tournament is to be held at Hogwarts. Only wizards who are over seventeen are allowed to enter - but that doesn't stop Harry dreaming that he will win the competition. Then at Hallowe'en, when the Goblet of Fire makes its selection, Harry is amazed to find his name is one of those that the magical cup picks out. He will face death-defying tasks, dragons and Dark wizards, but with the help of his best friends, Ron and Hermione, he might just make it through - alive!");
const bookFive = new Books("Harry Potter and the Order of the Phoenix",  "21 June 2003", 5,"covers/five.jpg", "Dark times have come to Hogwarts. After the Dementors' attack on his cousin Dudley, Harry Potter knows that Voldemort will stop at nothing to find him. There are many who deny the Dark Lord's return, but Harry is not alone: a secret order gathers at Grimmauld Place to fight against the Dark forces. Harry must allow Professor Snape to teach him how to protect himself from Voldemort's savage assaults on his mind. But they are growing stronger by the day and Harry is running out of time.");
const bookSix = new Books("Harry Potter and the Half-Blood Prince",  "16 July 2005", 6, "covers/six.jpg", "When Dumbledore arrives at Privet Drive one summer night to collect Harry Potter, his wand hand is blackened and shrivelled, but he does not reveal why. Secrets and suspicion are spreading through the wizarding world, and Hogwarts itself is not safe. Harry is convinced that Malfoy bears the Dark Mark: there is a Death Eater amongst them. Harry will need powerful magic and true friends as he explores Voldemort's darkest secrets, and Dumbledore prepares him to face his destiny.");
const bookSeven = new Books("Harry Potter and the Deathly Hallows",  "21 July 2007", 7, "covers/seven.jpg", "As he climbs into the sidecar of Hagrid's motorbike and takes to the skies, leaving Privet Drive for the last time, Harry Potter knows that Lord Voldemort and the Death Eaters are not far behind. The protective charm that has kept Harry safe until now is now broken, but he cannot keep hiding. The Dark Lord is breathing fear into everything Harry loves, and to stop him Harry will have to find and destroy the remaining Horcruxes. The final battle must begin - Harry must stand and face his enemy.");

// ADD BOOKS TO LIBRARY


library.addBooks(bookOne);
library.addBooks(bookTwo);
library.addBooks(bookThree);
library.addBooks(bookFour);
library.addBooks(bookFive);
library.addBooks(bookSix);
library.addBooks(bookSeven);




const libraryElement = document.getElementById('library');



library.renderElement(libraryElement);


//LIBRARY UI



function addButton(text) {

	const li = document.getElementsByTagName('li');

	for(let i = 0; i < li.length; i++) {

	const button = document.createElement('button');
	var t = document.createTextNode("Show Synopsis");       
 	button.appendChild(t); 



	li[i].appendChild(button);
	
	}
}

addButton();


const button = document.getElementsByTagName("button");

for (var i = 0; i < button.length; i++) {

	button[i].setAttribute('id', i);
}

function appendSynopsis() {

	for(var i = 0; i < library.books.length; i++) {

		
	 const image = library.books[i].displayImage();
	 const par = library.books[i].displayDescription();

	const span = document.getElementsByTagName('span');

	span[i].appendChild(image);
	span[i].appendChild(par);

	span[i].style.display = 'none';
}
}
appendSynopsis();

libraryElement.addEventListener('click', function(e) {

	

	for(var i = 0; i < library.books.length; i++) {

		if (e.target.id == i && e.target.textContent == "Show Synopsis") {

			e.target.style.display = 'none';

	 
	const span = document.getElementsByTagName('span');
	span[i].style.display = 'block';

	

	const li = document.getElementsByTagName('li');
	const buttonHide = document.createElement('button');
	var t = document.createTextNode("Hide Synopsis");       
 	buttonHide.appendChild(t); 
	
 	

	li[i].appendChild(buttonHide);


	
}
else if (e.target.textContent == "Hide Synopsis") {

 		const span = document.getElementsByTagName('span');
	    span[i].style.display = 'none';

	    const buttonShow = document.getElementById(i);
	    buttonShow.style.display = 'block';
	    e.target.style.display = 'none';

	}
}

 
});
	

// libraryElement.addEventListener('click', function(e) {




// });