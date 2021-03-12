import './App.css';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const imageList = [{url: "https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/jrfyzvgzvhs1iylduuhj.jpg", name: "Hong Kong"},
{url: "https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/c1cklkyp6ms02tougufx.webp", name: "Singapore"},
{url: "https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/e8fnw35p6zgusq218foj.webp", name: "Japan"},
{url: "https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/liw377az16sxmp9a6ylg.webp", name: "Las Vegas"}];

let styles = {
  margin: 'auto',
  width: '500px'
};

/* Use this data to create an array of objects that you loop through
to create the carousel. 

Hong Kong: https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/jrfyzvgzvhs1iylduuhj.jpg
Singapore: https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/c1cklkyp6ms02tougufx.webp
Japan:     https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/e8fnw35p6zgusq218foj.webp
Las Vegas: https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/liw377az16sxmp9a6ylg.webp

Use the react-responsive-carousel package to create the Carousel: 
https://www.npmjs.com/package/react-responsive-carousel


*/

const Carsl = (props) => {
  return (
    <div style={styles}>
      Welcome to the Carousel..
      <Carousel>
          { imageList.map(image => <div> <img src={image.url} alt={image.name} /></div>) }
      </Carousel>
    </div>
  )
}
export default Carsl;