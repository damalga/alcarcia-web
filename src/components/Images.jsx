import React, { useState } from "react";

import images from '../data/images.json';
export default function SimpleCarousel() {
  const [current, setCurrent] = useState(0);

  // Funciones para avanzar y retroceder
  const prev = () => setCurrent((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  const next = () => setCurrent((prev) => (prev < images.length - 1 ? prev + 1 : 0));

  return (
    <div className="images-carousel">
      <h4 className="images-title">Images</h4>
      {/* Botones */}
      <div className="controls">
        <button className="prev" onClick={prev} aria-label="Previous">{`◀`}</button>
        <button className="next" onClick={next} aria-label="Next">{`▶`}</button>
      </div>
      {/* Imagen principal */}
      <div className="main-image">
        <img
          src={images[current].src}
          alt={images[current].alt}
          style={{ width: "100%", height: "auto", display: "block" }}
        />
      </div>
      {/* ALT / descripción */}
      <div className="alt-text">
        {images[current].alt}
      </div>
    </div>
  );
}
