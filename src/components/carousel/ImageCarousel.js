import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
import { AccommodationsList } from "../accommodations/AccommodationsList";
import Container from "react-bootstrap/Container";

// let accommodations = [];

// function ImageCarousel() {
//   accommodations = AccommodationsList;
//   return (
//     <Container className="mb-4">
//       {accommodations.map((accommodation) => {
//         const name = accommodation.name;
//         const id = accommodation.id;
//         const desc = accommodation.description;
//         const price = accommodation.price;
//         const image = accommodation.images[0].formats.small.url;
//         return (
//           <Carousel>
//             <Carousel.Item>
//               <img className="d-block w-100" src={image} alt={name} />
//               <Carousel.Caption>
//                 <Link to={`/accommodations/${id}`}>
//                   <h3>{name}</h3>
//                 </Link>
//               </Carousel.Caption>
//             </Carousel.Item>
//           </Carousel>
//         );
//       })}
//     </Container>
//   );
// }

// export default ImageCarousel;
