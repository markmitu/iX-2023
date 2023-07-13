
let num = Math.floor(Math.random() * 11)
function num_guesser() {
    let input = document.getElementById("guess-btn")
    let guess = input.value

    let answer = document.getElementById("correct-incorrect")
    answer.innerHTML = (guess === num)? "Correct!" : "Incorrect"
}

const movies = [
    {title: 'Harry Potter', explanation: 'This movie is about a dude with a stick...', hint: 'It\'s Magic'},
    {title: 'Just Go With It', explanation: 'This movie is about people who go on holiday...', hint: 'Adam, Drew and Jennifer'},
    {title: 'Never Back Down', explanation: 'This movie is about two guys with daddy issues who beat each other up...', hint: 'Kanye West - Stronger'},
    {title: 'Spongebob Squarepants', explanation: 'This movie is about a rectangle...', hint: 'It\'s a cartoon'},
    {title: '50 First Dates', explanation: 'This movie is about a woman, she has the worst memory...', hint: '50 times...'},
    {title: 'Cars', explanation: 'In this movie, car go fast...', hint: 'Kachow'},
    {title: 'Spiderman', explanation: 'In this movie this guy just does not pay his rent, no matter how many times the landlord asks...', hint: 'Peta-Paka'},
    {title: 'The Wolf Of Wall Street', explanation: 'In this movie there\'s like illegal stuff, lots of money, and a blonde chick...', hint: 'HAWOOooooooooooo'},
    {title: 'Inception', explanation: 'In this movie everyone is like sleeping all the time...', hint: 'Dreams...'},
    {title: 'Peter Pan', explanation: 'In this movie some kids die and an angel escorts them to heaven...', hint: 'Always flying, cuz he neverlands'},
    {title: 'The Lord Of The Rings', explanation: 'In this movie some small guys go for a walk...', hint: 'You will not vacate past this exact position'},
    {title: 'Jurassic Park', explanation: 'This movie is about prehistoric creatures coming to life...', hint: 'Welcome to the jungle'},
    {title: 'The Shawshank Redemption', explanation: 'This movie follows the journey of a man in a correctional facility...', hint: 'Hope springs eternal'},
    {title: 'Toy Story', explanation: 'This movie explores the secret lives of playthings...', hint: 'Toys come alive'},
    {title: 'The Matrix', explanation: 'In this movie, reality is not what it seems...', hint: 'Take the red pill'},
    {title: 'The Lion King', explanation: 'This movie tells the story of a royal lineage...', hint: 'Hakuna Matata'},
    {title: 'The Dark Knight', explanation: 'In this movie, a masked hero protects a troubled city...', hint: 'Why so serious?'},
    {title: 'Forrest Gump', explanation: 'This movie follows the extraordinary life of a simple man...', hint: 'Life is a box of chocolates'},
    {title: 'Pulp Fiction', explanation: 'In this movie, multiple narratives intertwine in unexpected ways...', hint: 'The path of the righteous man'},
    {title: 'The Avengers', explanation: 'This movie brings together a team of extraordinary individuals...', hint: 'Earth\'s mightiest heroes'},
    {title: 'Back to the Future', explanation: 'In this movie, time travel plays a crucial role...', hint: '88 miles per hour'},
    {title: 'Inglourious Basterds', explanation: 'This movie is set during World War II and follows a group of soldiers...', hint: 'Au revior, Shoshanna!'},
    {title: 'The Godfather', explanation: 'This movie tells the story of a powerful crime family...', hint: 'I\'m gonna make him an offer he can\'t refuse'},
    {title: 'Eternal Sunshine of the Spotless Mind', explanation: 'In this movie, a couple undergoes a procedure to erase memories...', hint: 'Meet me in Montauk'},
    {title: 'The Shawshank Redemption', explanation: 'This movie follows the journey of a man in a correctional facility...', hint: 'Hope springs eternal'},
    {title: 'The Prestige', explanation: 'This movie explores the rivalry between two magicians...', hint: 'Are you watching closely?'},
    {title: 'Fight Club', explanation: 'In this movie, an insomniac office worker forms an underground fight club...', hint: 'The first rule of Fight Club is: You do not talk about Fight Club'},
    {title: 'Interstellar', explanation: 'This movie takes place in a future where space travel is essential for humanity...', hint: 'Love is the one thing that transcends time and space'},
    {title: 'The Silence of the Lambs', explanation: 'In this movie, an FBI trainee seeks the help of a brilliant psychiatrist...', hint: 'Hello, Clarice'},
    {title: 'The Grand Budapest Hotel', explanation: 'This movie follows the misadventures of a legendary hotel concierge...', hint: 'Keep your hands off my lobby boy'},
    {title: 'The Departed', explanation: 'This movie is about an undercover cop and a mole in the police force...', hint: 'I\'m the guy who does his job. You must be the other guy'}
   ]
   
function post_explanation() {
    let movie_index = Math.floor(Math.random() * movies.length)
    let explanation = document.getElementById("explanation")

    explanation.innerHTML = movies[movie_index].explanation
    return movies[movie_index]
}

//  call post_explanation to generate a text when the page first loads
let movie = post_explanation()
function movie_guesser() {
    let correct_movie = movie.title
    let input = document.getElementById("movie-guess")
    let movie_guess = input.value
    console.log(movie_guess)
    console.log(correct_movie)

    let answer = document.getElementById("movie-corr-inc")
    answer.innerHTML = (movie_guess === correct_movie)? "Correct!" : "Incorrect"
}

function post_hint() {
    let hint = document.getElementById("hint")
    hint.innerHTML = movie.hint
}

function refresh() {
    location.reload();
}