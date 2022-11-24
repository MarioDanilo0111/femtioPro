import React from "react";

import { TiInputCheckedOutline } from "react-icons/ti";

import { Carousel } from "react-bootstrap";

import "./StorIdea.css";

const StorIdea = () => {
  return (
    <div className="container-idea">
      <div className="header-idea">
        <div className="top-cont">
          <div className="carousel">
            <>
              <Carousel fade>
                <Carousel.Item>
                  <img
                    className="d-block w-100 img-storeIdea"
                    src="../../caru/coop-matsvinn.jpeg"
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100 img-storeIdea"
                    src="../../caru/matsvin.jpeg"
                    alt="Third slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100 img-storeIdea"
                    src="../../caru/fruktogront.webp"
                    alt="First slide"
                  />
                </Carousel.Item>
              </Carousel>
            </>
          </div>
        </div>
        <div className="first-text">
          <h1>
            Vi Publicerar åt butiker
            <br />
            som tänker likadant som vi
            <br />
            och vill göra allt
            <br />
            för att slippa slänga i onödan
          </h1>
        </div>
        <br />
        <br />
        <div className="second-text">
          <h2> idén med denna tjänsten</h2>
          <div className="check-items-section">
            <div className="item">
              <TiInputCheckedOutline className="check-item" />
              <p>minimera skräp i våran omgivning</p>
            </div>
            <div className="item">
              <TiInputCheckedOutline className="check-item" />
              <p>ta hand om matsvineriet</p>
            </div>
            <div className="item">
              <TiInputCheckedOutline className="check-item" />
              <p>hjälpa till med sparandet</p>
            </div>
          </div>
        </div>
        <div className="third-part">
          <h2>Om oss:</h2>

          <p>
            Klimatförändring och förstöring av miljön är det största dilemman vi
            som samhelle har framför oss. Detta är något som påverka alla i
            världen. Vi har valt att hjälp vår värld med en liten smula.
          </p>
          <br />

          <div className="int-two">
            <h5>Undersökningar visar att</h5>
            <p className="citat">
              ” Livsmedelsprodukter står för 15 procent av all växthusgasutsläp.
              Matprodukter sprider med sig gifter, och att de kräver en stor
              mängd vatten för att kunna bearbeat alla föroreningar. Detta
              orsakar övergödning och försurning av mark och sjöar som i sin tur
              drabar djur och andra organismer i våran ekologiskta system”
            </p>
            <a
              href="https://www.livsmedelsverket.se/matvanor-halsa--miljo/matsvinn"
              rel="noreferrer"
              target="_blank"
              className="link-storIdea"
            >
              <h4>livsmedelsverket.se</h4>
            </a>
            <br />
          </div>
          <div className="int-tree">
            <p>
              Vad vi har valt att göra är att samarbeta med alla de stora
              producenter och mat butiks affärer som vill och har samma ide, att
              tillsammans undvika slänga livsmedelsprodukter i onödan och göra
              det enklare och biligare för våra förbrukare att hitta rättar
              varor. Samtidigt komma överens med försäljarna att lägga
              produkterna på rimliga priser. Vi vill att de ska kunna köpa varor
              som är i bra kondition. Att du ska snabbt med denna appen hitta de
              närmaste butiker som har det du söker. Säkerhetsställa att du får
              en produkt i de förväntade littstånd.
            </p>
          </div>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default StorIdea;
