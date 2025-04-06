import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useState } from "react";
import { ImCross } from "react-icons/im";

const Featuredwork = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showcase = (item) => {
    setSelectedItem(item); // Store full object
    setIsModalOpen(true);
  };

  const obj = [
    {
      h1: "Shake Shack",
      paragrah: "Mural design and installations from California to Kuwait",
      img: "https://cdn.sanity.io/images/3vte03iz/production/3934c5000d7d4a36a249cd915464ead82672804b-2381x2381.jpg?auto=format&w=500&h=500",
      button: "Shakesshack",
    },
    {
      h1: "Jaffa",
      paragrah: `Packaging and campaign for Jaffa, Tesco's  private label fruit company. Along with Earthling Studio, we created packaging for over 20 SKU's and created assets to be used across their marketing channels`,



      img: "https://cdn.sanity.io/images/3vte03iz/production/bdf3323d1f98cdfb4ee9d7a9167eae7c378f21be-3000x3000.gif?auto=format&w=300&h=300",
      button: "Jaffa",
    },
    {
      h1: "Cuified Book",
      paragrah: `Done in collaboration with the Melbourne Racing Club, I created a suite of illustrations for the Spring Racing Carnival. Work was used for promotional materials including a TV commercial, mural installation and web design.
`,



      
      img: "https://cdn.sanity.io/images/3vte03iz/production/96fdc45bff981adf38b2fb9fc29d514a3f7ef3d2-1684x1684.jpg?auto=format&w=300&h=300",
      button: "Cuified book",
    },
    {
      h1: "Frugo",
   

      img: "https://cdn.sanity.io/images/3vte03iz/production/b2a1e3e396f2921ea5c5c1f33edad7d141bbed98-2048x2048.gif?auto=format&w=300&h=300",
      button: "Frugo",
    },
    {
      h1: "Bromption",
      paragrah: 'Mixed media pieces to promote Bromptons release of their new lilac-colored bike along with large scale prints to be featured in their new West Village location',

      img: "https://cdn.sanity.io/images/3vte03iz/production/159c2c4d94d9a15aee2a811508b48b097811b0be-3000x3000.gif?auto=format&w=300&h=300",
      button: "Bromption",
    },
    {
      h1: "260 Collins",
  
      paragrah: 'Work created along with Pom Pom Studio welcoming Melbournes boldest shopping centre yet.',


      img: "https://cdn.sanity.io/images/3vte03iz/production/c9e0c0332346ea0e8031e53baa38cc69d44cb21f-2711x2711.png?auto=format&w=500&h=500",
      button: "260 collins",
    },
  ];

  return (
    <div className="Featuredwork">
      <div className="Featuredworktop">
        <h1>Featured Work</h1>
        <h5>Select recent and notable projects</h5>
      </div>
      <div className="Featuredbottom">
        <Swiper
          watchSlidesProgress={true}
          slidesPerView={3}
          spaceBetween={20}
          className="mySwiper"
        >
          {obj.map((elem, index) => (
            <SwiperSlide key={index}>
              <div className="slide">
                <div className="imagesection">
                  {elem.img ? <img src={elem.img} alt={elem.h1} /> : null}
                </div>
                <button onClick={() => showcase(elem)}>{elem.button}</button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Modal */}
      {isModalOpen && selectedItem && (
        <div className="modal">
          <div className="modal-content" id="modal-content">
            <h2>{selectedItem.h1}</h2> 
            <p>{selectedItem.paragrah}</p> 
            <img src={selectedItem.img} alt={selectedItem.h1} />
          
            
             <div className="close-button" onClick={() => setIsModalOpen(false)} >
                          <ImCross />
                        </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Featuredwork;
