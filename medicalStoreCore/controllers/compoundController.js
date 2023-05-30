const db = require('../models');

const Compound  = db.compound

//main work

const appCompound = async (req,res) =>{
    let info = {
        compoundName: req.body.compoundName,
        compoundDescription: req.body.compoundDescription,
        imageSource: req.body.imageSource,
        imageAttribute: req.body.imageAttribute,
        custom_date: new Date(req.body.custom_date.replace(/(\d{2})\/(\d{2})\/(\d{4})/, '$3-$2-$1')).toISOString()
    }

    const compound = await Compound.create(info)
    res.status(200).send(compound);
    console.log(compound);
}

//get all compound

const getAllCompound = async (req,res) =>{
    let compound = await Compound.findAll({})
    res.status(200).send(compound);
}

//get single compound

const getOneCompound = async (req,res) =>{
    let _id = req.params.id;
    let compound = await Compound.findOne({where: {id: _id}})
    res.status(200).send(compound);
}

const updateCompound = async (req,res) =>{
    let id = req.params.id;
    const compound = await Compound.update(req.body, {where: {id: id}})
    res.status(200).send(compound);
}

const deleteCompound = async (req,res) =>{
    let id = req.params.id
    await Compound.destroy({where: {id: id}})
    res.status(200).send('compound is deleted !')
}

const getPublishedCompound = async (req,res) =>{
    const compound = await Compound.findAll({where: { published: true}})
    res.status(200).send(compound);
}

module.exports = {
    appCompound,
    getAllCompound,
    getOneCompound,
    updateCompound,
    deleteCompound,
    getPublishedCompound
}