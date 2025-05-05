import { v4 as uuidv4 } from 'uuid';
import podcast_website from './podcast-website.png';
import coffee_app from './coffee-app.png';
// import quiz_app from './quiz-app.png';
import vowel_counter from './vowel-counter.png';
import bmi_calculator from './bmi-calculator.png';


const projects = [
  {
    id: 1,
    image: coffee_app,
    title: "Coffee-App",
    description:
      "This is a description for Project 1. It shows the cool features of the first project.",
  },
  {
    id: 2,
    image: podcast_website,
    title: "Podcast Website",
    description:
      "This is a description for Project 2. It includes details about the second project.",
  },
  {
    id: 3,
    image: vowel_counter,
    title: "Vowel Counter",
    description:
      "This is a description for Project 3. A brief overview of the third project.",
  },
  {
    id: 4,
    image: bmi_calculator,
    title: "BMI Calculator",
    description:
      "This is a description for Project 4. It gives insights into the final project.",
  },
];

export default projects;
