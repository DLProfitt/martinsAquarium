// Importing getFish function from database.js to receive a copy of the database object, which holds an array of fish objects.
import { getFish } from './database.js'

const allFish = getFish()

for (const singleFish of allFish) {
    console.log(singleFish)
}

// Import the FishList function from the correct module
import { FishList } from './FishList.js'

const parentHTMLElement = document.querySelector(".fishListContainer")

parentHTMLElement.innerHTML = FishList();