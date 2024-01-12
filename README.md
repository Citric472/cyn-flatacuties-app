# Flatacuties
Flatacuties is a web app where users can vote for the cutest animals! The app fetches data from a local API and allows users to view a list of animal names, see the details of each animal (including image and votes), and vote for their favorites
## Project Overview

The main functionalities of Flatacuties include:

1. **View List of Animal Names:**
   - Users can see a list of all animal names by making a GET request to the endpoint `/characters`.

2. **View Animal Details:**
   - Clicking on an animal's name displays its details, including image and the number of votes.
   - The app fetches data from the endpoint `/characters/:id` to get the details of a specific animal.

3. **Vote for Animals:**
   - While viewing an animal's details, users can add votes.
   - The number of votes is displayed along with the animal's details.
   - No persistence is needed for the votes.




