/*
write("Uppgift 1:")
let tal1 = +await read("Tal 1: ")
let tal2 = +await read("Tal 2: ")
let tal3 = +await read("Tal 2: ")
function sum3 (tal1: number, tal2: number, tal3: number) {
return tal1 + tal2 + tal3
}
write(sum3(tal1, tal2, tal3))


write ("Uppgift 2:")
let tal1 = +await read("Tal 1: ")
let tal2 = +await read("Tal 2: ")
function dist (tal1: number, tal2: number) {
    if (tal1 >= tal2) {
       return tal1 - tal2
    } else if (tal2 > tal1) {
       return tal2 - tal1
    }
}
write (dist(tal1, tal2))


write("Uppgift 3: ")
let x1 = +await read("x1: ")
let y1 = +await read("y1: ")
let x2 = +await read("x2: ")
let y2 = +await read("y2: ")

function dist2D (x1: number, y1: number, x2: number, y2: number) {
return Math.sqrt((x2-x1)**2 + (y2-y1)**2)
}
write (dist2D(x1, y1, x2, y2))


write("Uppgift 4:")
let tal1 = +await read("Tal 1: ")
let tal2 = +await read("Tal 2: ")
let tal3 = +await read("Tal 2: ")
let tal4 = +await read("Tal 4: ")

function ascending(tal1: number, tal2: number, tal3: number, tal4: number) { 
    if (tal1 <= tal2 && tal2 <= tal3 && tal3 <= tal4) {
       return true;
    } else { 
        return false; 
    } 
}
write(ascending(tal1, tal2, tal3, tal4))


write ("Uppgift 5: ")
let tal1 = +await read("Tal 1: ")
let tal2 = +await read("Tal 2: ")
let tal3 = +await read("Tal 2: ")
let tal4 = +await read("Tal 4: ")

let a = [tal1, tal2, tal3, tal4]
write (a)
function min (tal1:number, tal2:number, tal3:number, tal4:number) {
    if (tal1 <= tal2 && tal1 <=tal3 && tal1<=tal4) { return (tal1)}
    else if (tal2<=tal1 && tal2<=tal3 && tal2<=tal4) { return (tal2)}
    else if (tal3<=tal1 && tal3<=tal2 && tal3<=tal4) { return (tal3)}
    else if (tal4<=tal1 && tal4<=tal3 && tal4<=tal2) { return (tal4)}
}
write(min(tal1, tal2, tal3, tal4))


write ("Uppgift 6: ")
function min(...Antal: number[]):number {
    console.log("manyMoreArgs", Antal);
    let minsta = Antal[0]
    for(let i = 0; i < Antal.length; i++) {
        if(Antal[i] < minsta) {
            minsta = Antal[i]
        }
    }

return minsta
}
 write (min(100, 45, 18, 67, 1, 123123, 0.001))
*/

write ("Uppgift 7: ")
function prod (...Antal: number[]):number {
        console.log("manyMoreArgs", Antal);
        let product = Antal[0]
        console.log(Antal.length)
    for (let i = 1; i < Antal.length; i++) {
        product = product * Antal[i]
        console.log(product)
    }  
    return product
    
}
write(prod(2, 3, 4, 5, 7, 8, 9))

/*
write ("Uppgift 8:")
function includes (a: number,b: number[]) {
for(let i = 0; i < b.length; i++) {
    if(a==b[i]) {return true}
}
return false
}
write(includes (4, [1,2,3,3]))


write ("Upggift 9:")
function visaRepeterat (Ord, Antal:number) {
for (let i = 0; i<Antal; i++) {
write(Ord)
}
}
visaRepeterat("",0)

function visaUppdelat (a:string, b:string) {
    let text = ""
for (let i = 0; i< a.length; i++){
    if (a[i] == b) {
        write (text)
        text = ""
    }else {text += a[i]}
}
write (text)
}
//visaUppdelat ("Hallå-Hallå-Hallå", "-")

function antalMellanslag (a:string) {
    let b = 0
    for (let i = 0; i<a.length; i++) {
        if (a[i] == " ") {b = b + 1}
    }
    return b
} let antal1 = antalMellanslag("Hej på dig")
write (antal1)
*/