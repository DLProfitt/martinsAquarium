/*
 *  To get you started, here's some properties of Bart.
 *  You need to add more properties to complete his
 *  representation as an object. Then add all the other
 *  fish to the collection.
 */
let database = {
    fish: [
        {
            species: "Clownfish",
            image: "",
            location:"",
            name: "Nemo",
            food: "small invertebrates and algae",
            length: 7
        },

        {
            species: "Blue Hippo Tang",
            image: "",
            location:"",
            name: "Dory",
            food: "marine algae, brine shrimp, and bits of seaweed",
            length: 12
        },

        {
            species: "Threadfin Butterflyfish",
            image: "",
            location:"",
            name: "Ariel",
            food: "mysis shrimp, crustaceans, and fish",
            length: 8
        },

        {
            species: "Angelfish",
            image: "",
            location:"",
            name: "Flounder",
            food: "small fish and insects",
            length: 7
        },

        {
            species: "Red Rock Crab",
            image: "",
            location:"",
            name: "Mr. Krabs",
            food: "snails, clams, abalone, barnacles, and oyster",
            length: 6
        },

        {
            species: "Sea Star",
            image: "",
            location:"",
            name: "Patrick",
            food: "clams, mussels and oysters",
            length: 6
        }
    ]
}

// getFish copies the objects in an array
export const getFish = () => {
    return database.fish.map(copyOfSingleFishObject => ({...copyOfSingleFishObject}))
}

