function add(num1) {
    return num2 => {
        return num1 + num2
    }
}

function doWith(fn) {
    return args => fn(args)
}

function greeter(name) {

    function greetHi(text) {
        return `Hi ${text} ${name}`
    }

    function greetBye(text) {
        return `Bye ${text} ${name}`
    }

    return {
        greetHi,
        greetBye
    }
}



// http://localhost:8080/asdasd/fghgfh/gfhfgh/fghgf

function buildPath(baseUrl) {
     return (...args) => `${baseUrl}/${args.join('/')}`
}

const wallaPath = buildPath("http://www.walla.co.uk")

function toUpper(str) {
    return str.toUpperCase()
}

function spacer(str) {
    return str.split("")
    .map(x => x === "/" ? ` ${x} ` : x)
    .join("")
}

// ..fns

function compose(fn1, fn2, fn3) {
    return arg => fn3(fn2(fn1(arg)))
}

// x ="sd", y = fn1   fn1(arg)
// x = "SD", y = fn2 fn2(arg)

function pipe(...fns) {
    return arg => fns.reduce((fn1, fn2) => fn2(fn1), arg)
}

pipe(wallaPath , spacer, x => console.log(x))("nnnnnnnnnnnnnnnnn")

// x = arg , y = fn1
// x = fn1(arg), y = fn2
// ...

const upperSpacerWalla = compose(wallaPath, toUpper, spacer)

// hello + avi 
// hello avi  + bitter
// hello avi bitter + goos bye

// console.log(["avi", "bitter", "good bye"].reduce((x, y) => `${x} ${y}`, "hello"))

const person = { 
    name: "enosh",
    age: 30,
}

const x = {...person, }

function objMapper(addition) {
    return candidate => Object.entries(candidate).map(([k, v]) => [k, `${v} ${addition}`])
        .reduce((obj, entry) => ({...obj, [entry[0]]: entry[1], }) , {})
}

// console.log(
//     objMapper("df")(person),
//     objMapper(3424)({ car: "toyota", color: "black"})
//     // .reduce((x, y) => ..., )
// )

// x = [k, v] x[0] = k, x[1] = v




// http: / / www.walla.co.uk / links / nba
// curried
// partial application





