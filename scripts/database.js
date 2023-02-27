// Initialization of database object, which holds an array of fish objects.
let database = {
  fish: [
      {
          name: "Nemo",
          species: "Clownfish",
          image: "https://www.fantaseaaquariums.com/wp-content/uploads/2020/03/clownfish-3-840x405.jpg",
          location:"Anilao, Philippines",
          food: "small invertebrates and algae",
          length: 7
      },

      {
          name: "Dory",
          species: "Blue Hippo Tang",
          image: "https://images.pexels.com/photos/6949171/pexels-photo-6949171.jpeg",
          location:"Red Sea, Egypt",
          food: "marine algae, brine shrimp, and bits of seaweed",
          length: 12
      },
      
      {
          name: "Mr. Gill",
          species: "Moorish Idol Fish",
          image: "https://beachbaby.net/wp-content/uploads/2016/08/moorish_idol_620.jpg",
          location:"Kona, Hawaii",
          food: "snails, clams, abalone, barnacles, and oyster",
          length: 6
      },

      {
          name: "Ariel",
          species: "Threadfin Butterflyfish",
          image: "https://i.pinimg.com/564x/c0/71/69/c07169f602e82ce48d958dd1b190c3bb.jpg",
          location:"Raja Ampat Islands, Indonesia",
          food: "mysis shrimp, crustaceans, and fish",
          length: 8
      },

      {
          name: "Flounder",
          species: "Royal Angelfish",
          image: "https://www.sevenseasmermaid.com/wp-content/uploads/What-Kind-of-Fish-is-Flounder-from-the-Little-Mermaid.jpg?ezimgfmt=ng:webp/ngcb2",
          location:"Cocos Island, Costa Rica",
          food: "small fish and insects",
          length: 7
      },

      {
          name: "Patrick",
          species: "Sea Star",
          image: "https://img.freepik.com/premium-photo/red-starfish-aquarium-tank-echinaster-sepositus_755933-389.jpg?w=900",
          location:"Great Barrier Reef, Australia",
          food: "clams, mussels and oysters",
          length: 6
      }
  ]
}

// Exporting the getFish function
export const getFish = () => {
  return database.fish.map(copyOfSingleFishObject => ({...copyOfSingleFishObject}))
}