const parsePages = ($,pages)=>{
    const data = $(pages)
    const page = data.find('a').text()
    return page
}

module.exports = parsePages