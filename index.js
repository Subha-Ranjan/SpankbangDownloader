const app = require('express')()

const spankbang = require("./spankbang")

// async function callApi(){
//     const url = "https://spankbang.com/7slau/video/new+sensations+my+girlfriend+calls+me+while+she+s+fucking+bbc+alyx+star";
//     const details = await spankbang.videos.details({url});
//     console.log(details)
// }

app.get("/", async(req,res)=>{
    const url = "https://spankbang.com/7slau/video/new+sensations+my+girlfriend+calls+me+while+she+s+fucking+bbc+alyx+star";
    const details = await spankbang.videos.details({url});
    res.send(details);
})
app.listen(8000,()=>{
    console.log("Server started at 8000"); 
})
