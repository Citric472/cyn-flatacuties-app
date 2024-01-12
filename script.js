document.addEventListener("DOMContentLoaded", function () {
  const characterList = document.getElementById("character-list");
  const characterDetails = document.getElementById("character-details");
  let characters = [];

  // Fetch characters from the API
  fetch("http://localhost:3000/characters")
    .then(response => response.json())
    .then(data => {
      characters = data;
      displayCharacterList(characters);
    });

  // Attach click event to each character for displaying details
  characterList.addEventListener("click", function (event) {
    if (event.target.tagName === "LI") {
      const characterId = parseInt(event.target.dataset.id);
      // Find the selected character by ID
      const selectedCharacter = characters.find(character => character.id === characterId);
      // Display the details of the selected character
      displayCharacterDetails(selectedCharacter);
    }
  });

  // Function to display the list of characters
  function displayCharacterList(characters) {
    characterList.innerHTML = "";
    characters.forEach(character => {
      const listItem = document.createElement("li");
      listItem.textContent = character.name;
      listItem.dataset.id = character.id;
      characterList.appendChild(listItem);
    });
  }

  // Function to display the details of a character
  function displayCharacterDetails(character) {
    characterDetails.innerHTML = `
      <h2>${character.name}</h2>
      <img src="${character.image}" alt="${character.name}">
      <p>Votes: ${character.votes}</p>
      <button onclick="voteForCharacter(${character.id})">Vote</button>
    `;
  }

  // Function to handle voting for a character
  window.voteForCharacter = function (characterId) {
    // Update the votes locally (no persistence needed)
    const selectedCharacter = characters.find(character => character.id === characterId);
    selectedCharacter.votes += 1;

    // Display updated details
    displayCharacterDetails(selectedCharacter);
  };
});
