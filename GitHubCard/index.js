/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

/* Step 2: Inspect and study the data coming back, this is YOUR
   github info! You will need to understand the structure of this
   data in order to use it to build your component function

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function,
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either
          follow this link in your browser https://api.github.com/users/<Your github name>/followers
          , manually find some other users' github handles, or use the list found
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.

          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:
*/

{/* <div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:
      <a href={address to users github page}>{address to users github page}</a>
    </p>
  <p>Followers: {users followers count}</p>
  <p>Following: {users following count}</p>
  <p>Bio: {users bio}</p>
</div>
</div > */}

const followersArray = ["teaguehannam", "dakoriah", "idongessien", "b-dubz79", "David-E-Alvarez"];


axios.get('https://api.github.com/users/TiffanyCrosby')
  .then(response => {
    console.log(response);
    // response.data.forEach(item => {
    //   let newPerson = people(item);
    cards.prepend(people(response.data));
  })
  .catch(error => {
    console.log('Data Not Returned', error);
  });

followersArray.forEach((follower) => {
  axios.get(`https://api.github.com/users/${follower}`)
    .then(response => {
      const newCard = people(response.data);
      cards.appendChild(newCard);
    });
})
  .catch(error => {
    console.log('Data Not Returned', error);
  });


let cards = document.querySelector('.cards');

let people = (data) => {

  //create new elements
  let card = document.createElement('div');
  let img = document.createElement('img');
  let cardInfo = document.createElement('div');
  let name = document.createElement('h3');
  let userName = document.createElement('p');
  let location = document.createElement('p');
  let profile = document.createElement('p');
  let pgUrl = document.createElement('a');
  let followers = document.createElement('p');
  let following = document.createElement('p');
  let bio = document.createElement('p');

  //add classes to elements
  card.classList.add('card');
  cardInfo.classList.add('card-info');
  name.classList.add('name');
  userName.classList.add('userName');

  //add attributes to elements
  img.src = data.avatar_url;
  name.textContent = data.name;
  userName.textContent = data.login;
  location.textContent = `Location: ${data.location}`;
  profile.textContent = `Profile: `;
  pgUrl.href = data.url;
  pgUrl.textContent = data.url;
  followers.textContent = `Followers: ${data.followers}`;
  following.textContent = `Following: ${data.following}`;
  bio.textContent = `Bio: ${data.bio}`;

  //append/attach elements to card
  card.append(img);
  card.append(cardInfo);
  cardInfo.append(name);
  cardInfo.append(userName);
  cardInfo.append(location);
  cardInfo.append(profile);
  cardInfo.append(followers);
  cardInfo.append(following);
  cardInfo.append(bio);
  profile.append(pgUrl);


  return card;
}

/* List of LS Instructors Github username's:
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
