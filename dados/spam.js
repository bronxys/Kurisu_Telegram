const usedCommandRecently = new Set()

const isFiltered = (from) => !!usedCommandRecently.has(from)
const addFilter = (from, time) => {
usedCommandRecently.add(from)
setTimeout(() => usedCommandRecently.delete(from), time*1000) }

module.exports = {isFiltered, addFilter}
