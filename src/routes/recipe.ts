import express from 'express';
import Recipe from '../models/recipe';
const router = express.Router();

router.post('/', async (req, res, next) => {
  try {
    const { name, image, instructions, ingredients, shared, optional, additionalInfo, userId } = req.body;
    const recipe = await Recipe.create({
      name,
      image,
      instructions,
      ingredients,
      shared,
      userId,
    });
    res.status(200).json(recipe);
  } catch (e) {
    next(e);
  }
});

router.get('/all/:userId', async (req, res, next) => {
  try {
    const allRecipes = await Recipe.find({userId: req.params.userId});
    res.status(200).json(allRecipes);
  } catch (e) {
    next(e);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    res.status(200).json(recipe);
  } catch (e) {
    next(e);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const deleted = await Recipe.findOneAndDelete({ _id: req.params.id });
    res.status(200).json(deleted);
  } catch (e) {
    next(e);
  }
});

export default router;
