import React from "react";
import "./Bags.css";
import Product from "./Product";

function Bags() {
  return (
    <div className="bags">
      <div className="bags__container">
        <div className="bags__row">
          <Product
            id="B11"
            title="Franck Olivier Oud Touch bags 100ml"
            image="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/32/545695/1.jpg?5729"
            rating={3}
            price={5100}
          />
          <Product
            id="B12"
            title="OUD 24 Hours ARABIAN EDP 100ml Plus A Free Spray bags Men, Women EDP"
            image="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/08/514636/1.jpg?8810"
            rating={5}
            price={5600}
          />
          <Product
            id="B13"
            title="Fragrance World ZARA MAN, EAU DE PERFUM FOR MEN"
            image="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/94/630406/1.jpg?8141"
            rating={4}
            price={9000}
          />
          <Product
            id="B14"
            title="Temptation EAU DE PARFUM TEMPTATION 100ML FOR MEN"
            image="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/30/316606/1.jpg?3322"
            rating={4}
            price={2000}
          />
        </div>

        <div className="bags__row">
          <Product
            id="B21"
            title="Afnan Supremacy Silver For Men EDP 100ml Long Lasting bags"
            image="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/93/251096/1.jpg?8424"
            rating={5}
            price={4300}
          />
          <Product
            id="B22"
            title="Hugo Boss BOTTLED INTENSE"
            image="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/74/730406/1.jpg?8141"
            rating={5}
            price={32000}
          />
          <Product
            id="B23"
            title="Suave Fragrance World Suave bags - EDP - 100ML"
            image="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/65/661563/1.jpg?8273"
            rating={3}
            price={5750}
          />
          <Product
            id="B24"
            title="Franck Olivier Oud Vanille + Oud Touch (2 In 1) - 2 ×100ml Combo Pack"
            image="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/11/571127/1.jpg?3504"
            rating={5}
            price={18500}
          />
        </div>

        <div className="bags__row">
          <Product
            id="B31"
            title="Arabian Mystery For Men EDP - 100ml"
            image="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/34/000086/1.jpg?5751"
            rating={4}
            price={5000}
          />
          <Product
            id="B32"
            title="Lattafa Najdia With Free Spray Edp 100ml"
            image="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/96/630406/1.jpg?3026"
            rating={3}
            price={4000}
          />
          <Product
            id="B33"
            title="Franck Olivier White Touch Long Lasting bags EDP_100ml!"
            image="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/78/963433/1.jpg?0904"
            rating={3}
            price={9000}
          />
          <Product
            id="B34"
            title="Hugo Boss BOTTLED NIGHT"
            image="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/26/040796/1.jpg?2473"
            rating={5}
            price={26000}
          />
        </div>
      </div>
    </div>
  );
}

export default Bags;
