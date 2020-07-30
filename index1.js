
const casa =  "./icons/casa.svg"
const certo = "./icons/certo.svg"
const chave = "./icons/chave.svg"
const coracao = "./icons/coracao.svg"
const info = "./icons/info.svg"
const internet = "./icons/internet.svg"
const pare = "./icons/pare.svg"
const relogio = "./icons/relogio.svg"
const carta = "./icons/card.png"


let deck =[]    
let storage = []        //armazena para comparação dos cards
let numberId =[]        //armaze as ids que vão sofrer alterações
let noCanRepeat = []
let bexecute = false   //criado para evitar que a função "execute" seja executa varias vezes         


var ids =[
    {
        id:1,
        deck:casa,
        visual:carta,
    },
    {
        id:2,
        deck:certo,
        visual:carta
    },
    {
        id:3,
        deck:chave,
        visual:carta
    },
    {
        id:4,
        deck:coracao,
        visual:carta
    },
    {
        id:5,
        deck:info,
        visual:carta
    },
    {
        id:6,
        deck:internet,
        visual:carta
    },
    {
        id:7,
        deck:pare,
        visual:carta
    },
    {
        id:8,
        deck:relogio,
        visual:carta
    }

]

function randomIcon(index){


    return index[Math.floor(Math.random() * index.length)]
}

function randomID(n){
    return n[Math.floor(Math.random() * n.length)]
    }


function deckCreate(ids){                                   //Ele aleatoriza os cards em diferentes posições
    let index = [0,1,2,3,4,5,6,7]
    let id = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
    
for(i=0;i<8;i++){
    
let id1 = randomID(id)
let id2 = randomID(id)
    
    while(id1===id2){   //Hotfix para não causar repetição observação:If tava dando bug
        id2=randomID(id)
    }

    let indexIcon = randomIcon(index)   //criei para usar como parametro no splice abaixo
    var icon1 = ids[indexIcon].deck
    
   
    id.splice(id.indexOf(id1), 1)
    id.splice(id.indexOf(id2), 1);
    index.splice(index.indexOf(indexIcon), 1);  //Este splice

   insert(id1,id2,icon1)

}
}

function insert(id1,id2,icon1){                                 
    
this.span1= document.getElementById(id1)
this.span2= document.getElementById(id2)

span1.src = carta
span2.src = carta



deckList(id1,id2,icon1,carta)

}

function deckList(id1,id2,icon1,carta,){
        let set = [id1,id2,icon1,carta]     
        deck.push(set)

    }
function cancelRepeat(cardVerify){                                      //evitar que cartas que ja foram descobertas sejam usadas denovo
        
        let test = noCanRepeat.filter(function(elem,i,array){
            return elem===cardVerify
        })


        if(test.length>0){
            return true
        }
        else{
            return false
        }
    }

function execute(n){  

    if(bexecute==true){
        return
    }
    
    this.n = n

    let span =document.getElementById(n)

    let card = deck.filter(function(elem,i,array){
        return elem[0]===n || elem[1]===n   
    })
    let filterId = numberId.filter(function(elem,i,array){
        return elem===n
    })
    if(filterId.length>0){
        return;
    }

    this.cardVerify = card[0][2]

    span.src = cardVerify
    
    var test = cancelRepeat(cardVerify)

    
    if(test===false){
        numberId.push(n)
        storage.push(cardVerify)
        countClick(storage)
    
    }
    
}  

function countClick(storage){
     
    if(storage.length===2){
        bexecute=true
        verif(storage)
        }
    }

function verif(storage){
    
    if(storage[0]===storage[1]){
        noCanRepeat.push(storage[0])

        storage.splice(0,1)
        storage.splice(0,1)
        bexecute=false
        numberId = []
    }

        else{

        storage.splice(0,1)
        storage.splice(0,1)

        var span =document.getElementById(numberId[0])
        var span1 = document.getElementById(numberId[1])

        setTimeout(function(){
            span.src = carta
            span1.src = carta
            bexecute=false
        },1500)

        numberId = []   
        }

}

deckCreate(ids)

















