const RecipeModel = require("../models/Recipes");
const express = require("express");

const recipesRouter = express.Router();

// GET
recipesRouter.get("/", (req, res) => {
  RecipeModel.find({})
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
});

// POST
recipesRouter.post("/", (req, res) => {
  const recipe = new RecipeModel(req.body);

  recipe
    .save({})
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
});

// PUT
recipesRouter.put("/", async (req, res) => {
  try {
    const recipe = await new RecipeModel.findById(req.body.recipeID);
    const user = await new UserModel.findById(req.bod.userID);
    user.savedRecipes.push(recipe);
    await user.save();
    res.json({ savedRecipes: user.savedRecipes });
  } catch (err) {
    res.json(err);
  }
});

recipesRouter.get("/savedRecipes/ids", async (req, res) => {
  try {
    const user = await UserModel.findById(req.body.userID);
    res.json({ savedRecipes: user?.savedRecipes });
  } catch (error) {
    res.json(err);
  }
});

recipesRouter.get("/savedRecipes", async (req, res) => {
  try {
    const user = await UserModel.findById(req.body.userID);
    const savedRecipes = await RecipeModel.find({
      _id: { $in: user.savedRecipes },
    });
    res.json({ savedRecipes });
  } catch (error) {
    res.json(err);
  }
});

module.exports = recipesRouter;
