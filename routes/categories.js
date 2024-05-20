const categoriesRouter = require("express").Router();

const {
  sendAllCategories,
  sendCategoryById,
  sendCategoryCreated,
  sendCategoryUpdated,
  sendCategoryDeleted,
} = require("../controllers/categories");
const { checkAuth } = require("../middlewares/auth");
const {
  findAllCategories,
  findCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
} = require("../middlewares/categories");

categoriesRouter.get("/categories", findAllCategories, sendAllCategories);
categoriesRouter.get("/categories/:id", findCategoryById, sendCategoryById);
categoriesRouter.post(
  "/categories",
  findAllCategories,
  checkAuth,
  createCategory,
  sendCategoryCreated
);

categoriesRouter.put(
  "/categories/:id",
  findCategoryById,
  checkAuth,
  updateCategory,
  sendCategoryUpdated
);

categoriesRouter.delete(
  "/categories/:id",
  checkAuth,
  deleteCategory,
  sendCategoryDeleted
);

module.exports = categoriesRouter;
