<template>
      <div class="container">
        <div class="page">
          <div class="paragraph">
            <h1 class="paragraph1">The Creative
              <br>
              Space Edition
            </h1>
            <p class="paragraph2">Lorem ipsum dolor sit, Sque, tenetur rem alop sie akuiii!</p>
            <div class="explore-container">
              <button class="Explore">Buy Now</button>
            </div>
          </div>
          <img src="~/assets/img/Sofa/SofaAbu.png" alt="">
        </div>
      </div>
</template>
  
  <style scoped>
 .page {
  font-family: "Poppins";
  width: 100%;
  margin: 0;
  display: flex;
  height: 200px;
  font-size: 200px;
  
}
.container{
    padding-top:2rem;
}
.container img {
  position: absolute;
  width: 600px;
  top: 50px;
  left: 620px;
  filter: drop-shadow();
  cursor: pointer;
}

.paragraph {
  padding:3rem 0 0 9rem;
}

.paragraph1 {
  font-weight: 400;
  font-size: 3.5rem;
  color: white;
  display: flex;
}

.paragraph2 {
  font-size: medium;

}

.explore-container {
  display: flex;
  column-gap:5px;
  margin-top: 30px;
 /* Menambahkan margin-top untuk mengatur jarak dari paragraf */
}

.Explore {
  width: 100px;
  height: 30px;
  border-radius: 20px;
  border-style: none;
  background: rgb(112, 102, 102);
  color: white;
  font-family: "Montserrat";
  font-weight: bold;
  cursor: pointer;
}

.Explore:hover {
  width: 120px;
  height: 35px;
  background: white;
  color: #ffd100;
}


  
    @media (min-width: 319px) and (max-width: 576px) {

    .container{
      padding-top: 4rem;
    }
  .container img {
    position: absolute;
    width: 280px;
    top: 250px;
    left: 40px;
  }

  .paragraph {
    width: 100%;
    display:flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding-left: 0px;
  }

  .paragraph1 {
    font-size: 2.5rem;
  }
  .paragraph2{
    padding-top:.85rem;
    font-size: 1rem;
  }

}

@media (min-width: 576px) and (max-width: 768px) {

 
  .container{
      padding-top:4rem;
    }
  .container img {
    position: absolute;
    width: 500px;
    top: 160px;
    left: 100px;
  }

  .paragraph {
    width: 100%;
    display:flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding-left:0;
  }

  .paragraph1 {
    font-size: 3.25rem;
    white-space: nowrap; /* Mencegah teks melompat ke baris baru */
  }
  .paragraph1 br {
    display: none; /* Menyembunyikan tag <br> */
  }
  .paragraph2{
    padding-top:1rem;
    font-size: 1.5rem;
  }

}
@media (min-width: 769px) and (max-width: 1023px) {


  .container img {
    position: absolute;
    width: 500px;
    top: 100px;
    left: 250px;
  }

  .paragraph1 {
    font-size: 3.25rem;
  }
  .paragraph2{
    padding-top:.85rem;
    font-size: 1rem;
  }
}


  </style>
  