const db = require('../models')
const { Op } = require('sequelize')
// const axios = require('axios')
// const express = require('express')


const index = (req, res) => {
    db.post.findAll().then((foundPosts) => {
        res.json({ posts: foundPosts})
    })
}

const show = (req, res) => {
    db.post.findAll({
        where: {
            category: {
                [Op.iLike]: `${ req.params.category }`
            }
        }
    }).then((foundPosts) => {
        if(!foundPosts) return res.json({
            message: 'Posts with selected category not found.'
        })
        res.json({ posts: foundPosts })
    })
}

const showLocation = (req, res) => {
    db.post.findAll({
        where: {
            name: {
                [Op.iLike]: `${ req.params.name }`
            }
        }
    }).then((foundPosts) => {
        if(!foundPosts) return res.json({
            message: 'Posts with selected Location Name not found.'
        })
        res.json({ posts: foundPosts })
    })
}

const showPost = (req, res) => {
    db.post.findAll({
        where: {
            userId: req.params.id
        }
    }).then((foundPosts) => {
        if(!foundPosts) return res.json({
            message: 'Posts with selected user not found.'
        })
        res.json({ posts: foundPosts })
    })
}

const create = (req, res) => {
    db.post.create(req.body).then((savedPost) => {
        res.json({ post: savedPost})
    })
}

const update = (req, res) => {
    console.log(req.body)
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
    showPost,
    create,
    update,
    destroy
}