import React,{useState} from 'react';
import './CardList.css';
import t1 from './images/t1.webp';
import t2 from './images/t2.webp';
import t3 from './images/t3.webp';
import t4 from './images/t4.webp';
import t5 from './images/t5.webp';
import t6 from './images/t6.webp';
import t7 from './images/t7.webp';
import t8 from './images/t8.webp';
import t9 from './images/t9.webp';
import t10 from './images/t10.webp';
import t11 from './images/t11.webp';
import t12 from './images/t12.webp';



const Card = ({ id, title, description, image, price }) => {
  return (
    <div className="body2">
      <div className="card">
        <img src={image} alt={title} />
        <div className="card-content">
          <h3>{title}</h3>
          <p>{description}</p>
          
          <p className="price">{price}</p>
          
          <button className="buy-button" href="/">
          
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};


const cardData = [
  {
    id : '12',
    title: 'WashBag',
    description:'RRK IMPORT AND EXPORT Cosmetic Pouch  (Black)',
    price:'Price-399rs',
    image: t1
  },
  {
    id : '1',
    title: 'House Of Quirck',
    description:'HOUSE OF QUIRK 7pcs Set Travel Organizer Packing Lightweight Travel Luggage with Toiletry Bag  (Grey)',
    price:'Price-699rs',
    image: t2
  },
  {
    id : '2',
    title: 'VYORA Saree',
    description:'VYORA Saree cover Single Saree Cover Set of 12 storage bag saree packing bag pack of 12 organizer BOW_DP_12  (Pink)',
    price:'Price-899rs',
    image: t3
  },
  {
    id : '3',
    title: 'Ankit International Blanket Cover ',
    description:'Ankit International Blanket Cover Storage Bag Blanket Organizer/Cover with a Large Transparent Window Side Handles Blanket Cover  (Brown)',
    price:'Price-199rs',
    image: t4
  },
  {
    id : '4',
    title: 'GMEE Waterproof Rain Dust Cover 30L to 50L Laptop Hiking Sports bag Backpack Cover Luggage Cover  (Standard, Black)',
    description:'RRK IMPORT AND EXPORT Cosmetic Pouch  (Black)',
    price:'Price-999rs',
    image: t5
  },
  {
    id : '5',
    title: 'EVER N GREEN Travel Neck Pillow  (Grey)',
    description:'EVER N GREEN Travel Neck Pillow  (Grey)',
    price:'Price-799rs',
    image: t6
  },
  {
    id : '6',
    title: 'Ankit International Saree Cover Premium High-Quality ',
    description:'Ankit International Saree Cover Premium High-Quality',
    price:'Price-699rs',
    image: t7
  },
  {
    id : '7',
    title: 'Zexsazone U Shape Neck Pillow travelling headrest, ',
    description:'Zexsazone U Shape Neck Pillow travelling headrest, ',
    price:'Price-499rs',
    image: t8
  },
  {
    id : '8',
    title: ' Women Hanging Cosmetic Bag Travel Toiletry Kit  (Pink)',
    description:'Glorious Diamond Newest Design High Quality Women Hanging Cosmetic Bag Travel Toiletry Kit  (Pink)',
    price:'Price-399rs',
    image: t9
  },
  {

    id : '9',
    title: 'Ankit International Saree Cover    (Pink, White, Black)',
    description:'Ankit International Saree Cover High-Quality Trendy   (Pink, White, Black)',
    price:'Price-799rs',
    image: t10
  },
  {
    id : '10',
    title: 'High Quality Women Hanging Cosmetic Bag Travel Toiletry Kit  (Pink)',
    description:'Glorious Diamond Newest Design High Quality Women Hanging Cosmetic Bag Travel Toiletry Kit  (Pink)', 
    price:'Price-999rs',
    image: t11
  },
  {
    id : '11',
    title: 'Glorious Diamond Newest Design High Quality Women Hanging Cosmetic Bag Travel Toiletry Kit  (Pink)',
    description:'RRK IMPORT AND EXPORT Cosmetic Pouch  (Black)',
    price:'Price-1099rs',
    image: t12
  },
];

const CardList = () => {
  const [search, setSearch] = useState('');

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCardData = cardData.filter((card) => {
    const searchValue = search.toLowerCase();
    return (
      card.title.toLowerCase().includes(searchValue) ||
      card.price.toLowerCase().includes(searchValue) ||
      card.description.toLowerCase().includes(searchValue) ||
      card.id.toString().includes(searchValue) ||
      card.image.toLowerCase().includes(searchValue) 
    );
  });

  return (
    <div>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by name, price, or description"
          value={search}
          onChange={handleSearchChange}
        />
        <i className="fas fa-search"></i>
      </div>
      <div className="card-list">
        {filteredCardData.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </div>
  );
};



export default CardList;
