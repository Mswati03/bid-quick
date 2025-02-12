export interface Auction {
    id: string;
    title: string;
    description: string;
    currentBid: number;
    endTime: Date;
    images: {url:string;alt:string; id:string}[];
    category: string;
    startingBid: number;
    specifications: { color: string; size: string; id:string;value:string; };
    owner:     {id: string
    name: string
    avatar: string
    rating: number
    totalAuctions: number
    joinedDate: Date };
    reviews: { id: string
        userId: string
        username: string
        rating: number
        comment: string
        createdAt: Date }[];
}

export const auctions: Auction[] = [
    {
        id: '1',
        title: 'Vintage Leather Jacket',
        description: 'A classic leather jacket from the 1970s',
        currentBid: 150,
        endTime: new Date('2023-12-31'),
        images: [
            { url: "https://placehold.co/400x400.png", alt: "Image 1" , id:"1",},
            { url: "https://placehold.co/400x400.png", alt: "Image 2", id:"2" }
          ],
        category: 'Clothing',
      
     
        startingBid: 50,
  
        specifications: { color: "red", size: "M",id:"00011", value:"PP" },
        owner: { name: "Owner 1", id:"owner1",
       
            avatar: "oo",
            rating: 9,
            totalAuctions: 1,
            joinedDate: new Date(),
        },
        reviews: [{id:"03",
            userId: "MSwati",
            username: "mswatii",
            rating: 9,
            comment: "Good",
            createdAt: new Date }],
    },
    {
        id: '2',
        title: 'Modern Art Painting',
        description: 'An original piece by a renowned contemporary artist',
        currentBid: 500,
        endTime: new Date('2023-12-25'),
        images: [
            { url: "https://placehold.co/400x400.png", alt: "Image 1",id:"3" },
            { url: "https://placehold.co/400x400.png", alt: "Image 2" ,id:"4"}
          ],
        category: 'Art',
      
     
        startingBid: 50,
     
        specifications: { color: "red", size: "M", id:"0001", value:"M" },
        owner: { name: "Owner 1", id:"owner1",
       
            avatar: "oo",
            rating: 9,
            totalAuctions: 1,
            joinedDate: new Date(),
        },
        reviews: [{id:"03",
            userId: "MSwati",
            username: "mswatii",
            rating: 9,
            comment: "Good",
            createdAt: new Date }],
    },
    {
        id: '3',
        title: 'Diamond Necklace',
        description: 'A stunning diamond necklace with 2 carat total weight',
        currentBid: 1000,
        endTime: new Date('2023-12-28'),
        images: [
            { url: "https://placehold.co/400x400.png", alt: "Image 1", id:"8" },
            { url: "https://placehold.co/400x400.png", alt: "Image 2",id:"9" }
          ],
        category: 'Jewelry',
      
       
        startingBid: 50,
       
        specifications: { color: "red", size: "M" , id:"0002", value:"N"},
        owner: { name: "Owner 1", id:"owner1",
       
            avatar: "oo",
            rating: 9,
            totalAuctions: 1,
            joinedDate: new Date(),
        },
        reviews: [{id:"03",
            userId: "MSwati",
            username: "mswatii",
            rating: 9,
            comment: "Good",
            createdAt: new Date }],
    },
    {
        id: '4',
        title: 'Latest Smartphone',
        description: 'The newest flagship smartphone with advanced features',
        currentBid: 600,
        endTime: new Date('2023-12-30'),
        images: [
            { url: "https://placehold.co/400x400.png", alt: "Image 1",id:"5" },
            { url: "https://placehold.co/400x400.png", alt: "Image 2",id:"6" }
          ],
        category: 'Tech',
      
      
        startingBid: 50,
       
        specifications: { color: "red", size: "M", id:"0003", value:"D"},
        owner: { name: "Owner 1", id:"owner1",
       
            avatar: "oo",
            rating: 9,
            totalAuctions: 1,
            joinedDate: new Date(),
        },
        reviews: [{id:"03",
            userId: "MSwati",
            username: "mswatii",
            rating: 9,
            comment: "Good",
            createdAt: new Date }],
    },
    {
        id: '5',
        title: 'Antique Wooden Desk',
        description: 'A beautifully crafted wooden desk from the 19th century',
        currentBid: 300,
        endTime: new Date('2023-12-29'),
        images: [
            { url: "https://placehold.co/400x400.png", alt: "Image 1", id:"7" },
            { url: "https://placehold.co/400x400.png", alt: "Image 2",id:"8" }
          ],
        category: 'More',
      
     
        startingBid: 50,
    
        specifications: { color: "red", size: "M",id:"0005", value:"P" },
        owner: { name: "Owner 1", id:"owner1",
       
            avatar: "oo",
            rating: 9,
            totalAuctions: 1,
            joinedDate: new Date(),
        },
        reviews: [{id:"03",
            userId: "MSwati",
            username: "mswatii",
            rating: 9,
            comment: "Good",
            createdAt: new Date }],
    },
];

export const categories = ['Clothing', 'Tech', 'Art', 'Jewelry', 'More'];