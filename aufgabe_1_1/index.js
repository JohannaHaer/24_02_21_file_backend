import fs from 'fs'

fs.writeFile('./blog1.txt', 'Ich bin ein Webdeveloper', (err) => {
    if(err) {
        throw err
    }
    console.log("geändert");
})

fs.writeFile('./blog2.txt', 'Irgendein Text', (err) => {
    if(err) {
        throw err
    }
    console.log("geändert");
})

fs.access('./assets', fs.constants.F_OK, (err) => {
    if(err) {
        console.log("Ordner existiert nicht");
        fs.mkdir('./assets', (err) => {
            if(err) {
                console.log("Ordner wurde nicht erstellt");
            }
            console.log("Ordner wurde erstellt");
        })
    }
    else {
        fs.rmdir('./assets', (err) => {
            if(err) {
                console.log("Ordner wurde nicht gelöscht");
            }
            console.log("Ordner wurde gelöscht");
        })
    }
})

fs.access('./delete.txt', fs.constants.F_OK, (err) => {
    if(err) {
        console.log("delete Datei existiert nicht");
        fs.writeFile('./delete.txt', "irgendwas", (err) => {
            if(err) {
                console.log("delete Datei wurde nicht erstellt");
            }
            console.log("delete Datei existiert");
        })
    }
    else {
        fs.unlink('./delete.txt', (err) => {
            if(err) {
                console.log("Datei wurde nicht gelöscht");
            }
            console.log("Datei wurde gelöscht");
        })
    }
})