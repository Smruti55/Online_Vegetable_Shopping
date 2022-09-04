import {Food} from './app/shared/models/Food';
import { Tag } from './app/shared/models/Tag';

export const sample_foods: Food[] = [

  {
    id:'7',
    name: 'Corn',
    price : 15,
    imageUrl: 'assets/corn.jpg',
    tags: ['Corn'],
  },
  {
    id:'8',
    name: 'Red-Cabbage',
    price: 70,
    imageUrl: 'assets/redcabbage.jpg',
    tags: ['Red-Cabbage'],
  },
  {
    id:'9',
    name: 'Bitter-Gaurd',
    price :  15,
    imageUrl: 'assets/bittergaurd.jpg',
    tags: ['Bitter-Gaurd'],
  },
  {
    id:'10',
    name: 'Peas',
    price: 10,
    imageUrl: 'assets/Peas.jpg',
    tags: ['Peas'],
  },
  {
    id:'11',
    name: 'Bitroot',
    price: 20,
    imageUrl: 'assets/bitroot.jpg',
    tags: ['Bitroot'],
  },
 
  {
    id:'12',
    name: 'Cucumber ',
    price: 35,
    imageUrl: 'assets/cucumber.jpg',
    tags: ['Cucumber'],
  },


  {
    id:'1',
    name: 'Spinach',
    price : 10,
    imageUrl: 'assets/food-1.jpg',
    tags: ['Spinach'],
  },
  {
    id:'2',
    name: 'Brocolli',
    price: 40,
    imageUrl: 'assets/food-2.jpg',
    tags: ['Brocolli'],
  },
  {
    id:'3',
    name: 'Cauliflower',
    price :  20,
    imageUrl: 'assets/food-3.jpg',
    tags: ['Cauliflower'],
  },
  {
    id:'4',
    name: 'Potato',
    price: 40,
    imageUrl: 'assets/food-4.jpg',
    tags: ['Potato'],
  },
  {
    id:'5',
    name: 'Mint',
    price: 10,
    imageUrl: 'assets/food-5.jpg',
    tags: ['Mint'],
  },
 
  {
    id:'6',
    name: 'Curry Leaves ',
    price: 30,
    imageUrl: 'assets/food-7.jpg',
    tags: ['Curry Leaves'],
  },
  
  
  
]

export const sample_tags:Tag[] = [
  { name: 'All', count: 12},
  { name: 'Leafy', count: 3 },
  { name: 'Root', count: 5},
  { name: 'Cruciferous', count: 2 },
  { name: 'Nightshades', count: 2 },
]
