const mongoose = require('mongoose')
const express = require('express')
const port = 3000
const app = express()
const seedData = require('./models/pokemon.js')
const Pokemon = require('./models/pokemon.js')
const methodOverride = require('method-override')
require('dotenv').config()


    app.use(express.urlencoded({extended:true}))
    app.use(express.static('public'))
    app.use(methodOverride('_method'))
    
    
app.delete('/delete/:id',(req,res)=>{
    Pokemon.findByIdAndRemove(req.params.id,(err,foundPoke)=>{
        if(err){
            console.log(err)
        }else{
            res.redirect('/pokedex')
        }
    })
})
    
    app.get('/pokemon/seed',(req,res)=>{
        Pokemon.create(seedData,(err,seededData)=>{
            console.log('seed data',seededData)
            res.send(seededData)
        })
    })
    
app.get('/pokemon/:id',(req,res)=>{
    Pokemon.findById(req.params.id,(err,foundPokemon)=>{
        res.render('index.ejs',{
            pokemon: foundPokemon
        })
    })
})

app.get('/pokedex',(req,res)=>{
    Pokemon.find({},(err,allPokemon)=>{
        if(err){
            console.log(err)
        }else{
            res.render('show.ejs',{
                pokemon: allPokemon
            })
        }}
    )}
)
    
app.get('/new',(req,res)=>{
    Pokemon.find({},(err,allPokemon)=>{
        if(err){
            console.log(err)
        }else{
            res.render('new.ejs',{
                pokemon: allPokemon
            })
        }

    })
})

app.post('/new',(req,res)=>{
    Pokemon.create(req.body,(err,createPoke)=>{
        res.redirect('/new')
    })
})


app.get('/pokemon/:id/edit',(req,res)=>{
    Pokemon.findById(req.params.id,(err,foundPokemon)=>{
        if(err){
            console.log(err)
        }else{
            res.render('edit.ejs',{
                pokemon: foundPokemon
            })
        }
    })
})

app.put("/edit/:id",(req,res)=>{
    Pokemon.findByIdAndUpdate(req.params.id,req.body,{new:true},(err,updatedPoke)=>{
        res.redirect('/pokedex')
    })
})

mongoose.set('strictQuery',false)
mongoose.connect(process.env.MONGODB,()=>{
        console.log('connection to database successful')
    })
app.listen(port,()=>{
        console.log('litsening on port 3000')
    })