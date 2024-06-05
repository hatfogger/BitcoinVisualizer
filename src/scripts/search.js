const input = document.getElementById("search-bar")
input.addEventListener("mouseenter",()=>{
    gsap.to(input,{scale:"1.2",duration:0.2})    
})
input.addEventListener("mouseleave",()=>{
    gsap.to(input,{scale:"1",duration:0.5})    
})

input.onkeyup = function(e){
    var KeyCode = e.code|| e.key;
    if (KeyCode == 'Enter'){
        console.log("enter removed");
        input.blur();
        // input.style.background = "#111111"
    }
    else{
        console.log("input keyup: not registered")
    }
}
input.onkeydown = function(e){

    var KeyCode = e.code || e.key;
    if (KeyCode =='Enter'){
        var search_height = Number(input.value);
        
        if(document.getElementById("popup")!=undefined){
                const existing_popup = document.getElementById("popup")
                body.removeChild(existing_popup)    
        }
        const popup = document.createElement("div")
        popup.id = "popup"
        const cut_button = document.createElement("button")
        cut_button.id = "button1"
        cut_button.textContent = "╳"
        cut_button.addEventListener("click",()=>{
                body.removeChild(popup)
        })
        cut_button.addEventListener("mousedown",()=>{
                gsap.to(cut_button,{scale:"0.9",duration:"0.5",background:"black"})
        })
        cut_button.addEventListener("mouseleave",()=>{
                gsap.to(cut_button,{scale:"1",background:"#ff3f3f00"})
        })
        
        // input.value =""
        
        if(latest_block_height==undefined){
            console.log("please wait for data to load")
        }
        else{
            if(search_height <=latest_block_height && search_height>=0){
                if(blocks[search_height]!=undefined){
                    //fine
                    var block_info = blocks[search_height]["blocks"][0]
                    var main_container = popup_maker(block_info)
                    popup.innerHTML = ""
                    const raw_json_button = document.createElement("button")
                    raw_json_button.id = "raw_json_button"
                    raw_json_button.textContent = "get raw json"
                    raw_json_button.addEventListener("mousedown",()=>{
                        gsap.to(raw_json_button,{scale:"0.9",duration:"0.5",background:"#53B9E4"})
                    })
                    raw_json_button.addEventListener("mouseleave",()=>{
                        gsap.to(raw_json_button,{scale:"1",background:"#408cbe"})
                    })
                    // console.log(get_raw_json_button)
                    popup.append(raw_json_button)
                    raw_json_button.addEventListener("click",()=>{
                    // console.log(data)
                        var string_json = JSON.stringify(blocks[search_height],null,2)
                        var new_page = window.open()
                        new_page.document.open()
                        new_page.document.title = search_height +" raw json"
                        new_page.document.write("<pre>"+string_json+"<pre>")
                        new_page.document.close()
                    // new_page.focus()
                    })
                    popup.appendChild(cut_button)
                    popup.appendChild(main_container)

                    gsap.from(popup,{height:"0vh",
                        minWidth:"0vw", 
                        background: "#fffffffd",
                        opacity:"0",
                        background: "#fffffffd"
                    })

                    body.appendChild(popup)
                    
                    gsap.to(popup,{ 
                                height: "70vh",
                                // minWidth: "80vw",
                                top:"10vh",
                                // minWidth:"80vw",
                                width:"80vw",
                                background: "#4a81f7fd",
                                duration:0.44
                    })
                    // console.log("searched block is loaded already")
                    
                }
                
            
                else{
                    const text = document.createElement("div")
                    text.textContent = "loading content...."
                    text.style.fontSize = "5vh"    
                    text.style.marginLeft = "2vh"
                    text.style.marginTop = "2vh"
                    
                    popup.appendChild(text)
                    popup.appendChild(cut_button)

                    body.appendChild(popup)
                    gsap.from(popup,{height:"0vh",
                        minWidth:"0vw", 
                        background: "#fffffffd",
                        opacity:"0",
                        background: "#fffffffd"
                    })

                    body.appendChild(popup)
                    
                    gsap.to(popup,{ 
                                height: "70vh",
                                // minWidth: "80vw",
                                top:"10vh",
                                // minWidth:"80vw",
                                width:"80vw",
                                background: "#4a81f7fd",
                                duration:0.44
                    })
                    const raw_json_button = document.createElement("button")
                    raw_json_button.id = "raw_json_button"
                    raw_json_button.textContent = "get raw json"
                    raw_json_button.addEventListener("mousedown",()=>{
                        gsap.to(raw_json_button,{scale:"0.9",duration:"0.5",background:"#53B9E4"})
                    })
                    raw_json_button.addEventListener("mouseleave",()=>{
                        gsap.to(raw_json_button,{scale:"1",background:"#408cbe"})
                    })
                    
                    raw_json_button.addEventListener("click",()=>{
                    
                        var string_json = JSON.stringify(blocks[search_height],null,2)
                        var new_page = window.open()
                        new_page.document.open()
                        new_page.document.title = search_height +" raw json"
                        new_page.document.write("<pre>"+string_json+"<pre>")
                        new_page.document.close()
                    
                    })
                
                    var info = block_fetching(search_height).then(data=>{
                        blocks[search_height] = data
                        popup.removeChild(text)
                        popup.append(raw_json_button)
                        raw_json_button.addEventListener("click",()=>{
                    
                            var string_json = JSON.stringify(blocks[search_height],null,2)
                            var new_page = window.open()
                            new_page.document.open()
                            new_page.document.title = search_height +" raw json"
                            new_page.document.write("<pre>"+string_json+"<pre>")
                            new_page.document.close()
                   
                        })
                    
                    var block_info = data["blocks"][0]
                    var main_container = popup_maker(block_info)
                    popup.appendChild(main_container)
                    console.log(data)

                    })
                }
        // }            console.log(latest_block_height)
            }
            else{
                // console.log( Number(e))
                alert("invalid block height")
            }
        }
    }   
}
function getInput(e){
    console.log(e.value)
}
// console.log(input.value)