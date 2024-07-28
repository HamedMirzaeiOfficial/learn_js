export function generateElement(tagName, attributes, ...childs) {
    const element = document.createElement(tagName);
    
    if (attributes) {
        Object.keys(attributes).forEach(key => {
            element.setAttribute(key, attributes[key]);
        });
    }
    
    if (childs) {
        childs.forEach(child => {
            if (typeof child === 'string') {
                element.appendChild(document.createTextNode(child));
            } else {
                element.appendChild(child);
            }
        });
    }
    
    return element;
}

