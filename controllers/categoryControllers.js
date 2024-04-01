import Category from "../models/categoriesModel.js";

const allCategories = async (req, res) => {
  try {
    const category = await Category.find({});

    res.status(200).json({
      success: true,
      message: "Categories found",
      allCategories: category,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "All categories not fetched",
      error: error.message,
    });
  }
};

const createCategories = async (req, res) => {
  try {
    const { name } = req.body;

    const existingCategory = await Category.findOne({
      name: name,
    }).exec();

    if (existingCategory) {
      return res.status(409).json({
        success: false,
        message: "Category already exists",
      });
    }
    const newCategory = await Category.create({ name });

    res.status(200).json({
      success: true,
      message: "Category created",
      newCategory,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "category not created",
      error: error.message,
    });
  }
};

export { allCategories, createCategories };
