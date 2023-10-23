<template>
  <header class="header" :class="{ 'blur__header': isHeaderBlurred }" id="header">
    <nav class="nav container">
      <a class="nav__logo">
        <img class="nav__img" src="~/assets/img/Logo/IKEA-Logo-1967.png" alt="" />
      </a>

      <div class="nav__menu" :class="{ 'show-menu': isMenuVisible }">
        <ul class="nav__list">
          <li class="nav__item">
            <nuxt-link to="/" class="nav__link">Home</nuxt-link>
          </li>
          <li class="nav__item">
            <nuxt-link to="/Product" class="nav__link">Product</nuxt-link>
          </li>
          <li class="nav__item">
            <a class="nav__link">Inspiration</a>
          </li>
          <li class="nav__item">
            <a class="nav__link">About Us</a>
          </li>
        </ul>

        <!-- LOGIN NAVCART -->
        <div class="nav__logincart">
          <button v-if="!user" class="nav__login">
            <nuxt-link to="/Signin"> Sign In</nuxt-link>
          </button>
          <span v-else>
            <nuxt-link to="/Profile" class="nav__link">{{ this.username }}</nuxt-link>
          </span>
          <a class="nav__cart"><i class="fa-solid fa-cart-shopping"></i></a>
        </div>

        <!-- CLOSE BUTTON -->
        <div class="nav__close" @click="hideMenu" id="nav-close">
          <i class="fa-solid fa-xmark"></i>
        </div>
      </div>

      <!-- TOGGLE BUTTON -->
      <div class="nav__toggle" @click="toggleMenu" id="nav-toggle">
        <i class="fa-solid fa-bars"></i>
      </div>
    </nav>
  </header>
</template>

<script src="~/assets/js/main.js"></script>

<script>
import { supabase } from '~/utils/supabase';

export default {
  data() {
    return {
      isMenuVisible: false,
      isHeaderBlurred: false,
      user: null,
      username: '',
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuVisible = !this.isMenuVisible;
    },
    hideMenu() {
      this.isMenuVisible = false;
    },
    handleScroll() {
      this.isHeaderBlurred = window.scrollY >= 40;
    },
    async fetchUser() {
      try {
        const { data } = await supabase.auth.getUser();
        this.user = data.user ?? null;

        if (this.user) {
          // Splitting email to get username
          const emailParts = this.user.email.split('@');
          this.username = emailParts[0];

          // Insert data to Profil table
          const { data: insertedData, error } = await supabase
            .from('Profil')
            .upsert([
              {
                uuid: this.user.id,
                username: username,
                email: this.user.email,
                
                // Add other fields as needed
              },
            ]);

          if (error) {
            console.error('Error inserting data into Profil:', error.message);
          } else {
            console.log('Inserted data into Profil:', insertedData);
          }
        }
      } catch (error) {
        console.error('Error fetching user:', error.message);
      }
    },
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
    this.fetchUser(); // Call fetchUser on mount
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
};
</script>



<style scoped>
.container {
    max-width: 1122px;
    margin-inline: 2.25rem;
}

.grid {
    display: grid;
}

/*add blur header */
.blur__header::after {
    content: "";
    position: absolute;
    width: 1000%;
    height: 100%;
    background-color: rgba(rgb(255, 255, 255), .2);
    top: 0;
    left: 0;
    z-index: -1;
    backdrop-filter: blur(32px);
    -webkit-backdrop-filter: blur(32px);
}

/*=============== HEADER & NAV ===============*/
.header {
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 100;
    transition: box-shadow .4s;

}

.nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 3.5rem;
}

.nav__img {
    width: 5rem;
    display: inline-flex;
    filter: drop-shadow();
    background-color: rgba(rgb(255, 255, 255), .2);
    backdrop-filter: blur(32px);
    -webkit-backdrop-filter: blur(32px)
}

.nav__toggle,.nav__close {
    display: flex;
    font-size: 1.25rem;
    color: black;
    cursor: pointer;
}

/* Navigation for mobile devices */
@media screen and (max-width:1023px) {
    .nav__menu {
        width: 80%;
        position: fixed;
        top: 0;
        right: -100%;
        background-color: rgb(248, 247, 247);
        box-shadow: -1px 0 16px hsla(0, 0%, 0%, .1);
        height: 100%;
        padding: 6rem 3rem;
        transition: right .4s;
        text-align: center;
    }

    .nav__logincart {
        margin-top: 3rem;
    }
}

.nav__list {
    display: flex;
    flex-direction: column;
    row-gap: 2.5rem;
}

.nav__link {
    color: black;
    font-family: "Montserrat";
    text-decoration:none;
}

.nav__logincart {
    display: inline-flex;
    column-gap: 3rem;
}

.nav__close {
    position: absolute;
    top: 1.125rem;
    right: 1.5rem;
    color: var(--title-color);
}

.nav__login {
    padding: .5rem 1rem;
    font-family: "Montserrat";
    border-radius: 0.75rem;
    cursor: pointer;
    border-style: none;
    color: black;
    font-weight: 600;
    background-color:white ;
}


.nav__cart {
    display: flex;
    justify-content: center;
    align-items: center;
    width: max-content;
}

/* Show menu */
.show-menu {
    right: 0;
}

/* Add shadow header */
.shadow-header {
    box-shadow: 0 1px 16px hsla(0, 0%, 0%, .1);
}
  /*=============== BREAKPOINTS ===============*/
/* For small devices */

@media screen and (max-width:320px) {
  .container{
    margin-inline: 0.5rem;
  }
}
@media screen and (min-width:576px) {
  .nav__menu{
    width:60%;
  }
}

/* For large devices */
@media screen and (min-width:1023px){
  .nav{
    height: calc(3.5rem+ 2rem);
    width: 100%;
    margin-inline:3rem;
    gap:1.75rem;
  }

  .nav__toggle,.nav__close{
    display: none;
  }
  .nav__menu{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
 .nav__list{
  flex-direction: row;
  column-gap: 4rem;
 }
}
</style>