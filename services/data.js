export const animalData = [
  {
    "name": "Hippopotamus",
    "image": require("../assets/animals/hippo.png"),
    "description": "Hippos are large aquatic mammals that are found in rivers and lakes in Africa. They are known for their large jaws and teeth, which they use to defend their territory, and for their ability to stay submerged in water for up to 5 minutes. Hippos are herbivores and primarily eat grass.",
    "class": "Mammal",
    "diet": "Herbivore",
    "habitat": "Rivers and lakes in Africa",
    "average_lifespan": "40-50 years",
    "backgroundColor": "#BAB6CE",
    "id": 1
  },
  {
    "name": "Monkey",
    "image": require("../assets/animals/monkey.png"),
    "description": "Monkeys are a type of primate found all over the world, in a variety of habitats. There are over 250 different species of monkeys, each with its own unique appearance and behavior. Monkeys are known for their intelligence, social nature, and dexterity. They are omnivores, meaning they eat both plants and animals.",
    "class": "Mammal",
    "diet": "Omnivore",
    "habitat": "Forests, grasslands, and deserts",
    "average_lifespan": "20-40 years",
    "backgroundColor": "#F8A66C",
    "id": 9

  },
  {
    "name": "Giraffe",
    "image": require("../assets/animals/giraff.png"),
    "description": "Giraffes are the tallest land animals and are found in savannas in Africa. They have long necks that help them reach leaves high up in trees, and they are able to run up to 35 mph. Giraffes are herbivores and have a specialized digestive system to help them break down tough plant material.",
    "class": "Mammal",
    "diet": "Herbivore",
    "habitat": "Savannas in Africa",
    "average_lifespan": "25 years",
    "backgroundColor": "#FFDD84",
    "id": 2
  },
  {
    "name": "Zebra",
    "image": require("../assets/animals/zebra.png"),
    "description": "Zebras are herbivorous mammals that live in grasslands and savannas in Africa. They are known for their distinctive black and white striped coats, which help them blend in with their surroundings and confuse predators. Zebras are social animals and live in groups called herds.",
    "class": "Mammal",
    "diet": "Herbivore",
    "habitat": "Grasslands and savannas in Africa",
    "average_lifespan": "20-25 years",
    "backgroundColor": "#C3C4C4",
    "id": 3
  },
  {
    "name": "Tiger",
    "image": require("../assets/animals/tiger.png"),
    "description": "Tigers are large, carnivorous cats that live in forests and grasslands in Asia. They are known for their distinctive orange coats with black stripes and are one of the most recognizable animals in the world. Tigers are solitary animals and are known for their strength and agility.",
    "class": "Mammal",
    "diet": "Carnivore",
    "habitat": "Forests and grasslands in Asia",
    "average_lifespan": "8-10 years",
    "backgroundColor": "#FFC916",
    "id": 4

  }, {
    "name": "Lion",
    "image": require("../assets/animals/lion.png"),
    "description": "Lions are large, carnivorous mammals that live in savannas and grasslands in Africa. They are known for their distinctive manes and are often referred to as the 'king of the jungle'. Lions are social animals and live in groups called prides.",
    "class": "Mammal",
    "diet": "Carnivore",
    "habitat": "Savannas and grasslands in Africa",
    "average_lifespan": "10-14 years",
    "backgroundColor": "#E3CAA7",
    "id": 5
  },
  {
    "name": "Elephant",
    "image": require("../assets/animals/elephant.png"),
    "description": "Elephants are the largest land animals and live in savannas, forests and deserts in Africa and Asia. They are known for their distinctive trunks and tusks, which are actually elongated teeth. Elephants are herbivores and can eat up to 300 pounds of vegetation per day.",
    "class": "Mammal",
    "diet": "Herbivore",
    "habitat": "Savannas, forests and deserts in Africa and Asia",
    "average_lifespan": "60-70 years",
    "backgroundColor": "#C7D8E0",
    "id": 6
  },
  {
    "name": "Rhinoceros",
    "image": require("../assets/animals/rhino.png"),
    "description": "Rhinoceros, also known as rhinos, are large, herbivorous mammals with a tough skin and one or two horns on their snout. There are five species of rhinos: black, white, Indian, Javan, and Sumatran. Rhinos are known for their strength and aggressive nature, and are sadly endangered due to habitat loss and poaching.",
    "class": "Mammal",
    "diet": "Herbivore",
    "habitat": "Grasslands and forests in Africa and Asia",
    "average_lifespan": "35-50 years",
    "backgroundColor": "#ECE7CC",
    "id": 7
  },
  {
    "name": "Horse",
    "image": require("../assets/animals/horse.png"),
    "description": "Horses are large, herbivorous mammals with a long, flowing mane and tail. They are domesticated animals that have been used for transportation, work, and leisure for thousands of years. Horses come in many different breeds, each with its own unique characteristics.",
    "class": "Mammal",
    "diet": "Herbivore",
    "habitat": "Grasslands and meadows",
    "average_lifespan": "25-30 years",
    "backgroundColor": "#FBCE6F",
    "id": 8
  },
  {
    "name": "Deer",
    "image": require("../assets/animals/deer.png"),
    "description": "Deer are a group of herbivorous mammals found throughout the world, including in forests, grasslands, and mountains. They have antlers that grow each year, which are used for defense, mating displays, and foraging. There are many different species of deer, each with its own unique characteristics and adaptations.",
    "class": "Mammal",
    "diet": "Herbivore",
    "habitat": "Forests, grasslands, and mountains",
    "average_lifespan": "4-12 years",
    "backgroundColor": "#F2CD9C",
    "id": 10
  }
]
export const quiz = [
  {level : 1, quizWords:quizLevelOne,unlocked:true,id:1},
  {level : 2, quizWords:quizLevelTwo, unlocked:false,id:2},
  {level : 3, quizWords:quizLevelTwo, unlocked:false,id:3},
  {level : 4, quizWords:quizLevelTwo, unlocked:false,id:4},
  {level : 5, quizWords:quizLevelTwo, unlocked:false,id:5},
  {level : 5, quizWords:quizLevelTwo, unlocked:false,id:6},
  {level : 5, quizWords:quizLevelTwo, unlocked:false,id:7},
]
export const quizLevelOne = [
  { question: 'B_N_NA', answer: 'ANANA' },
  { question: 'G_IR_F', answer: 'IRAFFE' },
  { question: 'C_T', answer: 'AT' },
  { question: 'H_R_E', answer: 'ORSE' },
  { question: 'DO_', answer: 'OG' },
]

export const quizLevelTwo = [
  { question: 'B_N_NA', answer: 'ANANA' },
  { question: 'G_IR_F', answer: 'IRAFFE' },
  { question: 'C_T', answer: 'AT' },
  { question: 'H_R_E', answer: 'ORSE' },
  { question: 'DO_', answer: 'OG' },
]
