import React, { useState } from 'react';

const Seeproject = () => {
  const [hoverIndex, setHoverIndex] = useState(null);

  const obj = [
    {
      left: [
        'https://cdn.sanity.io/images/3vte03iz/production/fdcb516c840afca7e81dd9c22280046858bab0e4-1500x1500.jpg?auto=format&w=400&h=400',
        'https://cdn.sanity.io/images/3vte03iz/production/c9e0c0332346ea0e8031e53baa38cc69d44cb21f-2711x2711.png?auto=format&w=400&h=400',
        'https://cdn.sanity.io/images/3vte03iz/production/3934c5000d7d4a36a249cd915464ead82672804b-2381x2381.jpg?auto=format&w=400&h=400',
        'https://cdn.sanity.io/images/3vte03iz/production/ddb1ff83a6896af9f812222294df8dd3eac419cc-2266x2264.png?auto=format&w=400&h=400',
        'https://cdn.sanity.io/images/3vte03iz/production/adf2a09ed47739d63f9afd1d6de31d4bcbdb96d2-1080x1080.jpg?auto=format&w=400&h=400',
      ],

      center: {
        h5: [
          'Bromption',
          '260 Collin',
          'Shake Shack',
          'Caufield Cup',
          'Jaffa',
        ],
      },
      top: [
        'https://cdn.sanity.io/images/3vte03iz/production/fdcb516c840afca7e81dd9c22280046858bab0e4-1500x1500.jpg?auto=format&w=400&h=400',
        'https://cdn.sanity.io/images/3vte03iz/production/c9e0c0332346ea0e8031e53baa38cc69d44cb21f-2711x2711.png?auto=format&w=400&h=400',
        'https://cdn.sanity.io/images/3vte03iz/production/3934c5000d7d4a36a249cd915464ead82672804b-2381x2381.jpg?auto=format&w=400&h=400',
        'https://cdn.sanity.io/images/3vte03iz/production/ddb1ff83a6896af9f812222294df8dd3eac419cc-2266x2264.png?auto=format&w=400&h=400',
        'https://cdn.sanity.io/images/3vte03iz/production/adf2a09ed47739d63f9afd1d6de31d4bcbdb96d2-1080x1080.jpg?auto=format&w=400&h=400',
      ],


      right: [
        'https://cdn.sanity.io/images/3vte03iz/production/c669cce5e03e0ed0a53ff32d8cbe7d146a10c09c-1500x1500.jpg?auto=format&w=1000&h=1000',
        'https://cdn.sanity.io/images/3vte03iz/production/bca8010169041916a227ecb3a654f720b92dca4c-2048x2048.jpg?auto=format&w=400&h=400',
        'https://cdn.sanity.io/images/3vte03iz/production/6b0e750935b1672e6f4bd24ffdbb6ca04e5466b0-1736x1736.png?auto=format&w=1000&h=1000',
        'https://cdn.sanity.io/images/3vte03iz/production/e61ca6cc06e59fd09408031ef2529d3d356eec38-2400x1800.png?auto=format&w=1000&h=1000',
        'https://cdn.sanity.io/images/3vte03iz/production/a5fe8c8908e2f43a86f412ee5bd446e118e7318a-5000x3333.jpg?auto=format&w=1000&h=1000',
      ],
    },
  ];

  return (
    obj.map((elem, index) => {
      return (
        <div key={index} className='Seeproject'>
          <div className="seeprojectleft">
            {elem.left.map((item, idx) => (
              <img key={idx} src={item} alt="" className={hoverIndex === idx ? 'active' : ''} />
            ))}
          </div>
          <div className="seeprojectcenter">
            {elem.center.h5.map((item, idx) => (
              <h5
                key={idx}
                onMouseEnter={() => setHoverIndex(idx)}
                onMouseLeave={() => setHoverIndex(null)}
              >
                {item}
              </h5>
            ))}
       
          </div>

          <div className="seeprojectright">
            {elem.right.map((item, idx) => (
              <img key={idx} src={item} alt="" className={hoverIndex === idx ? 'active' : ''} />
            ))}
          </div>

        </div>
      );
    })
  );
};

export default Seeproject;
