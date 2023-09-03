import Jackets from '../Assets/Jackets.avif'
import Dresses from '../Assets/Dresses.avif'
import Sweats from '../Assets/Sweats.avif'
import Flashy from '../Assets/flashy-fashion.avif'


const clothingData = 
[
    {
        id: 1,
        image: Jackets,
        image2: Sweats,
        title: "Red T-Shirt",
        catagorie: "jackets",
        price: "$19.99",
        description: "This comfortable and stylish t-shirt is made from 100% cotton and is perfect for casual wear.",
        size: ["S", "M", "L"],
        details: ["Crewneck", "short sleeves"],
        style: "#RT945122"
    },
    {
        id: 2,
        image: Dresses,
        image2: Jackets,
        title: "Blue Jeans",
        catagorie: "dresses",
        price: "$39.99",
        description: "These classic blue jeans are made from high-quality denim and feature a relaxed fit and straight leg design.",
        size: ["26", "28", "30", "32"],
        details: ["Five-pocket styling", "belt loops", "zip fly with button closure"],
        style: "#BJ303419"
    },
    {
        id: 3,
        image: Sweats,
        image2: Flashy,
        title: "Black Leather Jacket",
        catagorie: "sweats",
        price: "$149.99",
        description: "This stylish and durable leather jacket is perfect for a night out on the town or a cool autumn day.",
        size: ["S", "M", "L", "XL"],
        details:[ "Point collar", "zip front closure", "zippered chest pockets", "zippered hand pockets"],
        style: "#BL556789"
    },
    {
        id: 4,
        image: Flashy,
        image2: Dresses,
        title: "Gray Sweatshirt",
        catagorie: "flashy",
        price: "$29.99",
        description: ["Stay warm and cozy in this soft gray sweatshirt", "featuring a comfortable loose fit", "soft cotton material."],
        size: ["XS", "S", "M", "L"],
        details: ["Ribbed crewneck", "cuffs and hem"],
        style: "#GS119841"
    },
    {
        id: 5,
        image: Jackets,
        image2: Dresses,
        title: "Striped Turtleneck",
        catagorie: "jackets",
        price: "$24.99",
        description: "This classic turtleneck sweater features stylish stripes and a comfortable, stretchy fabric that will keep you warm all winter long.",
        size: ["S", "M", "L"],
        details: "Turtleneck, long sleeves",
        style: "#ST702619"
    },
    {
        id: 6,
        image: Jackets,
        image2: Dresses,
        title: "Denim Skirt",
        catagorie: "dresses",
        price: "$29.99",
        description: "This cute and versatile denim skirt is perfect for casual wear and can be dressed up or down with ease.",
        size: ["XS", "S", "M", "L"],
        details: "High-rise waist, five-pocket styling, belt loops, button and zip fly closure",
        style: "#DS442329"
    },
    {
        id: 7,
        image: Jackets,
        image2: Dresses,
        title: "Leather Boots",
        catagorie: "sweats",
        price: "$99.99",
        description: "These stylish leather boots are perfect for any occasion, with a classic design that will never go out of style.",
        size: ["US 6", "US 7", "US 8", "US 9"]
    },
    {
        id: 8,
        image: Jackets,
        image2: Dresses,
        title: "Red T-Shirt",
        catagorie: "flashy",
        price: "$19.99",
        description: "This comfortable and stylish t-shirt is made from 100% cotton and is perfect for casual wear.",
        size: ["S", "M", "L"],
        details: "Crewneck, short sleeves",
        style: "#RT945122"
    },
    {
        id: 9,
        image: Dresses,
        image2: Dresses,
        title: "Blue Jeans",
        catagorie: "jackets",
        price: "$39.99",
        description: "These classic blue jeans are made from high-quality denim and feature a relaxed fit and straight leg design.",
        size: ["26", "28", "30", "32"],
        details: "Five-pocket styling, belt loops, zip fly with button closure",
        style: "#BJ303419"
    },
    {
        id: 10,
        image: Sweats,
        image2: Dresses,
        title: "Black Leather Jacket",
        catagorie: "dresses",
        price: "$149.99",
        description: "This stylish and durable leather jacket is perfect for a night out on the town or a cool autumn day.",
        size: ["S", "M", "L", "XL"],
        details: "Point collar, zip front closure, zippered chest pockets, zippered hand pockets",
        style: "#BL556789"
    },
    {
        id: 11,
        image: Flashy,
        image2: Dresses,
        title: "Gray Sweatshirt",
        catagorie: "sweats",
        price: "$29.99",
        description: "Stay warm and cozy in this soft gray sweatshirt, featuring a comfortable loose fit and soft cotton material.",
        size: ["XS", "S", "M", "L"],
        details: "Ribbed crewneck, cuffs and hem",
        style: "#GS119841"
    },
    {
        id: 12,
        image: Jackets,
        image2: Dresses,
        title: "Striped Turtleneck",
        catagorie: "flashy",
        price: "$24.99",
        description: "This classic turtleneck sweater features stylish stripes and a comfortable, stretchy fabric that will keep you warm all winter long.",
        size: ["S", "M", "L"],
        details: "Turtleneck, long sleeves",
        style: "#ST702619"
    },
    {
        id: 13,
        image: Jackets,
        image2: Dresses,
        title: "Denim Skirt",
        catagorie: "Jackets",
        price: "$29.99",
        description: "This cute and versatile denim skirt is perfect for casual wear and can be dressed up or down with ease.",
        size: ["XS", "S", "M", "L"],
        details: "High-rise waist, five-pocket styling, belt loops, button and zip fly closure",
        style: "#DS442329"
    },
    {
        id: 14,
        image: Jackets,
        image2: Dresses,
        title: "Leather Boots",
        catagorie: "dresses",
        price: "$99.99",
        description: "These stylish leather boots are perfect for any occasion, with a classic design that will never go out of style.",
        size: ["US 6", "US 7", "US 8", "US 9"]
    },
    {
        id: 15,
        image: Jackets,
        image2: Dresses,
        title: "Red T-Shirt",
        catagorie: "sweats",
        price: "$19.99",
        description: "This comfortable and stylish t-shirt is made from 100% cotton and is perfect for casual wear.",
        size: ["S", "M", "L"],
        details: "Crewneck, short sleeves",
        style: "#RT945122"
    },
    {
        id: 16,
        image: Dresses,
        image2: Dresses,
        title: "Blue Jeans",
        catagorie: "flashy",
        price: "$39.99",
        description: "These classic blue jeans are made from high-quality denim and feature a relaxed fit and straight leg design.",
        size: ["26", "28", "30", "32"],
        details: "Five-pocket styling, belt loops, zip fly with button closure",
        style: "#BJ303419"
    },
    {
        id: 17,
        image: Sweats,
        image2: Dresses,
        title: "Black Leather Jacket",
        catagorie: "jackets",
        price: "$149.99",
        description: "This stylish and durable leather jacket is perfect for a night out on the town or a cool autumn day.",
        size: ["S", "M", "L", "XL"],
        details: "Point collar, zip front closure, zippered chest pockets, zippered hand pockets",
        style: "#BL556789"
    },
    {
        id: 18,
        image: Flashy,
        image2: Dresses,
        title: "Gray Sweatshirt",
        catagorie: "dresses",
        price: "$29.99",
        description: "Stay warm and cozy in this soft gray sweatshirt, featuring a comfortable loose fit and soft cotton material.",
        size: ["XS", "S", "M", "L"],
        details: "Ribbed crewneck, cuffs and hem",
        style: "#GS119841"
    },
    {
        id: 19,
        image: Jackets,
        image2: Dresses,
        title: "Striped Turtleneck",
        catagorie: "sweats",
        price: "$24.99",
        description: "This classic turtleneck sweater features stylish stripes and a comfortable, stretchy fabric that will keep you warm all winter long.",
        size: ["S", "M", "L"],
        details: "Turtleneck, long sleeves",
        style: "#ST702619"
    },
    {
        id: 20,
        image: Jackets,
        image2: Dresses,
        title: "Denim Skirt",
        catagorie: "flashy",
        price: "$29.99",
        description: "This cute and versatile denim skirt is perfect for casual wear and can be dressed up or down with ease.",
        size: ["XS", "S", "M", "L"],
        details: "High-rise waist, five-pocket styling, belt loops, button and zip fly closure",
        style: "#DS442329"
    },
    {
        id: 21,
        image: Jackets,
        image2: Dresses,
        title: "Leather Boots",
        catagorie: "jackets",
        price: "$99.99",
        description: "These stylish leather boots are perfect for any occasion, with a classic design that will never go out of style.",
        size: ["US 6", "US 7", "US 8", "US 9"]
    },
    {
        id: 22,
        image: Jackets,
        image2: Dresses,
        title: "Red T-Shirt",
        catagorie: "dresses",
        price: "$19.99",
        description: "This comfortable and stylish t-shirt is made from 100% cotton and is perfect for casual wear.",
        size: ["S", "M", "L"],
        details: "Crewneck, short sleeves",
        style: "#RT945122"
    },
    {
        id: 23,
        image: Dresses,
        image2: Dresses,
        title: "Blue Jeans",
        catagorie: "sweats",
        price: "$39.99",
        description: "These classic blue jeans are made from high-quality denim and feature a relaxed fit and straight leg design.",
        size: ["26", "28", "30", "32"],
        details: "Five-pocket styling, belt loops, zip fly with button closure",
        style: "#BJ303419"
    },
    {
        id: 24,
        image: Sweats,
        image2: Dresses,
        title: "Black Leather Jacket",
        catagorie: "flashy",
        price: "$149.99",
        description: "This stylish and durable leather jacket is perfect for a night out on the town or a cool autumn day.",
        size: ["S", "M", "L", "XL"],
        details: "Point collar, zip front closure, zippered chest pockets, zippered hand pockets",
        style: "#BL556789"
    },
    {
        id: 25,
        image: Flashy,
        image2: Dresses,
        title: "Gray Sweatshirt",
        catagorie: "jackets",
        price: "$29.99",
        description: "Stay warm and cozy in this soft gray sweatshirt, featuring a comfortable loose fit and soft cotton material.",
        size: ["XS", "S", "M", "L"],
        details: "Ribbed crewneck, cuffs and hem",
        style: "#GS119841"
    },
    {
        id: 26,
        image: Jackets,
        image2: Dresses,
        title: "Striped Turtleneck",
        catagorie: "dresses",
        price: "$24.99",
        description: "This classic turtleneck sweater features stylish stripes and a comfortable, stretchy fabric that will keep you warm all winter long.",
        size: ["S", "M", "L"],
        details: "Turtleneck, long sleeves",
        style: "#ST702619"
    },
    {
        id: 27,
        image: Jackets,
        image2: Dresses,
        title: "Denim Skirt",
        catagorie: "sweats",
        price: "$29.99",
        description: "This cute and versatile denim skirt is perfect for casual wear and can be dressed up or down with ease.",
        size: ["XS", "S", "M", "L"],
        details: "High-rise waist, five-pocket styling, belt loops, button and zip fly closure",
        style: "#DS442329"
    },
    {
        id: 28,
        image: Jackets,
        image2: Dresses,
        title: "Leather Boots",
        catagorie: "flashy",
        price: "$99.99",
        description: "These stylish leather boots are perfect for any occasion, with a classic design that will never go out of style.",
        size: ["US 6", "US 7", "US 8", "US 9"]
    }
  ]






export default clothingData