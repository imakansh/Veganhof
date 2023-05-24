import React from 'react';
import card1Image from './images/fullscreen-creatives/BEAUTY SMOOTHIE _alps.png';
import card2Image from './images/fullscreen-creatives/detox_alps.png';
import card3Image from './images/fullscreen-creatives/essential greens.png';
import card4Image from './images/fullscreen-creatives/nordic berries.png';
import card5Image from './images/fullscreen-creatives/protein smoothie exotic berries.png';
import card6Image from './images/fullscreen-creatives/tropical punch.png';
import card7Image from './images/fullscreen-creatives/veganhof PROTEIN.png';
import card8Image from './images/fullscreen-creatives/veganhof foy activity.png';


const cardImages = [card1Image, card2Image];

const data = [
  { id: 1, name: 'Beauty Smoothie', pic: card1Image },
  { id: 2, name: 'Detox', pic: card2Image},
  {id: 3, name: 'Essential green', pic: card3Image },
  {id: 4, name: 'Nordic berriees', pic: card4Image },{id: 5, name: 'Protein Smothiee', pic: card5Image },{id: 6, name: 'Tropical punch', pic: card6Image} ,{id: 7, name: 'Foy', pic: card7Image 
    }  ,{id: 8, name: 'Protien', pic: card8Image }
];

function Image() {
    return (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridGap: '20px' }}>
          {data.map(item => (
            <div
              key={item.id}
              style={{
                border: '1px solid #ccc',
                borderRadius: '4px',
                padding: '20px',
                textAlign: 'center'
              }}
            >
              <img style={{ maxWidth: '100%' }} src={item.pic} alt="Card" />
              <h5 className="card-title">{item.name}</h5>
              <p className="card-text">
                Some short desprition about the product .
              </p>
              <a href="#" className="btn btn-primary">
              Add to Cart
            </a>
            </div>
          ))}
        </div>
      );
    }

export default Image;
