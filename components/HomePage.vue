<template>
      <section class="home">
        <div class="home__container">
            <img src="~/assets/img/Sofa/SOFAHOME.png" class="home__img" alt="">


            <div class="home__text">
              <h1 class="home__title">The Creative<br>Space Edition.</h1>

              <p class="home__description">Minimalist as you can and see your future furniture here </p>

              <a href="" class="button__home button_flex">
                Explore <i class="fa-solid fa-arrow-right button__icon"></i>
              </a>

            </div>
            <div class="home__social">
              <span class="social__follow">Follow Us</span>
              <div class="social__menu">
                  <a href="" class="social__link"><i class="fa-brands fa-instagram"></i></a>
                  <a href="" class="social__link"><i class="fa-brands fa-github"></i></a>
                  <a href="" class="social__link"><i class="fa-brands fa-linkedin"></i></a>
              </div>
            </div>
          </div>
      </section>
</template>
  
  <style scoped>

  .home{
    margin-inline: 2rem;
    padding-top:4rem;
  }

  .home__container{
    display:grid;
    grid-template-rows: repeat(2,max-content);
    row-gap: 2rem;
    position:relative;
  }

  .home__img{
    width:300px;
    filter: drop-shadow(5px 5px 10px rgb(209, 209, 209));
    justify-self: center;
  }

  .home__text{
    font-family: "Poppins";
  }

  .home__title{
    font-size: 2.5rem;
    color:rgb(0, 0, 0);
    font-weight: 600;
    margin-bottom: 1rem;
    line-height: 4rem;
  }

  .home__description{
    font-size:1.25rem;
    margin-bottom: 3rem;
    line-height:1.75rem;
  }

  .button__home{
    display:inline-block;
    background-color:rgb(29, 29, 49);
    color:white;
    padding:1rem 1.75rem;
    border-radius: .5rem;
    font-weight: 400;
    transition:.3s;
    cursor: pointer;

  }

  .button__home:hover{
    background-color: rgb(21, 21, 68)
  }

  .button__icon{
    transition:.3s;
  }

  .button__home:hover .button__icon{
    transform:translateX(.5rem);
  }

  .button_flex{
    display:inline-flex;
    align-items:center;
    column-gap:.5rem;
  }

  .home__social{
    position:absolute;
    top:2rem;
    right:-2rem;
    display:grid;
    justify-items: center;
    row-gap :3.5rem;
  }
  .social__follow{
    font-weight: 400;
    font-size: 1rem;
    color:rgb(21, 21, 68);
    transform: rotate(90deg);
    font-family: "Poppins";
    position:relative;
  }

  .social__link{
    color:black;
    font-size: 1rem;
  }
  .social__menu{
    display:inline-flex;
    flex-direction: column;
    row-gap:.25rem;
    justify-content: center;
    align-items: center;
    justify-self: center;
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
    left: 80px;
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
  