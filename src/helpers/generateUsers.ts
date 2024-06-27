import { v4 as uuidv4 } from 'uuid';
import { User } from '../types';

const generateUsers = (num: number): User[] => {
  const usernames = [
    'Alice',
    'Bob',
    'Charlie',
    'David',
    'Eve',
    'Frank',
    'Grace',
    'Heidi',
    'Ivan',
    'Judy',
    'Ken',
    'Laura',
    'Mallory',
    'Niaj',
    'Olivia',
    'Peggy',
    'Quinn',
    'Rupert',
    'Sybil',
    'Trent',
  ];

  const hobbiesList = [
    ['Reading', 'Swimming', 'Traveling'],
    ['Gaming', 'Cooking', 'Gardening'],
    ['Cycling', 'Hiking'],
    ['Photography', 'Drawing'],
    ['Writing', 'Dancing', 'Singing'],
    ['Running', 'Jogging'],
    ['Fishing', 'Skiing'],
    ['Painting', 'Crafting'],
    ['Baking', 'Cooking'],
    ['Yoga', 'Meditation'],
    ['Knitting', 'Sewing'],
    ['Bird Watching', 'Stargazing'],
    ['Collecting', 'Scrapbooking'],
    ['Martial Arts', 'Boxing'],
    ['Surfing', 'Skateboarding'],
    ['Basketball', 'Soccer'],
    ['Volunteering', 'Community Service'],
    ['Magic Tricks', 'Juggling'],
    ['Puzzles', 'Board Games'],
    ['Stand-up Comedy', 'Improv'],
  ];

  const users: User[] = [];

  for (let i = 0; i < num; i++) {
    users.push({
      id: uuidv4(),
      username: usernames[i % usernames.length],
      age: Math.floor(Math.random() * 50) + 18, // age between 18 and 67
      hobbies: hobbiesList[i % hobbiesList.length],
    });
  }

  return users;
};

const users = generateUsers(20);

console.log(JSON.stringify(users));
