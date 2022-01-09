import mongoose from 'mongoose';

const recipeSchema = new mongoose.Schema({
  name: String,
  image: String,
  instructions: String,
  ingredients: Array,
  shared: Boolean,
  optional: Boolean,
  additionalInfo: String,
  userId: String,
});

const Recipe = mongoose.model('Recipe', recipeSchema);

export default Recipe;
