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
       write ("True")
       return true;
    } else { 
        write ("False")
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
    if (tal1 <= tal2 && tal1 <=tal3 && tal1<=tal4) { return write(tal1)}
    else if (tal2<=tal1 && tal2<=tal3 && tal2<=tal4) { return write(tal2)}
    else if (tal3<=tal1 && tal3<=tal2 && tal3<=tal4) { return write(tal3)}
    else if (tal4<=tal1 && tal4<=tal3 && tal4<=tal2) { return write(tal4)}
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
 write (min(100, 45, 18, 67))
*/

write ("Uppgift 7: ")
function prod (...Antal: number[]):number {
        console.log("manyMoreArgs", Antal);
        let product = Antal[0]
        console.log(Antal.length)
    for (let i = 1; i < Antal.length; i++) {
        console.log(product)
        product = product * Antal[i]
    }  
    return product
    
}
write(prod(2,3,4, 5, 7, 8))