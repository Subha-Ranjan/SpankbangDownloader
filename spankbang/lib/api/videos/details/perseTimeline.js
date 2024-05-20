const parseTimeline = ($, position) => {
    const $data = $(position)
    const image = $data.find('div span img.lazyload').attr('data-src')
    const dataTime = $data.find('strong').text()
    const parts = dataTime.split(':')
    let hh = 0, mm = 0, ss = 0

    if (parts.length === 3) {
        hh = parseInt(parts[0])
        mm = parseInt(parts[1])
        ss = parseInt(parts[2])
    } else if(parts.length === 2) {
        mm = parseInt(parts[0])
        ss = parseInt(parts[1])
    }else if (parts.length === 1){
        ss = parseInt(parts[0])
    }
    const timeStamp = hh * 3600 + mm * 60 + ss
    return {
        image,
        timeStamp,
    }


}

module.exports = parseTimeline