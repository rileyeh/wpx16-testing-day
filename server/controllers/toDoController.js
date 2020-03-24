let toDos = [
    {
        id: 0, 
        text: 'walk the dog'
    }, 
    {
        id: 1, 
        text: 'take out the trash'
    },
    {
        id: 2, 
        text: 'water plants'
    }, 
    {
        id: 3, 
        text: 'laundry'
    }
]

module.exports = {
    readToDos: (req, res) => res.send(toDos)
}