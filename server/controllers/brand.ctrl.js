const Brand = require('../models/brand.model')

async function handleGetBrands(req, res) {
    try {
        const brands = await Brand.find()
        res.status(200).json(brands)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

async function handleAddBrands(req, res) {
    try {
        const { name } = req.body
        const brand = await Brand.create({name})
        if (!name) {
            res.status(400).json({ message: "Brand name is requird" })
        }
        res.status(200).json({ message: "Brand added successfully", data: brand })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

async function handleGetBrandById(req, res) {
    try {
        const { id } = req.params
        const brand = await Brand.findById(id)
        if (!id) {
            res.status(400).json({ message: "Brand not found" })
        }
        res.status(200).json(brand)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

async function handleUpdateBrand(req, res) {
    try {
        const { id } = req.params
        const { name } = req.body
        const brand = await Brand.findByIdAndUpdate(id, { name }, { new: true })
        if (!name) {
            res.status(400).json({ message: "Name is required" })
        }
        if (!brand) {
            res.status(400).json({ message: "Brand is not found" })
        }
        res.status(200).json({ message: "Brand updated successfully", data: brand })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

async function handleDeleteBrand(req, res) {
    try {
        const { id } = req.params
        const brand = await Brand.findByIdAndDelete(id)
        if (!brand) {
            res.status(400).json({ message: "Brand not found" })
        }
        res.status(200).json({ message: "Brand deleted successfully" })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

module.exports = { handleGetBrands, handleAddBrands, handleGetBrandById, handleUpdateBrand, handleDeleteBrand }