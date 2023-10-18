<template>
  <section>
    <div class="card-container">
      <div class="card-images">
        <img :src="`https://hjdustasxoxkemutqaao.supabase.co/storage/v1/object/public/` + item.img" :alt="item.name">
      </div>
      <div class="card-page">
        <h1> {{ item.name }}</h1>
        <p>{{ item.description }}</p>
      </div>
      <div class="card-price">
        <p>${{ item.price }}</p>
      </div>
      <a class="delete" @click="deleteItem"><i class="fa-solid fa-x icon"></i></a>
      <a class="addlove" :class="{ 'changecolorlove': !clickActive }" @click="toggleLove"><i class="fa-solid fa-heart"
          :style="{ color: !clickActive ? 'red' : 'black' }"></i></a>
      <nuxt-link :to="{ path: '/Product/editProduct', query: { id: item.id }}" class="edit" ><i class="fa-regular fa-pen-to-square"></i></nuxt-link>
    </div>
  </section>
</template>
  
<script>
import httpClient from '~/utils/httpClient';

export default {
  data() {
    return {
      clickActive: true,
    }
  },
  props: {
    item: Object,
    // Properti untuk mengirimkan notifikasi penghapusan
  },
  methods: {
    async deleteItem() {
      try {
        // Mengirim permintaan penghapusan ke Supabase
        const response = await httpClient(`/rest/v1/Product?id=eq.${this.item.id}`, "DELETE"
        );
        // response= await response
        this.$emit("getData")
        console.log(response)

      } catch (error) {
        console.error('Error deleting item:', error.message);
      }
    },
    toggleLove() {
      this.clickActive = !this.clickActive;
      // Mengirim sinyal ke komponen induk untuk menangani penambahan/pengurangan loveCount
      this.$emit('increaseLoveCount', this.clickActive, this.item.id);
    },
  },
};
</script>
  
  
<style>
.card-container {
  width: 250px;
  height: 350px;
  font-family: "Poppins", sans-serif;
  font-weight: 300;
  box-sizing: border-box;
  margin: 10% 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  display: inline-block;
  position: relative;
}

.card-container img {
  height: 250px;
  width: 80%;
  filter: drop-shadow();
  margin-left: 10px;
  padding-left: 2%;
}


.card-container h1 {
  margin-bottom: 0px;
  height: 5%;
  font-size: small;
  font-weight: 200;
  padding-left: 3%;
}

.card-container p {
  margin-top: 3px;
  height: 5%;
  font-size: small;
  font-weight: 200;
  padding-left: 3%;
}

.delete {
  position: absolute;
  top: 215px;
  left: 5px;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background-color: rgb(206, 193, 193);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  line-height: 1;
}

.addlove {
  position: absolute;
  top: 215px;
  left: 200px;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: linear-gradient(120deg, rgb(189, 185, 185), rgb(139, 119, 123), white);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  line-height: 1;
}

.changecolorlove {
  background: linear-gradient(90deg, rgb(219, 149, 149), pink, white);
}
.edit{
  position:absolute;
  top:5px;
  left:5px;
  width:3rem;
}
.icon {
  padding: 5px;
  text-align: center;
}</style>