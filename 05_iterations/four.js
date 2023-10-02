const myObject = {
    js : "javascript",
    cpp : "c++",
    rb : "ruby"
}


for (const key in myObject) {
//    console.log(`${key} : ${myObject[key]}`);
}

const programming = ["cpp", "js", "py"]

for (const key in programming) {
//    console.log(key);             //--> This will only print the keys of array i.e. 0,1,2 in this case
}

for (const key in programming) {
    // console.log(programming[key]);   
}

const map = new Map()

map.set('IN', "INDIA")
map.set('US', "AMERICA")
map.set('FR', "FRANCE")

for (const key in map) {
   console.log(key);
}
//  The above code will not print anything coz for in loops cannot iterate maps in the same way they iterate Objects


