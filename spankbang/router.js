const express = require("express");
const router = express.Router();

const xvideos = require("xvideosx");
const spankbang = require("spankbang");

const { PornHub } = require("pornhub.js");
const pornhub = new PornHub();

var m3u8ToMp4 = require("m3u8-to-mp4");
var converter = new m3u8ToMp4();
const ffmpegPath = require("@ffmpeg-installer/ffmpeg").path;
const ffmpeg = require("fluent-ffmpeg");
ffmpeg.setFfmpegPath(ffmpegPath);

router.get("/", (req, res) => {
  res.send("API working fine");
});

router.post("/", async (req, res) => {
  const url = await req.body.link;
  if (url.includes("xvideos")) {
      console.log("Xvideos API calling");
      const details = await xvideos.videos.details({ url });
      let videoDetails = { platform:' Xvideos', title:details.title, image:details.image, duration:details.duration, files:[{quality: '240p', url:details.files.low}, {quality:'360p', url:details.files.high}]};
  
     console.log(videoDetails);
  
  res.send(videoDetails);}

  // else if (url.includes("spankbang")) {
  //     console.log("Spankbang API calling");
  //     const details = await spankbang.videos.details({ url });
  //     let videoDetails = { platform:' Spankbang',title:details.name, duration:details.duration,image:details.thumbNail, files: [...details.files]};
  //     // videoDetails=videoDetails.filter(a=> a.quality!=='hls' && a.url !=='')
  //     console.log(details)
  //     res.send("Spank");
  //   } 
  //   else {
  //     res.send("Invalid Link");
  //   }

  

   if (url.includes("pornhub")) {
    console.log("Pornhub API calling");
    let files = [];
    pornhub
      .video(url)
      .then((data) => {
        data.mediaDefinitions.map((file) => {
          files.push({
            url: file.videoUrl.replace(/\\/g, ""),
            quality: file.quality+"p",
          });
        });
        videoDetails={ platform:' PornHub', title:data.title, duration:data.duration,image:data.thumb, files: [...files]};
        console.log(videoDetails);
        res.send(data);
      })
      .catch((err) => console.log("So there is some error: \n", err));
  } 
  //   else if (url.includes("xvideos")) {
  //   console.log("Xvideos API calling");
  //   const details = await xvideos.videos.details({ url });
  //   let videoDetails = { platform:' Xvideos', title:details.title, image:details.image, duration:details.duration, files:[{quality: '240p', url:details.files.low}, {quality:'360p', url:details.files.high}]};

  //   console.log(details);
  //   res.send("Xv");
  // }
   else if (url.includes("spankbang")) {
    console.log("Spankbang API calling");
    const details = await spankbang.videos.details({ url });
    let videoDetails = { platform:' Spankbang',title:details.name, duration:details.duration,image:details.thumbNail, files: [...details.files]};
    
    console.log(details)
    res.send(videoDetails);
  } 
  // else {
  //   res.send("Invalid Link");
  // }
});

module.exports = router;
