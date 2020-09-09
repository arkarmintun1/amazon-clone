import React, { useState, useEffect } from 'react';
import './Home.css';
import Product from './Product';
import axios from './axios';
import Grid from '@material-ui/core/Grid';

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('/api/products').then((response) => {
      setProducts(response.data.data);
    });
    console.log(products);
  }, []);

  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
        <Grid container>
          {products.map((product, index) => (
            <Grid item xs={4}>
              <Product
                id="1231"
                title={product.title}
                price={product.price}
                rating={5}
                image={`http://localhost:4000/${product.images[0]}`}
              />
            </Grid>
          ))}
        </Grid>
        {/* <div className="home__row">
          <Product
            id="1231"
            title="Apple Watch Series 3 (GPS, 42mm) - Space Grey Aluminium Case with Black Sport Band"
            price={20}
            rating={5}
            image="https://images-eu.ssl-images-amazon.com/images/I/41RLXO5JUhL._AC_SX368_.jpg"
          />
          <Product
            id="1232"
            title="Apple Watch Series 3 (GPS, 42mm) - Space Grey Aluminium Case with Black Sport Band"
            price={20}
            rating={5}
            image="https://images-eu.ssl-images-amazon.com/images/I/41RLXO5JUhL._AC_SX368_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="1233"
            title="Apple Watch Series 3 (GPS, 42mm) - Space Grey Aluminium Case with Black Sport Band"
            price={20}
            rating={5}
            image="https://images-eu.ssl-images-amazon.com/images/I/41RLXO5JUhL._AC_SX368_.jpg"
          />
          <Product
            id="1234"
            title="Apple Watch Series 3 (GPS, 42mm) - Space Grey Aluminium Case with Black Sport Band"
            price={20}
            rating={5}
            image="https://images-eu.ssl-images-amazon.com/images/I/41RLXO5JUhL._AC_SX368_.jpg"
          />
          <Product
            id="1235"
            title="Apple Watch Series 3 (GPS, 42mm) - Space Grey Aluminium Case with Black Sport Band"
            price={20}
            rating={5}
            image="https://images-eu.ssl-images-amazon.com/images/I/41RLXO5JUhL._AC_SX368_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="1236"
            title="Apple Watch Series 3 (GPS, 42mm) - Space Grey Aluminium Case with Black Sport Band"
            price={20}
            rating={5}
            image="https://images-eu.ssl-images-amazon.com/images/I/41RLXO5JUhL._AC_SX368_.jpg"
          />
        </div> */}
      </div>
    </div>
  );
}

export default Home;
