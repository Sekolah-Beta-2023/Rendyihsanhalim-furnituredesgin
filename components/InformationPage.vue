<template>
    <div class="information-container">
        <div class="information">
            <div class="information__text">
                <div class="information__title">
                    <h1 class="information__title1">Finest Home</h1>
                    <h1 class="information__title2">Furnishings</h1>
                </div>
                <p class="information__description"><strong>To create better homes</strong>,we need to know the challanges
                    people are facing in their everyday lives. The world is changing ,faster than ever before,and so are
                    people's need and dream</p>
            </div>

            <div class="information__image">
                <div class="information__image1"></div>

                <div class="information__image2"></div>
            </div>

        </div>
    </div>
</template>


<style scoped>
.information-container {
    margin-inline: 2.25rem;
}

.information {
    display: grid;
    grid-template-rows: repeat(2, max-content);
    row-gap: 2.5rem;
}

.information__text {
    width: 250px;
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
    font-family: "Poppins";
    font-weight: 400;
}

.information__title1{
    font-size: 1.5rem;
    color:rgb(94, 94, 94);
}

.information__title2{
    font-size:2.5rem;
    color:rgb(94, 94, 94);
}

.information__image {
    position: relative;
    width: 300px;
}

.information__image1 {
  background-image: url('~assets/img/Logo/Inspiration_image_3.jpg'); /* ~assets mengacu pada folder assets dalam proyek Nuxt */
  background-size: cover;
  background-repeat: center;
  width: 250px;
  height: 300px;
  position:absolute;
  left:50px;
  
}
.information__image2 {
  background-image: url('~assets/img/Logo/Inspiration_image_2.jpg'); /* ~assets mengacu pada folder assets dalam proyek Nuxt */
  background-size: cover;
  background-repeat: center;
  width: 200px;
  height: 300px;
  position:absolute;
  top:80px;
  
}
.information__description {
    font-size: 0.98rem;
    line-height: 1.5rem;
}
</style>