// write some routes
// require the functions that I wrote from the DB index

const apiRouter = require('express').Router();

apiRouter.get("/", (req, res, next) => {
    res.send({
        message: "API is under construction!"
    });
});

const celebritiesRouter = require ('./celebrities');
apiRouter.use("/celebrities", celebritiesRouter);

module.exports = apiRouter;
