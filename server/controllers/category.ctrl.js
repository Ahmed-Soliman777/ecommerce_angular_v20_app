const Category = require('../models/category.modle')

async function handleAddCategory(req, res) {
    try {
        const { name } = req.body

        if (!name) {
            return res.status(400).json({ message: 'Category name is required' });
        }

        const category = await Category.create({ name });

        res.status(201).json({
            message: 'Category created successfully',
            data: category
        });
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

async function handleUpdateCategory(req, res) {
    try {
        const { name } = req.body
        const { id } = req.params

        if (!name) {
            return res.status(400).json({ message: 'Category name is required' });
        }

        const category = await Category.findByIdAndUpdate(id, { name });

        res.status(201).json({
            message: 'Category updated successfully',
            data: category
        });
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

async function handleDeleteCategory(req, res) {
    try {
        const { id } = req.params

        const category = await Category.findByIdAndDelete(id);
        if (!category) {
            return res.status(404).json({ message: 'Category not found' });
        }

        res.status(201).json({
            message: 'Category deleted successfully'
        });
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}


module.exports = { handleAddCategory, handleUpdateCategory, handleDeleteCategory }