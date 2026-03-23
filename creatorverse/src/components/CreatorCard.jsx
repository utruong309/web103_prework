import { Link } from "react-router-dom";


function CreatorCard({ creator }) {
  return (
    <div style={{ border: "1px solid gray", padding: "1rem", margin: "1rem" }}>
      
      {creator.imageURL && (
        <img src={creator.imageURL} alt={creator.name} width="200" /> //conditional rendering == if 
      )} 

      <h2>{creator.name}</h2> 
      <p>{creator.description}</p>

      <a href={creator.url} target="_blank">Visit</a>
      <br />
      <Link to={`/creator/${creator.id}`}>
        <h2>{creator.name}</h2>
      </Link>
    </div>
    
  );
}

export default CreatorCard;