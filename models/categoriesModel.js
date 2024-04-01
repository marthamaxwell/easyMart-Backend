import mongoose from "mongoose";

const CategorySchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please include a category"],
    // enum: ["Clothing", " Accessories", "Phone", "Computers", "Footwares"],
  },
});

const Category = mongoose.model("Category", CategorySchema);
export default Category;
