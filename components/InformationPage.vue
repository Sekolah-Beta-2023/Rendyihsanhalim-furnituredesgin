<template>
    <div class="information-container">
        <div class="information">


            <div class="information__text">
                <div class="information__title">
                    <h1 class="information__title1">Finest Home</h1>
                    <h1 class="information__title2">Why Furnish ? </h1>
                </div>
                <p class="information__description"><strong>To create better homes</strong>,we need to know the challanges
                    people are facing in their everyday lives.</p>


                <div class="information__criteria">

                    <p class="information__critext">
                        <i class="fa-solid fa-chair information__icons-big" style="color: #002566;"></i>
                        We create a furnish with the Best Material

                    </p>

                    <p class="information__critext">
                        <i class="fa-solid fa-couch information__icons" style="color:#002566;"></i>
                        Our furniture have the most trendy looks

                    </p>
                    <p class="information__critext ">
                        <i class="fa-solid fa-door-open information__icons" style="color:#002566;"></i>
                        We Provide 100% Guarantee in our furniture

                    </p>

                </div>
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
    margin: 0 1.5rem;
    padding-top: 5.5rem;
}

.information {
    display: grid;
    grid-template-rows: repeat(2, max-content);
    row-gap: 2.5rem;
}

.information__text {
    width: 300px;
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
    font-family: "Poppins";
    font-weight: 400;
}

.information__title1 {
    font-size: 1.5rem;
    color: rgb(94, 94, 94);
}

.information__title2 {
    font-size: 2rem;
    color: rgb(94, 94, 94);
}

.information__image {
    position: relative;
    height: 400px;
}

.information__image1 {
    background-image: url('~assets/img/Logo/Inspiration_image_3.jpg');
    /* ~assets mengacu pada folder assets dalam proyek Nuxt */
    background-size: cover;
    background-repeat: center;
    width: 250px;
    height: 300px;
    position: absolute;
    left: 50px;

}

.information__image2 {
    background-image: url('~assets/img/Logo/Inspiration_image_2.jpg');
    /* ~assets mengacu pada folder assets dalam proyek Nuxt */
    background-size: cover;
    background-repeat: center;
    width: 200px;
    height: 300px;
    position: absolute;
    top: 80px;

}

.information__description {
    font-size: 0.98rem;
    line-height: 1.5rem;
    margin-bottom:1rem;

}

.information__criteria {
    display: grid;
    row-gap: 1rem;
}

.information__critext{
    display:inline-flex;
    column-gap:0.6rem;
    font-size:0.98rem;
}

.information__icons{
font-size: 0.75rem;
margin-top: 0.5rem;
}

.information__icons-big{
    margin-left:0.15rem;
    font-size: 1.1rem;
    margin-top: 0.5rem;
}
/*=============== BREAKPOINTS ===============*/
/* For small devices */
@media screen and (max-width: 320px) {
    .information-container {
        margin: 0 1rem;
        padding-top: 10.5rem;
    }

    .information__image1 {

        width: 220px;
        height: 300px;
        position: absolute;
        left: 30px;

    }

    .information__image2 {
        width: 200px;
        height: 300px;
        position: absolute;
        top: 80px;

    }
}

/*=============== BREAKPOINTS ===============*/
/* For medium devices */
@media screen and (min-width: 576px) {
    .information__text {
        width: 500px;
    }

    .information__title1 {
        font-size: 2.5rem;
    }

    .information__title2 {
        font-size: 3.5rem;

    }

    .information__image {
        margin: 0 auto;
    }

    .information__image1 {

        width: 220px;
        height: 300px;
        position: absolute;
        left: 30px;

    }

    .information__image2 {
        width: 170px;
        height: 300px;
        position: absolute;
        top: 80px;

    }

}

/* For large devices */
@media screen and (min-width: 767px) {

    .information-container {
        margin: 0 1.5rem;
        padding-top: 0rem;
    }

    .information__text {
        width: 80%;
    }

    .information__description {
        font-size: 1.25rem;
        line-height: 1.8rem;
    }

    .information__image {
        height: max-content;
    }

    .information__image1 {

        width: 420px;
        height: 300px;
        position: absolute;
        left: -30px;

    }

    .information__image2 {
        width: 370px;
        height: 300px;
        position: absolute;
        top: 80px;
        right: 60px;

    }
}

@media screen and (min-width: 992px) {
    .information {
        display: grid;
        grid-template-columns: repeat(2, max-content);
        column-gap: 2.5rem;
    }

    .information__text {
        width: 350px;
    }

    .information__image {
        height: max-content;
    }

    .information__image1 {

        width: 420px;
        height: 300px;
        position: absolute;
        left: 120px;
        top: 10px;
    }

    .information__image2 {
        width: 370px;
        height: 300px;
        position: absolute;
        top: 100px;
        right: -120px;

    }

}

/* For large devices */
@media screen and (min-width: 1024px) {
    .information-container {
        margin: 0 3.5rem;
    }

    .information {
        display: grid;
        grid-template-columns: repeat(2, max-content);
        column-gap: 5.5rem;
    }

    .information__text {
        width: 500px;

    }

    .information__image2 {

        position: absolute;
        top: 100px;
        right: -350px;

    }

}</style>