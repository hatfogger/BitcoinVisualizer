const cut_button = document.createElement("button")
cut_button.id = "button1"
cut_button.textContent = "╳"
cut_button.addEventListener("click",()=>{
    body.removeChild(popup)
})
cut_button.addEventListener("mousedown",()=>{
    gsap.to(cut_button,{scale:"0.9",duration:0.1,background:"black"})
})
cut_button.addEventListener("mouseup",()=>{
    gsap.to(cut_button,{scale:"1",background:"#ff3f3f00"})
})
cut_button.addEventListener("mouseleave",()=>{
    gsap.to(cut_button,{scale:"1",background:"#ff3f3f00"})
})

const get_raw_json_button = document.createElement("button")
get_raw_json_button.id = "raw_json_button"
get_raw_json_button.textContent = "get raw json"
get_raw_json_button.addEventListener("mousedown",()=>{
    gsap.to(get_raw_json_button,{scale:"0.9",duration:0.5,background:"#53B9E4"})
})
get_raw_json_button.addEventListener("mouseleave",()=>{
    gsap.to(get_raw_json_button,{scale:"1",background:"#408cbe"})
})
get_raw_json_button.addEventListener("mouseup",()=>{
    gsap.to(get_raw_json_button,{scale:"1",background:"#408cbe"})
})
