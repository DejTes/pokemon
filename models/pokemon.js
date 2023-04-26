const mongoose = require('mongoose')

const pokemonSchema = new mongoose.Schema({
    id: {type:String, required: true, unique:true},
    name: {type:String, required: true},
    img:{type:String},
    type:[String],
    stats:{
        hp:{type:String},
        attack:{type:String},
        defense:{type:String},
        spattack:{type:String},
        spdefense:{type:String},
        speed:{type:String},
},
    moves:{
        level:[{
            learnedat:{type:String},
            name:{type:String},
            gen:{type:String},
        }],
        tmhm:[{
            learnedat:{type:String},
            name:{type:String},
            gen:{type:String}
        }]
    ,
    egg:[{
        name:{type:String},
        gen:{type:String}
    }],
    tutor:[{
        name:{type:String},
        gen:{type:String},
    }],
    gen34:[{
        name:{type:String},
        method:{type:String}
    }]
},
    damages:{

        normal:{type:String},
        fire:{type:String},
        water:{type:String},
        electric:{type:String},
        grass:{type:String},
        ice:{type:String},
        fight:{type:String},
        poison:{type:String},
        ground:{type:String},
        flying:{type:String},
        psychic:{type:String},
        bug:{type:String},
        rock:{type:String},
        ghost:{type:String},
        dragon:{type:String},
        dark:{type:String},
        steel:{type:String},
    }
    ,
    misc:{
        sex:{
            male: {type:String},
            female:{type:String}
        },
        abilities:{
            normal : [String],
            hidden: [String],
        },
        classification:{type:String},
        height:{type:String},
        weight:{type:String},
        capturerate:{type:String},
        eggsteps:{type:String},
        expgrowth:{type:String},
        hapiness:{type:String},
        evpoints:[String],
        freeflag:{type:String},
        entreeforestlevel:{type:String}
        }
    }
)

const pokemonModel = mongoose.model('pokemon',pokemonSchema)
module.exports = pokemonModel