var express = require('express');
const { default: Booking } = require('../models/Booking.js');
var router = express.Router();
var bus = require('../models/Buses');
const passport = require("passport");


// router.get('/', (req, res) => {
//     bus.find({ companyName, startCity, totalseats, availableseats }, (err, result) => {
//         if (err) res.send(err)
//         else res.json({ result })
//     })
// })

router.post('/', (req, res) => {

    bus.find({ 'startCity': req.body.startCity, 'destination': req.body.destination }).exec((err, bus) => {
        if (err) {
            res.json({ status: false, message: "Error While Searching" })
        }
        else res.json({ bus })
    })
})

router.post('/book', passport.authenticate('jwt', { session: false }), (req, res) => {
    Booking.create({
        startCity:req.startCity,
        destination: req.destination,
        date: req.date,
        seats: req.seats
    })
})

router.get('/all', passport.authenticate('jwt', { session: false }),(req, res) => {
    Booking.find({
        user: req.user
    })
})


// router.post('/', (req, res) => {

//     bus.findOne({ _id: req.body.bId }, (err, bus) => {
//         if (err) {
//             res.json({ status: false, message: "Error While Searching With ID" })
//         }
//         else
//             res.json({ bus })
//     })
// })

// router.post('/', (req, res) => {
//     let newBus = new bus(req.body)
//     newBus.save((err, bus) => {
//         if (err) console.log(err)
//         else res.status(201).json(bus)
//     })
// })

module.exports = router;
