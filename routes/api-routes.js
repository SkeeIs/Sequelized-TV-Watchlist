var db = require("../models");

module.exports = function(app) {
    //get route for all
    app.get("/api/shows", function(req, res) {
        db.Show.findAll({})
        .then(function(results) {
            res.json(results);
        });
    });

    //post route for new
    app.post("/api/shows", function(req, res) {
        db.Show.create({name: req.body.name})
        .then(function(results) {
            res.json(results);
        });
    });

    //Delete route
    app.delete("/api/shows/:id", function(req, res) {
        db.Show.destory({where: {id: req.params.id}})
        .then(function(results) {
            res.json(results);
        });
    });

    app.put("/api/shows", function(req, res) {
        db.Show.update({
            watched_status: req.body.watched_status, liked: req.body.liked
        }, {
            where: {id: req.body.id}})
            .then(function(results) {
                res.json(results);
            });
        });
};