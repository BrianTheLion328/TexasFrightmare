const express = require("express");
const Router = express.Router();
const { getAllCelebrities, getCelebrityById, deleteCelebrityById } = require('../db/index');

// get all celebrities

Router.get("/", async (req, res, next) => {
    try {
        const allCelebs = await getAllCelebrities();
        res.send({
            celebrities: allCelebs,
        });
    } catch (error) {
        console.error(error);
    }
});

// get ONE celebrity
Router.get("/:id", async (req, res, next) => {
    const { id } = req.params;
    try {
        const celebrity = await getCelebrityById(id);
        res.send({
            celebrity: celebrity
        })
    } catch (error) {
        throw error;
    }
});

// delete ONE celebrity
Router.delete("/delete/:id", async (req, res, next) => {
    const {id} = req.params;
    try {
        const deletedCelebrity = await deleteCelebrityById(id);
        res.send(deletedCelebrity)
    } catch (error) {
        throw error;
    }
});

module.exports = Router;
