import React from 'react';

const Newscard = () => {
  const obj = [
    {
      cardbackgorundcolor: '#DBF505',
      innercardimage: 'https://cdn.sanity.io/images/3vte03iz/production/851428f4f5da404283d4e43d786593342993a1b0-1696x1706.png?auto=format&w=150&h=150',
      carrdtittle: 'Stone',
      carrddesc: 'shop',
      carddesch4color: 'green',
      Link: 'https://paa.ge/spencergab/en/',
    },
    {
      cardbackgorundcolor: '#FFBDF7',
      innercardimage: 'https://cdn.sanity.io/images/3vte03iz/production/78f5371ef1953c693a495caba2df1c63450101c8-1562x1564.png?auto=format&w=150&h=150',
      carrdtittle: 'Article',
      carrddesc: 'Dribble',
      carddesch4color: '#FF4106',
      Link: 'https://dribbble.com/stories/2019/09/23/how-spencer-gabor-made-a-massive-career-change-into-the-arts',
    },
    {
      cardbackgorundcolor: '#F05626',
      innercardimage: 'https://cdn.sanity.io/images/3vte03iz/production/f8430c4dfc80e2c5dcf1132462640723988ebd2c-1684x1684.jpg?auto=format&w=150&h=150',
      carrdtittle: 'Store',
      carrddesc: 'New A2 Print',
      carddesch4color: '#FFCAFB',
      Link: 'https://paa.ge/spencergab/en/Find-Me-in-Hell-0j62PxH',
    },
    {
      cardbackgorundcolor: '#245767',
      innercardimage: 'https://cdn.sanity.io/images/3vte03iz/production/eb8992028b632d30f70ce00713ce68dc2fc377ab-1944x1944.jpg?auto=format&w=150&h=150',
      carrdtittle: 'Interview',
      carrddesc: 'the noun project',
      carddesch4color: '#DBF505',
      Link: 'https://thelist.thenounproject.com/thelist/spencer-gabor',
    },
  ];

  return (
    <div className='Newscardcover'>
      {obj.map((elem, index) => (
        <a key={index} href={elem.Link} className="newscard-link">
          <div className="newscard" style={{ backgroundColor: elem.cardbackgorundcolor }}>
            <div className="cardimg">
              <img src={elem.innercardimage} alt={elem.carrdtittle} />
            </div>
            <div className="carddesc">
              <h4>{elem.carrdtittle}</h4>
              <h4 style={{ color: elem.carddesch4color }}>{elem.carrddesc}</h4>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
};

export default Newscard;
