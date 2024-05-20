const parsePositions = ($, position) => {
    const data = $(position)
    const name = data.text()
    const stringTime = data.attr('data-timestamp')
    const timeStamp = parseInt(stringTime)
    return {
        name,
        timeStamp
    }
}

module.exports = parsePositions