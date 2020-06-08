const axios = require('axios');

module.exports = (app)=>{
    try {
        app.post('/api/google/search', async(req,res)=>{
            console.log('searching....')
        const {data} = await axios.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=AIzaSyBCikoA8ksw5bkOF7CpOMW26-iN3dOwPLE&location=34.0157309,-118.5015921&radius=5000&keyword=bar`)
       res.json(data.results)
    }) 
    }catch(err){
        console.log(err)
    }
   
}