const db = require('../models')
const { Op } = require('sequelize')
// const axios = require('axios')


const index = (req, res) => {
    db.post.findAll().then((foundPosts) => {
        res.status(200).json({ posts: foundPosts})
    })
}

const show = (req, res) => {
    // console.log(req.params.category)
    // console.log(foundPosts)
    db.post.findAll({
        where: {
            category: {
                [Op.iLike]: `${ req.params.category }` // this does not like string of multiple words, only works for single word name
            }
        }
    }).then((foundPosts) => {
        if(!foundPosts) return res.json({
            message: 'Posts with selected category not found.'
        })
        res.status(200).json({ posts: foundPosts })
        // console.log(foundPosts)
    })
}

const showLocation = (req, res) => {
    // console.log("************************")
    db.post.findAll({
        where: {
            locationName: {
                [Op.iLike]: `${ req.params.locationName }` // this does not like string of multiple words, only works for single word name
            }
        }
    }).then((foundPosts) => {
        if(!foundPosts) return res.json({
            message: 'Posts with selected Location Name not found.'
        })
        res.status(200).json({ posts: foundPosts })
    })
}

const showDish = (req, res) => {
    // console.log('🍌')
    db.post.findAll({
        where: {
            dishName: {
                [Op.iLike]: `${ req.params.dishName }`
            }
        }
    }).then((foundPosts) => {
        if(!foundPosts) return res.json({
            message: 'Posts with seleced Dish Name not found.'
        })
        res.status(200).json({ posts: foundPosts })
    })
}

const showPost = (req, res) => {
    db.post.findAll({
        where: {
            userId: req.params.id
        },
        order: [['id', 'DESC']]
    }).then((foundPosts) => {
        if(!foundPosts) return res.json({
            message: 'Posts with selected user not found.'
        })
        res.status(200).json({ posts: foundPosts })
    })
}

const create = (req, res) => {
    db.post.create(req.body).then((savedPost) => {
        res.json({ post: savedPost})
    })
}

const update = (req, res) => {
    // console.log(req.params.id)
    db.post.update({
        ...req.body
    }, {
        returning: true,
        where: {
            id: req.params.id
        }
    }).then(function(updatedPost) {
        if(!updatedPost) return res.json({
            message: 'No post with that ID found.'
        })
        res.json({ post: updatedPost })
    }).catch(error => {
        console.log(error)
    })
}

const destroy = (req, res) => {
    db.post.destroy({
        where: {
            id: req.params.id
        }
    }).then(() => {
        res.sendStatus(200)
    })
}


module.exports = {
    index,
    show,
    showLocation,
    showDish,
    showPost,
    create,
    update,
    destroy
}