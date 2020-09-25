function api(type) {

    return id => {

        function _simple() {
            const e = document.createElement(type)
            e.id = id
            return e
        }

        function createText(text) {
            const e = _simple()
            e.appendChild(document.createTextNode(text))
            return e
        }

        function createStyle(style) {
            const e = _simple()
            Object.entries(style).forEach(([k, v]) => e.style[k] = v)
            return e
        }

        function create(text) {
            return style => {
                const e = createStyle(style)
                e.appendChild(document.createTextNode(text))
                return e
            }
        }

        return {
            createText,
            createStyle,
            create
        }
    }

}

function pipe(...fns) {
    return arg => fns.reduce((ret, fn2) => fn2(ret), arg)
}


function create(type) {
    return document.createElement(type)
}

function addText(text) {
    return e => {
        e.appendChild(document.createTextNode(text))
        return e
    }
}

function addStyle(style) {
    return e => {
        Object.entries(style).forEach(([k, v]) => e.style[k] = v)
        return e
    }
}

const div = pipe(
    create, 
    addText("sdfsd"), 
    addStyle({ padding: '3rem', color: 'blue'})
)("div")



document.body.appendChild(div)