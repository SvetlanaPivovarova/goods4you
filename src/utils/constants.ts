import image from "./../assets/sneakers.jpg"

export const categories = [
    {name: 'smartphones', id: 1},
    {name: 'laptops', id: 2},
    {name: 'sneakers', id: 3},
    {name: 'sneakers', id: 4},
    {name: 'sneakers', id: 5},
    {name: 'sneakers', id: 6},
    {name: 'sneakers', id: 7},
    {name: 'sneakers', id: 8},
]

export const product = {
    imageSrc: image,
    name: 'Nike Air Force 1 \'07 QS',
    price: '110 $',
    typeOfProduct: 'Sneakers'
}


function getItems(n: number) {
    const res = []
    for (let i = 0; i < n; i++) {
        res.push({id: i, name: 'sneakers'})
    }
    return res
}

export const items = getItems(22)