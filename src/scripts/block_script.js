
// first_blocks()
var block_main = document.getElementById("blocks_main_1")
let isDown = false;
let startX;
let scrollleft;


block_main.addEventListener('mousedown',(e) =>{
    isDown = true;
    startX = e.pageX - block_main.offsetLeft
    scrollleft = block_main.scrollLeft
})

block_main.addEventListener('mouseleave',() =>{
    isDown = false
})

block_main.addEventListener('mouseup',() =>{
    isDown = false
})

block_main.addEventListener('mousemove',(e) =>{
    if(!isDown){ return;}
    e.preventDefault()    
    const x = e.pageX - block_main.offsetLeft
    const walk = x - startX
    block_main.scrollLeft = scrollleft - walk
    
})

async function latest_block_fetching(){
    var block_height = await fetch("https://api.allorigins.win/get?url=https://blockchain.info/latestblock")
    var block_info = await block_height.json()
    // console.log(block_info[""])
    var stuff = JSON.parse(block_info["contents"])
    // console.log(block_info)
    // console.log(block_info.contents)
    console.log(stuff["hash"])
    // for (const key in block_info["contents"]){
    //     console.log(key)
    // }
    return stuff["height"]   
}

// console.log(latest_block_height)
async function block_fetching(block_height){
    // var block_hash = "00000000000000000002cb1c80ef783f6445a4e6a5ae5bbcfa4ff1d693bc6985"
    var api_url = "https://crossorigin.me/https://blockchain.info/block-height/"+block_height+"?format=json"
    console.log(api_url)
    const api_key = "eyJhbGciOiJFUzI1NiIsInR5cCI6IkFQSSJ9.eyJhdWQiOiJtZXJjdXJ5IiwidWlkIjoiY2FiNmEyYTgtMmNkYi00NzExLWE4NTctNDhjNmQxYzEwZDQ2IiwiaXNzIjoiYmxvY2tjaGFpbiIsInJkbyI6ZmFsc2UsImlhdCI6MTcxNzIxODY3OCwianRpIjoiMzA1NGJiYjYtYmNhNy00YmQ3LWE1MzEtNWQ0MTUyZTZkMDUwIiwic2VxIjo2OTY5MjQ0LCJ3ZGwiOnRydWV9.Hx1h1wcVpmHTRG/55atLSOk7Lh0uS1fdP7/N6EGVh379L6q3Qjrpp8Wvc+A1QLhaur6AU/ms0V+cvWMPpz5fePQ="    
    var headers = {"Authorization":"Bearer"+api_key}
    fetch(api_url,headers).then(result =>{
        console.log(result)
    })
    
}

var blocks ={}
var blocks_info = []
first_blocks()
var previous_block_height = 0
var latest_block_height;
// console.log(latest_block_height)
async function first_blocks(){
        // console.log("starting to add")
        var latest_block_height = await latest_block_fetching()
        console.log("latest block height: "+ latest_block_height)

        previous_block_height = latest_block_height
        for (var i=1;i<9;i++){

            const text_stuff = document.createElement("div");
            text_stuff.className = "block_heights"
            text_stuff.textContent = previous_block_height
            
            // blocks_info.push(block_fetching(previous_block_height))
            const current_block = document.getElementById(i)
            current_block.innerHTML = ""
            current_block.appendChild(text_stuff)
            current_block.id = previous_block_height
            previous_block_height -=1
        }
        // checking_to_add_eventlisteners()
        
    }
console.log("previous block height: ",previous_block_height)
block_main.addEventListener("scroll",insert_Blocks);

// var previous_block_height = first_blocks()
function insert_Blocks(){
    // console.log(blocks_for_animation.length)
    var scroll_left = block_main.scrollLeft
    var scroll_width = block_main.scrollWidth
    var diff = scroll_width - scroll_left
    var width = block_main.clientWidth
    console.log(scroll_left,scroll_width)
    if(diff<3000){
        // var temp = blocks[blocks.length -1]+1
        // var newBlockID = temp
        const newBlock = document.createElement("block")
        newBlock.id = previous_block_height
        const block_height = previous_block_height
        previous_block_height -=1
        console.log(previous_block_height)
        // var info = block_fetching(block_height)      
        // previous_block_height-=1
        const text_stuff = document.createElement("div")
        text_stuff.className = "block_heights"
        text_stuff.textContent = block_height 
        console.log(text_stuff.textContent)
        newBlock.appendChild(text_stuff)
        
        // blocks[blocks.length] = "!23"
        // blocks_info.push(block_fetching(block_height))
        newBlock.className = "Block"
        block_main.appendChild(newBlock)

        let blocks_total = document.getElementsByClassName("block")
        console.log(blocks_total)
        adding_event_listeners()
        // adding_event_listeners()
    }
    // console.log(scroll_width + " " + scroll_left + " "+ diff)
}
