window.addEventListener('load',()=>{
    document.getElementById('button-idea').addEventListener('click',()=>{
        let ideaLog = document.getElementById('idea').value;
        console.log(ideaLog);
        // creating the object 
        let obj = {"ideaDesc" : ideaLog};

        // stringyfying the obj., it can repass it into json????
        let jsonData = JSON.stringify(obj);

        fetch('/ideaLog',{
            method: 'POST',
            headers: {
                "Content-type": "application/json"
            },
            body: jsonData
        })
        .then(response => response.json())
        .then(data => {console.log(data);})
        // ene jsonData gtsn baigaa ni let geed tern deeree json stringyfy hiij baigaa ni chuhal  
    })

    document.getElementById('get-tracker').addEventListener('click', ()=> {
        fetch('/getidea')
        .then(resp=> resp.json())
        .then(data => {
            document.getElementById('ideainfo').textContent = '';
            console.log(data.data);
            for(let i=0; i < data.data.length; i++){
                let string = data.data[i].date + ' : ' + data.data[i].idea;
                let elt = document.createElement('p');
                elt.textContent = string;
                document.getElementById('ideainfo').appendChild(elt);
            }
        })
        // ene deer baigaa ymnuudiig specially fetchiig tavinguut nuguu data ni console log deer graj irj baigaa ym bn prob because of ene data.data gtsn ym
    })
})

// fetch gdg ym hiih post ni bolhooroo medeelel hadgalah zorilgotoi??