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
    height: 370px;
    margin: 0;
    background-image: url(~/assets/img/Logo/bg.jpg);
    background-position: center;
    width: 100%;
}

.vh {
    height: 100vh;
}

@media (min-width: 319px) and (max-width: 768px) {
    #app {
        height: 420px;
    }

    .vh {
        height:700px;
    }
}

@media (min-width: 769px) and (max-width: 1023px) {
    #app {
        height: 380px;
    }
}
</style>
