const gameBlock = document.getElementById("gameBlock")

const hiddenNumbers = [0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7]
const shuffledArr = JSON.parse(localStorage.getItem("shuffledArr")) || shuffle(hiddenNumbers)
let openedCards=[]

const startTime = new Date()
const history = []

function shuffle(arr){
    const shuffledArr=[]
    for(let i = 0; i < 16; i++){
        let randomIndex = Math.floor(hiddenNumbers.length * Math.random())
        shuffledArr.push(hiddenNumbers[randomIndex])
        hiddenNumbers.splice(randomIndex,1)
    }
    localStorage.setItem("shuffledArr", JSON.stringify(shuffledArr))
    return shuffledArr;
}


function fillCards(arr){
    for(let i = 0; i < shuffledArr.length; i++){
        let span = document.createElement("span")        
        span.innerHTML = shuffledArr[i]
        span.setAttribute("data-index",shuffledArr[i] )
        gameBlock.children[i].append(span)
    }
}

fillCards(shuffledArr)

function hideCards(){
    for(let cards of gameBlock.children){
        cards.firstChild.hidden = true;
    }
}
setTimeout( hideCards, 1000)

gameBlock.addEventListener("click", function(e){
    console.log(gameBlock.children);
    
    const index = e.target.firstChild.dataset.index
    openedCards.push(index)
    e.target.firstChild.hidden = false

    if(openedCards.length === 2 && openedCards[0] === openedCards[1]){
        for(let card of gameBlock.children){
            if(card.firstChild.dataset.index === index){
                setTimeout(()=>(card.firstChild.remove(),  card.classList.add("removed")), 500)
               
                checkGameOver()
            }
        }
        openedCards = []
    }

    if(openedCards.length === 2 && openedCards[0] !== openedCards[1]){
        setTimeout(hideCards,500)
        openedCards = []
    }
    
   
})

function checkGameOver(){
    const cards = Array.from(gameBlock.children)
    const isOver = cards.every(card => card.classList.contains("removed"))
    if(isOver){
        setGameData()
        localStorage.removeItem("shuffledArr")
        window.location.href = "../game-over/index.html"
    }
}

function setGameData(){
    gameInfo = {
        id: Math.random() * 1000,
        elapsedTime: elapsedTime()
    }
    history.push(gameInfo)
    localStorage.setItem("history", JSON,stringify(history))
}

function elapsedTime(){
    endTime = new Date()
    elapsed =( endTime - startTime)/1000/60
    return elapsed
}