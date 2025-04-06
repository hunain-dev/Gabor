import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const Location = useLocation();
  const isaboutpage = Location.pathname === '/Aboutus';
    const obj = [
      {
           icon: `/Assets/images/man.png`,

        
      },
      
    ];
    return (
      <> 
            <div className="Header">
        {obj.map((elem, index) => (
          <>
          <div className="left">
          </div>
            <div key={index} className="end">
              <div className="icon">
              <Link to={isaboutpage ? '/' :'/Aboutus'}><img src={elem.icon} alt="elemicons" /></Link>  
              </div>              
            </div>
          </>
        ))}
      </div>
      </>

    );
  };
  
  export default Header;
  