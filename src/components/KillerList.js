import React from 'react';



const killer = [
    {
        id:1,
        image:"https://thenypost.files.wordpress.com/2018/10/gettyimages-1056121808.jpg?quality=90&strip=all&w=618&h=410&crop=1",
        name: 'Michael Myers',
        type: 'humain',
        rating:5,
        price:9000,
        task:'tuer',
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
        task:'torturer',
        location:'Saint-Denis',
        description:'Le sadisme de cet individu vous laissera pantois.',
        quote:'Jouons à un jeu.'
    },

    {
        id:3,
        image:'https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&ved=2ahUKEwjbpe_htcTlAhUBdxoKHU69APUQjRx6BAgBEAQ&url=%2Furl%3Fsa%3Di%26rct%3Dj%26q%3D%26esrc%3Ds%26source%3Dimages%26cd%3D%26ved%3D%26url%3Dhttps%253A%252F%252Fpeople.bfmtv.com%252Fcinema%252Fle-joker-aura-lui-aussi-droit-a-un-film-sur-ses-origines-1240859.html%26psig%3DAOvVaw1VZyIPtoHrsGeP4UmD7flS%26ust%3D1572539862340019&psig=AOvVaw1VZyIPtoHrsGeP4UmD7flS&ust=1572539862340019',
        name:'Joker',
        type:'humain',
        rating:4.7,
        price:5800,
        task:'kidnapper',
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
        task:'harceler',
        location:'Paris',
        description:'Il vous suivra jusque dans votre lit.',
        quote:'Bouh'
    },

    {
        id:5,
        image:"https://www.trickortreatstudios.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/s/e/seed-6.png",
        name:'Chucky',
        type:'monstre',
        rating:1.2,
        price:63,
        task:'coiffer',
        location:'Boulogne-Billancourt',
        description:'Il se coupera les cheveux en quatre pour vous.',
        quote:'Prends ça dans ta gue**, grognasse.'
    },

    {
        id:6,
        image:'https://img.over-blog-kiwi.com/1/18/91/51/20140815/ob_907b65_freddy.jpg',
        name:'Freddy Krueger',
        type:'monstre',
        rating:4,
        price:12,
        task:'garde d\'enfant',
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
        task:'faire le ménage',
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
        task:'faire les courses',
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
        task:'aller chercher les enfants',
        location:'Marne-La-Vallée',
        description:'Il les trouvera tous.',
        quote:'Il flotte...Tu flotteras aussi.'
    },

    {
        id:10,
        image:"https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&ved=2ahUKEwjmq__tvMTlAhWO2BQKHeACDQ8QjRx6BAgBEAQ&url=http%3A%2F%2Fwww.allocine.fr%2Fvideo%2Fplayer_gen_cmedia%3D19431774%26cfilm%3D194194.html&psig=AOvVaw1LC0p5Ka4JYkZ2bP60UBwX&ust=1572541451746753",
        name:'Carrie',
        type:'humain',
        rating:0.1,
        price:8,
        task:'sortir le chien',
        location:'Fontainebleau',
        description:"Elle...a essayé.",
        quote:"Ils me detestent tous. Jamais ils ne se fatiguent de me tourmenter."
    },

]

const KillerList = () => (
    <div>
        {killer.map(killerItem =>(
            <Killer image={killerItem.image} name={killerItem.name} rating={killerItem.rating} description={killerItem.description} quote={killerItem.quote} price={killerItem.pri
        ))
    </div>
)






export default KillerList