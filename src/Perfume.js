import React from "react";
import "./Perfume.css";
import Product from "./Product";

function Perfume() {
  return (
    <div className="perfume">
      <div className="perfume__container">
        <div className="perfume__row">
          <Product
            id="p11"
            title="Franck Olivier Oud Touch Perfume 100ml"
            image="https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/17/153217/1.jpg?8574"
            rating={3}
            price={5100}
          />
        </div>

        <div className="perfume__row">
          <Product
            id="P21"
            title="OUD 24 Hours ARABIAN EDP 100ml Plus A Free Spray Perfume Men, Women EDP"
            image="https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/38/638576/1.jpg?2027"
            rating={5}
            price={5600}
          />
        </div>

        <div className="perfume__row">
          <Product
            id="P31"
            title="Fragrance World ZARA MAN, EAU DE PERFUM FOR MEN"
            image="https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/81/540466/1.jpg?7625"
            rating={4}
            price={9000}
          />
        </div>

        <div className="perfume__row">
          <Product
            id="P41"
            title="Temptation EAU DE PARFUM TEMPTATION 100ML FOR MEN"
            image="https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/43/083707/1.jpg?7242"
            rating={4}
            price={2000}
          />
        </div>

        <div className="perfume__row">
          <Product
            id="P21"
            title="Afnan Supremacy Silver For Men EDP 100ml Long Lasting Perfume"
            image="https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/54/407617/1.jpg?1459"
            rating={5}
            price={4300}
          />
        </div>

        <div className="perfume__row">
          <Product
            id="P22"
            title="Hugo Boss BOTTLED INTENSE"
            image="https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/44/059164/1.jpg?3805"
            rating={5}
            price={32000}
          />
        </div>

        <div className="perfume__row">
          <Product
            id="P23"
            title="Suave Fragrance World Suave Perfume - EDP - 100ML"
            image="https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/27/650485/1.jpg?8226"
            rating={3}
            price={5750}
          />
        </div>

        <div className="perfume__row">
          <Product
            id="P24"
            title="Franck Olivier Oud Vanille + Oud Touch (2 In 1) - 2 ×100ml Combo Pack"
            image="https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/31/91059/1.jpg?0993"
            rating={5}
            price={18500}
          />
        </div>

        <div className="perfume__row">
          <Product
            id="P31"
            title="Arabian Mystery For Men EDP - 100ml"
            image="https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/83/789034/1.jpg?3358"
            rating={4}
            price={5000}
          />
        </div>

        <div className="perfume__row">
          <Product
            id="P32"
            title="Lattafa Najdia With Free Spray Edp 100ml"
            image="https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/23/292865/1.jpg?0497"
            rating={3}
            price={4000}
          />
        </div>

        <div className="perfume__row">
          <Product
            id="P33"
            title="Franck Olivier White Touch Long Lasting Perfume EDP_100ml!"
            image="https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/68/957717/1.jpg?7146"
            rating={3}
            price={9000}
          />
        </div>

        <div className="perfume__row">
          <Product
            id="P34"
            title="Hugo Boss BOTTLED NIGHT"
            image="https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/08/059164/1.jpg?3826"
            rating={5}
            price={26000}
          />
        </div>
      </div>
    </div>
  );
}

export default Perfume;
