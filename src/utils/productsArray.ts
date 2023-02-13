type Product = {
    id: number
    title: string
    description: string
    type: string
    capacity: string
    price: number
    image: string
}

const productsArray:Product[] = [
    {
        id: 1,
        title: 'iPhone 14 Pro',
        description: '<div class="article"><p class="red">This is iPhone 14 Pro</p></div>',
        type: 'phone',
        capacity: '256',
        price: 2000,
        image: '/images/iphone-purple.jpg',
    },
    {
        id: 2,
        title: 'iPhone 13 Pro',
        description: 'This is iPhone 13 Pro',
        type: 'phone',
        capacity: '128',
        price: 1500,
        image: '/images/iphone-gold.jpg',
    },
    {
        id: 3,
        title: 'iPhone 12 Pro',
        description: 'This is iPhone 12 Pro',
        type: 'phone',
        capacity: '512',
        price: 1000,
        image: '/images/iphone-silver.jpg',
    },
    {
        id: 4,
        title: 'iPhone 11 Pro',
        description: 'This is iPhone 11 Pro',
        type: 'phone',
        capacity: '128',
        price: 500,
        image: '/images/iphone-blue.jpg',
    },
    {
        id: 5,
        title: 'iPhone 8 Plus',
        description: 'This is iPhone 8 Plus',
        type: 'phone',
        capacity: '128',
        price: 500,
        image: '/images/iphone-green.jpg',
    },
    {
        id: 6,
        title: 'iPhone X',
        description: 'This is iPhone X',
        type: 'phone',
        capacity: '64',
        price: 500,
        image: '/images/iphone-black.jpg',
    },
]

export default productsArray