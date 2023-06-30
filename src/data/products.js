/* 
import React, { Component } from 'react'; 

export class Products extends Component {

  constructor(props) {

    super(props);

    this.state = {

      error: null,

      isLoaded: false,

      items: []

    };

  }

  componentDidMount() {

    fetch("https://makeup-api.herokuapp.com/api/v1/products.json?product_category=cream&product_type=foundation")

      .then(res => res.json())

      .then(

        (result) => {

          this.setState({

            isLoaded: true,

            items: result.products

           

          });

        },

        (error) => {

          this.setState({

            isLoaded: true,

            error

          });

        }

      )

     

  }

  render() {
  const itemsPerPage = 10;
  let itemCount = 0;

    const { error, isLoaded, items } = this.state;

    if (error) {

      return <div>Error: {error.message}</div>;

    } else if (!isLoaded) {

      return <div>Loading...</div>;

    } 

    else {

}

    return(
 <div className="row">



        {items.map((item) => {
          if (itemCount < itemsPerPage) {
            itemCount++;
            return (
              <div className="column">
                <div className="card">
                  <img className="card-img-top" src={item.thumbnail} alt="Card image cap" />
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.description}</p>
                    <a href="#" className="btn btn-primary">$ {item.price.toFixed(2)}</a>
                  </div>

                </div>
              </div>
            );
          } else {
            return null;
          }
        })}

      </div>

    )

  }

}



export default Products; */

import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.png'
import img6 from '../assets/img6.png'
import img7 from '../assets/img7.jpg'

import eyeliner1 from '../assets/eyeliner1.jpeg'
import eyeliner2 from '../assets/eyeliner2.png'
import eyeliner3 from '../assets/eyeliner3.jpeg'
import eyeliner4 from '../assets/eyeliner4.jpeg'
import shadow1 from '../assets/shadow1.png'
import shadow2 from '../assets/shadow2.png'
import shadow3 from '../assets/shadow3.png'
import shadow4 from '../assets/shadow4.jpeg'
import shadow5 from '../assets/shadow5.jpeg'
import lip1 from '../assets/lip1.jpeg'
import lip2 from '../assets/lip2.jpeg'
import lip3 from '../assets/lip3.jpeg'
import bronzer from '../assets/bronzer.jpeg'
import foundation1 from '../assets/foundation1.jpeg'
import foundation2 from '../assets/foundation2.jpeg'
import foundation3 from '../assets/foundation3.jpeg'
import foundation4 from '../assets/foundation4.jpeg'



export const SliderProducts = [{
  brand : 'Marcelle',
  price : '17.99',
  category : 'cream',
  img : img1
},

{
  brand : 'Revlon',
  price : '19.99',
  category : 'cream',
  img : img2
},

{
  brand : 'Covergirl',
  price : '15.99',
  category : 'cream',
  img : img6
},

{
  brand : 'Sante',
  price : '27.49',
  category : 'cream',
  img : img7
}
]
   

 export const fetchProductsData = [{
  brand : 'Clinique',
    price : '27.30',
    img : shadow1,
    type : 'Palette',
},

{
   
  brand : 'Dior',
  price : '21.00',
  img : foundation3,
  type : 'Concealer',
  
},
  {
    
    brand : 'Marcelle',
    price : '11.99',
    img : lip1,
    type : 'Lipstick',
  },

  {
   
    brand : 'Rejuva Minerals',
    price : '12.00',
    img : bronzer,
    type : 'Powder',
    
  },

  {
    brand : 'Marienate',
    price : '10.99',
    img : eyeliner3,
    type : 'Gel',
    
  },
  {
   
    brand : 'Zorah biocosmetiques',
    price : '14.95',
    img : eyeliner1,
    type : 'Liquid',
    
  },

  {
   
    brand : 'Glossier',
    price : '22.00',
    img : foundation1,
    type : 'Concealer',
    
  }, 

  {
    
    brand : 'Revlon',
    price : '12.99',
    img :  lip3 ,
    type : 'Lip stain',
    
  },
  {
    brand : 'Alva',
    price : '9.95',
    img : shadow3,
    type : 'Cream',
    
  },
  {
    brand : 'Maybelline',
    price : '5.99',
    img : eyeliner2 ,
    type : 'Pencil',
    
  },
  {
    brand : 'Dior',
    price : '25.99',
    img :  lip2 ,
    type : 'Lip gloss',
    
  },
  {
    brand : 'Iman',
    price : '17.50',
    img : shadow2 ,
    type : 'Pencil',
    
  },

  {
   
    brand : 'Fenty',
    price : '25.00',
    img : foundation2,
    type : 'Concealer',
    
  },

  
] 

export const shadow = [{
  brand : 'Clinique',
  price : '27.30',
  img : shadow1,
  type : 'Palette',
  
},

{
  brand : 'Pacifica',
  price : '27.30',
  img : shadow5,
  type : 'Palette',
  
},

{
  brand : 'Iman',
  price : '17.50',
  img : shadow2 ,
  type : 'Pencil',
  
},

{
  brand : 'Smashbox',
  price : '17.50',
  img : shadow4 ,
  type : 'Palette',
  
},

{
  brand : 'Alva',
  price : '9.95',
  img : shadow3,
  type : 'Cream',
  
}
]

export const eyeliner = [{
  brand : 'Zorah',
  price : '14.95',
  img : eyeliner1,
  type : 'Liquid',
},
  {
    brand : 'Maybelline',
    price : '5.99',
    img : eyeliner2 ,
    type : 'Pencil',
    
  },

  {
    brand : 'Anna Sui',
    price : '28.00',
    img : eyeliner4 ,
    type : 'Pencil',
    
  },

  {
    brand : 'Marienate',
    price : '10.99',
    img : eyeliner3,
    type : 'Gel',
}]

export const lipstick = [{
      brand : 'Marcelle',
    price : '11.99',
    img : lip1,
    type : 'Lipstick',
    
  },
  {
    brand : 'Dior',
    price : '25.99',
    img :  lip2 ,
    type : 'Lip gloss',
    
  },
  {
    brand : 'Revlon',
    price : '12.99',
    img :  lip3 ,
    type : 'Lip stain',
}]

 export const bronzerData = [{
  brand: 'Rejuva Minerals',
  price: '12.00',
  img: bronzer,
  type: 'Powder',
}]; 

export const foundation = [{
  brand : 'Fenty',
    price : '25.00',
    img : foundation2,
    type : 'Concealer',
},

{
   
  brand : 'Dior',
  price : '21.00',
  img : foundation3,
  type : 'Concealer',
  
},

{
   
  brand : 'Nyx',
  price : '6.00',
  img : foundation4,
  type : 'Concealer',
  
},

    {
   
      brand : 'Glossier',
      price : '22.00',
      img : foundation1,
      type : 'Concealer',
      
    
}] 

/* export const fetchProductsData = async () => {
  try {
    const response = await fetch('https://makeup-api.herokuapp.com/api/v1/products.json?product_type=eyeliner');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching products data:', error);
    return []; // Return an empty array in case of an error
  }
}; */
