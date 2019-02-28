var router = require('express').Router();
const axios = require('axios');

router.get('/', function (req,res) {
    
    let price = req.query.price;
    let location = req.query.location;

    let apiUrl = 'https://api.yelp.com/v3/businesses/search?open_now=true';

    const getRestaurants = async () => {
        axios.get(apiUrl,{ 'headers': { 'Authorization': 'Bearer tzeTYPvBPVrSZOfHHaHbLfxSVyhL1JUX0xj3N6RWC-lGTv9Q89Px3Bfm7snAxY5Og4KiNYhmfD7O3lD_XJhDnAFbLSIbUmrZfmeAdaWxCgh-WH64aXHa8NKUm-J2XHYx' }, 'params': {'price': price, 'location': location} })
            .then((response) => {
                let all = response.data.businesses
                let min = 0;
                let max = all.length;
                let i = Math.floor(Math.random() * (max - min)) + min;
                res.status(200).json({response:all[i]});
            })
            .catch((error) => {
                res.status(500).json({error:err})
                console.log(error);
            })
    }
    
    getRestaurants();
});

module.exports = router;