import React from 'react';

function Gallery() {
  return (
    <div className="gallery">
    <div className="box box-1"  style={{backgroundImage: "url(./gallery/Snow.jpeg)"}}>Traveling</div>
    <div className="box box-2"  style={{backgroundImage: "url(./gallery/ParaGliders.jpeg)"}}>Paragliding</div>
    <div className="box box-3"  style={{backgroundImage: "url(./gallery/SunSet.jpeg)"}}>Sunset</div>
    <div className="box box-4"  style={{backgroundImage: "url(./gallery/Trees.jpg)"}}>Snow</div>
    <div className="box box-5"  style={{backgroundImage: "url(./gallery/Trekking.jpeg)"}}>Trekking</div>
    <div className="box box-6"  style={{backgroundImage: "url(./gallery/RockCutTemple.jpeg)"}}>Exploring</div>
    <div className="box box-7"  style={{backgroundImage: "url(./gallery/RockClimbing.jpeg)"}}>Mountaineering</div>
 </div>
  )
}

export default Gallery;