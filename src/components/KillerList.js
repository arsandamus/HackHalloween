import React from 'react';
import Killer from './Killer'



const killer = [
    {
        id:1,
        image:"https://thenypost.files.wordpress.com/2018/10/gettyimages-1056121808.jpg?quality=90&strip=all&w=618&h=410&crop=1",
        name: 'Michael Myers',
        type: 'humain',
        rating:5,
        price:9000,
        task:['tuer vos ennemis', 'kidnapper des gens'],
        location:'Grigny',
        description:'Ses yeux vous mentiront puis ils vous détruiront.Ils vous priveront de votre innocence, de votre fierté, peut-être même de votre âme.',
        quote:'...'
    },
    {
        id:2,
        image:"https://static.fnac-static.com/multimedia/Images/FD/Comete/92412/CCP_IMG_ORIGINAL/1176183.jpg",
        name:'Jigsaw',
        type:'humain',
        rating: 4.5,
        price:7500,
        task:['torturer vos proches', 'coiffure'],
        location:'Saint-Denis',
        description:'Le sadisme de cet individu vous laissera pantois.',
        quote:'Jouons à un jeu.'
    },

    {
        id:3,
        image:'https://dailygeekshow.com/wp-content/uploads/2019/06/UNE-the-joker.jpg',
        name:'Joker',
        type:'humain',
        rating:4.7,
        price:5800,
        task:['kidnapper des gens','garder vos enfants'],
        location:'Coulommier',
        description:'Rapide, efficace et sans trace.',
        quote:'Toi tu refuses de me tuer par principe. Et moi, je refuse de te tuer parce que tu es tellement amusant.'
    },

    {
        id:4,
        image:"https://1.bp.blogspot.com/--luzbgdCETE/WcAI0loq5rI/AAAAAAAAOes/AtA0XvQDXq4nwVYqleVf_m40-1VYaPcFwCLcBGAs/s1600/ghostface.jpg",
        name:'Ghostface',
        type:'humain',
        rating:3.9,
        price:900,
        task:['harceler quelqu\'un', 'sortir le chien'],
        location:'Paris',
        description:'Il vous suivra jusque dans votre lit.',
        quote:'Bouh'
    },

    {
        id:5,
        image:"https://fotos02.laopinioncoruna.es/mmp/2019/01/30/1024x341/chuckyserie.jpg",
        name:'Chucky',
        type:'monstre',
        rating:1.2,
        price:63,
        task:['coiffure', 'faire vos courses'],
        location:'Boulogne-Billancourt',
        description:'Il se coupera les cheveux en quatre pour vous.',
        quote:'Prends ça dans ta gue**, grognasse.'
    },

    {
        id:6,
        image:'https://static.hitek.fr/img/actualite/2015/08/07/fb_freddy-krueger.jpg',
        name:'Freddy Krueger',
        type:'monstre',
        rating:4,
        price:12,
        task:['garder vos enfants','faire votre ménage'],
        location:'Versailles',
        description:'Vos enfants feront de beaux rêves avec lui.',
        quote:'Tu peux pas me faire de mal, tu es dans mon monde.'
    },

    {
        id:7,
        image:"https://www.thewrap.com/wp-content/uploads/2016/10/american-horror-story-the-grudge.jpg",
        name:'Sadako',
        type:'monstre',
        rating:0.5,
        price:10,
        task:['faire votre ménage','chercher vos enfants'],
        location:'Arcueil',
        description:'Sa chevelure-serpillère fera briller vos sol',
        quote:'Yorushiku onegai shimasu'
    },

    {
        id:8,
        image:'https://d3isma7snj3lcx.cloudfront.net/optim/images/news/30/3050821483/jason-voorhees-et-trois-acolytes-se-livreront-aux-membres-xbox-live-gold-en-octobre-9b5ab547__w854.jpg',
        name:'Jason Voorkeer',
        type:'humain',
        rating:3.6,
        price:10,
        task:['faire vos courses','tuer vos ennemis'],
        location:'Paris',
        description:'Sa carrure puissante lui permet de faire tout votre shopping, sans limite.',
        quote:'silence...'
    },

    {
        id:9,
        image:"https://revengeofthefans.com/wp-content/uploads/2018/04/Pennywise-It-Movie-Featured-Image-970x545.jpg",
        name:'Pennywise',
        type:'monstre',
        rating:4.8,
        price:9,
        task:['chercher vos enfants','faire vos courses'],
        location:'Marne-La-Vallée',
        description:'Il les trouvera tous.',
        quote:'Il flotte...Tu flotteras aussi.'
    },

    {
        id:10,
        image:"http://images6.fanpop.com/image/photos/40800000/Carrie-2013-horror-movies-40812851-1280-1024.jpg",
        name:'Carrie',
        type:'humain',
        rating:0.1,
        price:8,
        task:['sortir le chien','torturer vos proches'],
        location:'Fontainebleau',
        description:"Elle...a essayé.",
        quote:"Ils me detestent tous. Jamais ils ne se fatiguent de me tourmenter."
    },

]

const KillerList = () => (
    <div>
        {killer.map(killerItem =>(
            <Killer image={killerItem.image} name={killerItem.name} rating={killerItem.rating} description={killerItem.description} quote={killerItem.quote} price={killerItem.price}/>
        ))}
    </div>
)






export default KillerList