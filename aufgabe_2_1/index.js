import fs from 'fs'


fs.readFile('./data.json', {encoding: 'utf-8'}, (err, data) => {
    if(err) {
        throw err
    }
    const array = JSON.parse(data)
    array.forEach(element => {
        fs.writeFile('./data.txt', `${element.id} - ${element.title} \n ${element.description} \n`, {flag:'a'}, (err) => {
            if(err){
                throw err
            }
            console.log("txt erstellt");
        })
    })
})
