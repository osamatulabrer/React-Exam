

function getImage(name){
    return new URL(name,import.meta.url).href;
}

export {getImage}