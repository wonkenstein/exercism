/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */
export const cookingStatus = (timeLeft = null) => {
  if (timeLeft === null || timeLeft === undefined || isNaN(timeLeft)) {
    return "You forgot to set the timer.";
  }
  if (timeLeft === 0) {
    return "Lasagna is done.";
  }
  return "Not done, please wait.";
};

export const preparationTime = (layers, timePerLayer = 2) => {
  return layers.length * timePerLayer;
};

export const quantities = (items) => {
  const NOODLE_QUANTITY = 50;
  const SAUCE_QUANTITY = 0.2;
  // noodles and sauce.
  const initial = {
    noodles: 0,
    sauce: 0,
  };
  const result = items.reduce((acc, item) => {
    if (item === "sauce") {
      acc.sauce += SAUCE_QUANTITY;
    } else if (item === "noodles") {
      acc.noodles += NOODLE_QUANTITY;
    }
    return acc;
  }, initial);

  return result;
};

export const addSecretIngredient = (list1, list2) => {
  const last = list1[list1.length - 1];
  list2.push(last);
};

export const scaleRecipe = (recipe, totalPeople) => {
  const RECIPE_NUM_PEOPLE = 2;
  const scale = totalPeople / RECIPE_NUM_PEOPLE;
  // const scaledRecipe = { ...recipe };
  const scaledRecipe = Object.keys(recipe).reduce((acc, ingredient) => {
    acc[ingredient] = recipe[ingredient] * scale;
    return acc;
  }, {});

  return scaledRecipe;
};
