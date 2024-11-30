
document.getElementById('urlap').onsubmit=
    // ()=>{'}
    function (event){
        event.preventDefault()
        let oldalak= event.target.elements
        console.log(oldalak.aoldal.value)
        let a = Number(oldalak.aoldal.value)
        let b = Number(oldalak.boldal.value)
        let c = Number(oldalak.coldal.value)
        let s = (a+b+c)/2
        let t=Math.sqrt(s*(s-a)*(s-b)*(s-c))
        console.log("Terület: ", t)

        document.getElementById('terulet').innerHTML=t+" cm<sup>2</sup>"
        oldalak.aoldal.value=""
        oldalak.boldal.value=""
        oldalak.coldal.value=""
    }    
