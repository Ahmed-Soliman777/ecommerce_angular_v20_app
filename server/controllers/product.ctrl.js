const products = require("../models/product.modle")

async function handleGetProducts(req, res) {
    try {
        const getProducts = await products.find()
        res.status(200).json(getProducts)

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

async function handleGetProductById(req, res) {
    try {
        const { id } = req.params
        if (!id) {
            res.status(400).json({ message: "Product not found" })
        }
        const getProduct = await products.findById(id)
        res.status(200).json(getProduct)

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

async function handleAddProducts(req, res) {
  try {
    const {
      name,
      description,
      shortDescription,
      purshasePrice,
      sellingPrice,
      images,
      categoryId,
      discount,
      brandId
    } = req.body;

    if (!name || !purshasePrice || !sellingPrice) {
      return res.status(400).json({ message: "Required info missed" });
    }

    const addProduct = await products.create({
      name,
      description,
      shortDescription,
      purshasePrice,
      sellingPrice,
      images,
      categoryId,
      discount,
      brandId,
    });

    return res.status(200).json(addProduct);

  } catch (error) {
    console.error("Error adding product:", error.message);
    return res.status(500).json({ message: error.message });
  }
}


async function handleUpdateProducts(req, res) {
    try {
        const { id } = req.params
        const updateData = req.body;
        if (!id) {
            res.status(400).json({ message: "Product not found" })
        }
        const updateProduct = await products.findByIdAndUpdate(id, updateData, { new: true })
        res.status(200).json(updateProduct)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

async function handleDeleteProducts(req, res) {
    try {
        const { id } = req.params
        if (!id) {
            res.status(400).json({ message: "Product not found" })
        }
        const deleteProduct = await products.findByIdAndDelete(id)
        res.status(200).json("product deleted successfully")
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

module.exports = { handleGetProducts, handleGetProductById, handleAddProducts, handleUpdateProducts, handleDeleteProducts }