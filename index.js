//document.getElementById("count-el").innerText=5
//count1=50
let saveEl=document.getElementById("save-el")
let countEl=document.getElementById("count-el")
let count=0

//console.log(count)
function increment()
{
    count+=1
    //console.log(count)
    countEl.innerText=count

}



//console.log(saveEl)

function save()
{
    let s=count+"-"
    saveEl.textContent+=s
    count=0
    countEl.innerText=count
    //console.log()
}





