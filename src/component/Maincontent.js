import pic from "./images/VEGANHOF-FULL.png"

const Maincontent = () => {
  const containerStyle = {
   
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    
    width: '100%',
    height: '85vh',
    justifyContent: 'center',
  };

  return (
    <img src={pic} alt="Image" style={containerStyle} />
  );
};



export default Maincontent;