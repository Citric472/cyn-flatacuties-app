document.addEventListener("DOMContentLoaded", function() {
    const animalListContainer = document.getElementById("animalList");
    const animalDetailsContainer = document.getElementById("animalDetails");
  
    // Function to fetch and display the list of animals
    function displayAnimalList() {
      fetch("http://localhost:3000/characters")
        .then(response => response.json())
        .then(data => {
          animalListContainer.innerHTML = "";
          data.forEach(animal => {
            const animalCard = document.createElement("div");
            animalCard.classList.add("animal-card");
            animalCard.textContent = animal.name;
  
            // Event listener to show animal details on click
            animalCard.addEventListener("click", function() {
              displayAnimalDetails(animal.id);
            });
  
            animalListContainer.appendChild(animalCard);
          });
        })
        .catch(error => console.error("Error fetching animal list:", error));
    }
  
    // Function to fetch and display animal details
    function displayAnimalDetails(animalId) {
      fetch(`http://localhost:3000/characters/${animalId}`)
        .then(response => response.json())
        .then(animal => {
          animalDetailsContainer.innerHTML = `
            <div class="animal-details">
              <h2>${animal.name}</h2>
              <img src="${animal.image}" alt="${animal.name}">
              <p>Votes: ${animal.votes}</p>
              <button onclick="voteForAnimal(${animal.id})">Vote</button>
            </div>
          `;
        })
        .catch(error => console.error("Error fetching animal details:", error));
    }
  
    // Function to simulate voting for an animal
    window.voteForAnimal = function(animalId) {
      // Simulate voting logic (you can enhance this based on your requirements)
      console.log(`Voted for animal with ID ${animalId}`);
    };
  
    // Initial display of the animal list
    displayAnimalList();
  });
  