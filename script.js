// const clock=document.querySelector("#clock")
// clock.innerHTML=new Date()

// const clock=document.querySelector("#clock")
// clock.innerHTML=new Date().getHours()

// const clock=document.querySelector("#clock")
// clock.innerHTML=new Date().getMinutes()

// const clock=document.querySelector("#clock")
// clock.innerHTML=new Date().getSeconds()

const hours=document.querySelector("#hours")
const minutes=document.querySelector("#minutes")
const seconds=document.querySelector("#seconds")
const section=document.querySelector("#section")
hours.innerHTML=new Date().getHours()
minutes.innerHTML=new Date().getMinutes()
seconds.innerHTML=new Date().getSeconds()

// let displayTime=()=>{
// hours.innerHTML=new Date().getHours()
// minutes.innerHTML=new Date().getMinutes()
// seconds.innerHTML=new Date().getSeconds()
// }
// setInterval(displayTime,1000)

let displayTime=()=>{
    let hrs=new Date().getHours()
    let mins=new Date().getMinutes()
    let sec=new Date().getSeconds()
    if(hrs>=12){
        section.innerHTML="PM"
    }else{
        section.innerHTML="AM"
    }
    if(hrs>12){
        hrs=hrs-12
    }
    if(sec<10){
        sec='0'+sec
    }
    if(mins<10){
        mins='0'+mins
    }
    if(hrs<10){
        hrs='0'+hrs
    }
    hours.innerHTML=hrs
    minutes.innerHTML=mins
    seconds.innerHTML=sec

}
setInterval(displayTime,1000)