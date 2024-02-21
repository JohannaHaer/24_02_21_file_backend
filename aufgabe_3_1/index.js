import fs from 'fs'

fs.mkdir('./assets', (err) => {
    if(err) {
        console.log("Ordner konnte nicht erstellt werden");
    }
    console.log("Ordner wurde erstellt");
    erstellen("Wie gehts")
})

const erstellen = (el) => {
    fs.access('./assets/datei.txt', (err) => {
        if(err) {
            console.log("Datei exisitert nicht");
            fs.writeFile('./assets/datei.txt', `${el} \n`, (err) => {
                if(err) {
                    console.log("Datei konnte nicht erstellt werden");
                }
                console.log("Datei wurde erstellt");
            })
        }
        else {
            fs.writeFile('./assets/datei.txt', `${el} \n`, {flag: 'a'}, (err) => {
                if(err) {
                    console.log("Datei konnte nicht erweitert werden");
                }
                console.log("Datei wurde erweitert");
            })
        }
    })
}

