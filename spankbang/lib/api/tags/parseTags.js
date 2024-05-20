const parseTags = ($,tag) =>{
    const $data = $(tag)
    const name = $data.text()
    return name
}
module.exports = parseTags