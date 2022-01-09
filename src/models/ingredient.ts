import mongoose from 'mongoose';

const ingredientSchema = new mongoose.Schema({
  name: String,
  measure: Number,
  selectedUnit: String,
  units: [],
  category: String,
  optional: Boolean,
  additionalInfo: String,
});

const Ingredient = mongoose.model('Ingredient', ingredientSchema);

export default Ingredient;
