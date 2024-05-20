const parseDuration = ($) =>{
    const data = $('#player_wrapper_outer .play_cover .i-length:nth-child(1)')
    const duration = data.text()
    return duration

}
module.exports = parseDuration