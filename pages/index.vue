<template>
    <div class="terluar">
        <div class="vh">
            <div id="app">
                <HomePage />
            </div>
        </div>

        <InformationPage />
    </div>
</template>
<style scoped>
#app {
    margin: 0;
    background-position: center;
    width: 100%;
}

.vh {
    background: linear-gradient(180deg,rgba(247, 245, 245, 0.87),rgb(235, 229, 229),white,white);
    height: 100vh;
}
.terluar{
    height:2000px;
}

@media screen and (min-width: 767px) { 
    .vh{
        height: 770px;
    }
}

</style>
