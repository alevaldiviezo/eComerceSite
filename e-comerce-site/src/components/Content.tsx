// Content.tsx
import React, { useState } from 'react';
import './styles.css';

// Define the type for the link items
type LinkItem = {
    index: number;
    name: string;
    image: string;
    buyLink: string;
    description: string;
};

const Content: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState(''); // State for search term

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value); // Update search term
    };

    // Ensure link is typed as an array of LinkItem
    const links: LinkItem[] = [
        {
            index: 1,
            name:"Cute and Funny Anime Coloring Book: Educational coloring pages with anime characters for children",
            image:'https://m.media-amazon.com/images/I/51oJlweheqL._SL1000_.jpg', 
            buyLink:'https://amzn.to/4eMr6Vo',
            description: "Inside these pages, young artists will find a captivating collection of adorable anime characters, ready to be brought to life with vibrant colors. From magical creatures to brave heroes, each illustration sparks curiosity and invites kids to explore their artistic talents."
        },
        {
            index: 2,
            name:"Magnesium Glycinate 4-in-1 Complex 2000mg - 449mg Elemental Magnesium High Strength Magnesium Supplements - ",
            image:'https://m.media-amazon.com/images/I/71RTvc5s+PL._AC_SL1500_.jpg',
            buyLink: 'https://amzn.to/404CMyx',
            description: "Magnesium Glycinate 4-in-1 Complex 2000mg - 449mg Elemental Magnesium High Strength Magnesium Supplements - Magnesium Bisglycinate,Citrate, Malate, Oxide - 120 Capsules - Vegan UK Made by New Leaf "
        },
        {
            index: 3,
            name:"Optimum Nutrition Micronised Creatine Powder",
            image:'https://m.media-amazon.com/images/I/719zHGtl57L._AC_SL1500_.jpg',
            buyLink:'https://amzn.to/4dSzCBc',
            description: "Optimum Nutrition Micronised Creatine Powder, 100% Pure Creatine Monohydrate Powder for Performance and Muscle Power, Unflavoured Shake, 93 Servings, 317 g "
        },
        {
            index: 4,
            name:"2025 Weekly Planner: Agenda from January to December, Hardcover",
            image:'https://m.media-amazon.com/images/I/41-BaSw-w7L._SL1329_.jpg',
            buyLink:'https://amzn.to/406Q1hY',
            description: "This planner is no’t just about scheduling, it is about creating a seamless academic experience. It encourages productivity, time management, and goal-setting—all while adding a touch of flair to your daily routine.Remember, this planner is not just a tool; it is your companion for a successful academic year"
        },
        {
            index: 5,
            name:"Bio-Kult Everyday Multi-Strain Formulation Probiotics for Digestive System, 60 Capsules (Pack of 1) ",
            image:'https://m.media-amazon.com/images/I/71U3rt24spL._AC_SL1500_.jpg',
            buyLink:'https://amzn.to/406R8ya',
            description: " Bio-Kult contains 14 strains of live bacteria to complement the existing gut ﬂora naturally present in a healthy persons digestive system. Microorganisms present in the intestine, collectively called the gut microbiota, are essential to health "
        },
        {
            index: 6,
            name:"Braun Series 9 Pro Electric Shaver With 3+1 Head, ProLift Trimmer, Charging Stand & Travel Case, Sonic Technology, UK 2 Pin Plug, 9417s, Silver Razor ",
            image:'https://m.media-amazon.com/images/I/815cy7zkwSL._AC_SL1500_.jpg',
            buyLink:'https://amzn.to/3Ydzgzh',
            description: "More efficient (vs. previous Braun Series 9) & gentle: the innovative ProLift trimmer and Braun’s unique Sonic Technology help to shave up to 10% faster (vs. previous Braun Series 9), for a gentle shave "
        },
        {
            index: 7,
            name:"Miracase Magnetic Case for iPhone 16 Pro Case 6.3-Inch, Full Body Bumper Case Compatible with MagSafe and Built-in 9H Tempered Glass Screen Protector + Camera Lens Protector (Black) ",
            image:'https://m.media-amazon.com/images/I/71-ePYGI0WL._AC_SL1500_.jpg',
            buyLink:'https://amzn.to/4eP0iUE',
            description: "Enhanced Compatibility with MagSafe Accessories] The phone case is specifically designed for iPhone 16 Pro 6.3-Inch and features a built-in super strong magnet that ensures compatibility with all MagSafe accessories like chargers, wallets, battery packs, and car mounts. No matter how it rotates or sways, your phone will stay securely attached. "
        },
        {
            index: 8,
            name:"Crocs Unisex's Classic Clogs  ",
            image:'https://m.media-amazon.com/images/I/81LPwvQLXJL._AC_SX695_.jpg',
            buyLink:'https://amzn.to/409rNDV',
            description: "This lightweight design causes no fuss thanks to non-marking soles and the convenient, easy-to-clean exterior; any muck washes off easily with just some simple soap and water "
        },
        {
            index: 9,
            name:"SECRUI Wireless Doorbell, Plug in Waterproof Battery Operated Cordless Doorbell Operating at 1,000 Feet Long Range",
            image:'https://m.media-amazon.com/images/I/51o0KzJz4QL._AC_SL1500_.jpg',
            buyLink:'https://amzn.to/48eFfIA',
            description: "This wireless doorbells offers a remote connection of up to 300 M/1000 foot and does not interfere with other equipment in your home.The Plug in doorbell receiver bell has features 58 tunes and 5 adjustable volume levels ranging from 0 to 120 dB. It will remember your settings even if power outage. "
        },
        {
            index: 10,
            name:"Magnesium Citrate 1,480mg 120 Vegan Capsules 2 Months Supply - Providing 440mg Elemental Magnesium Per Serving - ",
            image:'https://m.media-amazon.com/images/I/61UHVkKDv-L._AC_SL1500_.jpg',
            buyLink:'https://amzn.to/407s8Hf',
            description: "ENHANCED BIOAVAILABILITY – Multivita magnesium capsules contain 1480mg of Magnesium Citrate and 440mg of Elemental Magnesium, the most bioavailable form of magnesium, per serving of 2 easy to swallow capsules. Each pouch is supplied with 120 easy-to-swallow vegan capsules that will last for 2 months. "
        },
    ];
    
    return (
        <div>
            {/* Search Field Container */}
            <div className="search-container">  {/* Added container for centering */}
                <input
                    type="text"
                    placeholder="Search by name..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className="search-input" // Class for styling
                />
            </div>
            <div className="container">
                {links
                    .filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase())) // Filter cards
                    .map((item, index) => (
                        <div key={index} className="card" onClick={()=>open(item.buyLink)}>
                            <img src={item.image} alt={item.name} className="card-image" />
                            <div className="card-content">
                                <h3>{item.name}</h3>
                                <p>{item.description}</p>
                                <a href={item.buyLink} target='_blank' className="buy-button"> {/* Button linking to buyLink */}
                                    Take a look
                                </a>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default Content;
