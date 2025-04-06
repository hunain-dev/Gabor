import { useState } from "react";
import { ImCross } from "react-icons/im";

const Moreworkcards = () => {
  const [selectedImages, setSelectedImages] = useState([]); 
  const [isModalOpen, setIsModalOpen] = useState(false);

  const clickHandler = (images) => {
    setSelectedImages(images);
    setIsModalOpen(true);
  };

  const deletehandler = () => {
   setIsModalOpen(false);
};
 
  const imgs = [

    {
      img: '    https://cdn.sanity.io/images/3vte03iz/production/ee628beb316f724fe5b6ef0dd2a119d6710ac2a2-3274x2048.png?auto=format&w=1000&h=1000',
      images: [
        'https://cdn.sanity.io/images/3vte03iz/production/88c89d0adf606ef4e2e5a06b2d1fe94e8e11ef37-1800x1800.png?auto=format&w=400&h=400',
      ],
    },
    {
      img: 'https://cdn.sanity.io/images/3vte03iz/production/fbb0371fff2c02e252b267cbd7cb864ff9d792ee-3101x3105.png?auto=format&w=300&h=300',
      images: [
        'https://cdn.sanity.io/images/3vte03iz/production/fbb0371fff2c02e252b267cbd7cb864ff9d792ee-3101x3105.png?auto=format&w=1000&h=1000',
      ],
    },
    {
      img: 'https://cdn.sanity.io/images/3vte03iz/production/bdf3323d1f98cdfb4ee9d7a9167eae7c378f21be-3000x3000.gif?auto=format&w=300&h=300',
      images: [
        'https://cdn.sanity.io/images/3vte03iz/production/bdf3323d1f98cdfb4ee9d7a9167eae7c378f21be-3000x3000.gif?auto=format&w=1000&h=1000',
      ],
    },
    {
      img: 'https://cdn.sanity.io/images/3vte03iz/production/240e7a3db6d4ad80f0569bf435e8500f81adfdf7-2500x2500.gif?auto=format&w=300&h=300',
      images: [
        'https://cdn.sanity.io/images/3vte03iz/production/240e7a3db6d4ad80f0569bf435e8500f81adfdf7-2500x2500.gif?auto=format&w=300&h=300',
        
        ,
      ],
    },
    {
      img: 'https://cdn.sanity.io/images/3vte03iz/production/34a7eb722083ed5a47cfcf492b2a9bd91bc606b3-4154x4154.png?auto=format&w=300&h=300',
      images: [
        'https://cdn.sanity.io/images/3vte03iz/production/34a7eb722083ed5a47cfcf492b2a9bd91bc606b3-4154x4154.png?auto=format&w=1000&h=1000',
      ],
    },   {
      img: 'https://cdn.sanity.io/images/3vte03iz/production/96fdc45bff981adf38b2fb9fc29d514a3f7ef3d2-1684x1684.jpg?auto=format&w=300&h=300',
      images: [
        'https://cdn.sanity.io/images/3vte03iz/production/96fdc45bff981adf38b2fb9fc29d514a3f7ef3d2-1684x1684.jpg?auto=format&w=1000&h=1000',
      ],
    },   {
      img: 'https://cdn.sanity.io/images/3vte03iz/production/5a33c36ecd57ffce522bcc38ff2a7f8aecacffbf-2035x2035.jpg?auto=format&w=300&h=300',
      images: [
        'https://cdn.sanity.io/images/3vte03iz/production/5a33c36ecd57ffce522bcc38ff2a7f8aecacffbf-2035x2035.jpg?auto=format&w=1000&h=1000',
      ],
    },   {
      img: 'https://cdn.sanity.io/images/3vte03iz/production/6bcc343dca040f2a86fe84a1bd112a9fadd16078-3238x3238.png?auto=format&w=300&h=300',
      images: [
        'https://cdn.sanity.io/images/3vte03iz/production/6bcc343dca040f2a86fe84a1bd112a9fadd16078-3238x3238.png?auto=format&w=300&h=300',
      ],
    },   {
      img: 'https://cdn.sanity.io/images/3vte03iz/production/d892db419d67230de888ca8d8b3f2764efeaa944-2500x2500.png?auto=format&w=300&h=300',
      images: [
        'https://cdn.sanity.io/images/3vte03iz/production/d892db419d67230de888ca8d8b3f2764efeaa944-2500x2500.png?auto=format&w=300&h=300',
      ],
    },
    {
      img: 'https://cdn.sanity.io/images/3vte03iz/production/45fec9d86b00058bf62df84d930cd23f4f8152e4-1500x1500.png?auto=format&w=300&h=300',
      images: [
        'https://cdn.sanity.io/images/3vte03iz/production/45fec9d86b00058bf62df84d930cd23f4f8152e4-1500x1500.png?auto=format&w=300&h=300',
      ],
    },
    {
      img: 'https://cdn.sanity.io/images/3vte03iz/production/b2a1e3e396f2921ea5c5c1f33edad7d141bbed98-2048x2048.gif?auto=format&w=300&h=300',
      images: [
        'https://cdn.sanity.io/images/3vte03iz/production/b2a1e3e396f2921ea5c5c1f33edad7d141bbed98-2048x2048.gif?auto=format&w=300&h=300',
      ],
    },
    {
      img: 'https://cdn.sanity.io/images/3vte03iz/production/fdcb516c840afca7e81dd9c22280046858bab0e4-1500x1500.jpg?auto=format&w=300&h=300',
      images: [
        'https://cdn.sanity.io/images/3vte03iz/production/f5b9a92b0ebf98dcb80137b669c55d3e376a916b-3110x3110.jpg?auto=format&w=400&h=400',
      ],
    },
    {
      img: 'https://cdn.sanity.io/images/3vte03iz/production/4e95751e90d0c6a9d9027120a92e95022348ed3f-2160x2160.png?auto=format&w=300&h=300',
      images: [
        'https://cdn.sanity.io/images/3vte03iz/production/bdf3323d1f98cdfb4ee9d7a9167eae7c378f21be-3000x3000.gif?auto=format&w=1000&h=1000',
      ],
    },
    {
      img: 'https://cdn.sanity.io/images/3vte03iz/production/f8d11b3e929d7bbb26ffd0ce6956f32eaa261b79-2048x2048.png?auto=format&w=300&h=300',
      images: [
        'https://cdn.sanity.io/images/3vte03iz/production/8d1e3c1b5194bf632e65f726a28990e6fd401e41-2048x2048.png?auto=format&w=400&h=400',
      ],
    },
    {
      img: 'https://cdn.sanity.io/images/3vte03iz/production/c9e0c0332346ea0e8031e53baa38cc69d44cb21f-2711x2711.png?auto=format&w=300&h=300',
      images: [
        'https://cdn.sanity.io/images/3vte03iz/production/1a8dff70c13c533e2cee8ab114262dd46d25ba22-5000x3333.jpg?auto=format&w=1000&h=1000',
      ],
    },
    { 
      img: 'https://cdn.sanity.io/images/3vte03iz/production/3934c5000d7d4a36a249cd915464ead82672804b-2381x2381.jpg?auto=format&w=300&h=300',
      images: [
        'https://cdn.sanity.io/images/3vte03iz/production/6b0e750935b1672e6f4bd24ffdbb6ca04e5466b0-1736x1736.png?auto=format&w=1000&h=1000',
      ],
    },
    {
      img: 'https://cdn.sanity.io/images/3vte03iz/production/f52e1a998c6e4b34773ef48ea18f8c9b8472efbc-2989x2989.png?auto=format&w=300&h=300',
      images: [
        'https://cdn.sanity.io/images/3vte03iz/production/f52e1a998c6e4b34773ef48ea18f8c9b8472efbc-2989x2989.png?auto=format&w=300&h=300',
      ],
    },
    {
      img: 'https://cdn.sanity.io/images/3vte03iz/production/3370a74894861bc352ae02dd28b3263950638065-2500x2500.png?auto=format&w=300&h=300',
      images: [
        'https://cdn.sanity.io/images/3vte03iz/production/3370a74894861bc352ae02dd28b3263950638065-2500x2500.png?auto=format&w=300&h=300',
      ],
    },
    {
      img: 'https://cdn.sanity.io/images/3vte03iz/production/c6b80d2852d439cb1eae43d8d9ef5044bab1b3ce-3000x3000.png?auto=format&w=300&h=300',
      images: [
        'https://cdn.sanity.io/images/3vte03iz/production/c6b80d2852d439cb1eae43d8d9ef5044bab1b3ce-3000x3000.png?auto=format&w=300&h=300',
      ],
    },
    {
      img: 'https://cdn.sanity.io/images/3vte03iz/production/91c4fe5c869724fc66d504f5226756b34aaf42a1-1625x1625.png?auto=format&w=300&h=300',
      images: [
        'https://cdn.sanity.io/images/3vte03iz/production/91c4fe5c869724fc66d504f5226756b34aaf42a1-1625x1625.png?auto=format&w=300&h=300',
      ],
    },
    {
      img: 'https://cdn.sanity.io/images/3vte03iz/production/c486c7b168edd71a7d95b7ef6b87fe4107584689-2160x2160.png?auto=format&w=300&h=300',
      images: [
        'https://cdn.sanity.io/images/3vte03iz/production/c486c7b168edd71a7d95b7ef6b87fe4107584689-2160x2160.png?auto=format&w=300&h=300',
      ],
    },
    {
      img: 'https://cdn.sanity.io/images/3vte03iz/production/159c2c4d94d9a15aee2a811508b48b097811b0be-3000x3000.gif?auto=format&w=300&h=300',
      images: [
        'https://cdn.sanity.io/images/3vte03iz/production/159c2c4d94d9a15aee2a811508b48b097811b0be-3000x3000.gif?auto=format&w=300&h=300',
      ],
    },
    {
      img: 'https://cdn.sanity.io/images/3vte03iz/production/0045c4a002b1545841387859bc3819f140227548-2559x2559.gif?auto=format&w=300&h=300',
      images: [
        'https://cdn.sanity.io/images/3vte03iz/production/0045c4a002b1545841387859bc3819f140227548-2559x2559.gif?auto=format&w=300&h=300',
      ],
    },


 

  ];



  return (
    <div className="Morworkcars">
      {imgs.map((elem, index) => (
        <div key={index} onClick={() => clickHandler(elem.images)} className="morecards">
          <img src={elem.img} alt="my images" />
        </div>
      ))}
      
      {isModalOpen && (
        <div className="modal">
          
          <div className="modal-content">
          <div className="close-button" onClick={() => deletehandler()} >
              <ImCross />
            </div>


            <div className="image-gallery">
            

              {selectedImages.map((img, index) => (
                <img key={index} src={img} alt={`image-${index}`} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Moreworkcards;
