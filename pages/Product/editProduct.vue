<template>
    <div class="form-container">
        <form @submit.prevent="editForm">
            <label for="name" >Nama:</label>
            <input type="text" id="name" v-model="formData.name" :placeholder="items.length > 0 ? items[0].name : ''" required>

            <label for="description">Deskripsi:</label>
            <textarea id="description" v-model="formData.description" :placeholder="items.length > 0 ? items[0].description : ''" required></textarea>

            <label for="price">Harga:</label>
            <input type="number" v-model="formData.price" :placeholder="items.length > 0 ? items[0].price : ''" id="price" required>

            <label for="image" class="file-label">Gambar:</label>
            <div class="file-container">
                <input type="file" id="image" @change="handleImageChange" :placeholder="items.length > 0 ? items[0].img : ''" accept="image/*">
            </div>

            <label for="category">Kategori:</label>
            <select id="category" v-model="formData.category" required>
                <option  v-for="category in category" :key="category.id" :value="category.name">{{ category.name }}</option>
            </select>

            <button type="submit">Edit Submit</button>
        </form>
    </div>
</template>
     
<script>
import httpClient from "~/utils/httpClient";

export default {
  data() {
    return {
      category: [],
      productId: "",
      items: [],
      formData: {
        name: "",
        description: "",
        price: "",
        img: null,
        category: ""
      },
    };
  },
  mounted() {
    this.getCategory();
    this.getItems();
    this.productId = this.$route.query.id;
    this.changeEverything();
  },
  methods: {
    async editForm() {
      // Handle form submission logic here
      console.log('Form submitted:', this.formData);
        const pathname = `${Date.now().toString()}.${this.formData.img.type.split("/")[1]}`;
        const file = new FormData();
        file.append("file",this.formData.img);
        const storage = await httpClient(`/storage/v1/object/gambar/${pathname}`,"POST",file,'storage');
        const gambar = await storage.json()
        this.formData.img = gambar.Key
        await httpClient(`/rest/v1/Product?id=eq.${this.productId}`, "PATCH", (this.formData))
        // const response = await httpClient("/rest/v1/Product", "POST", (this.formData))
  
        // const data = await response?.json()
  
        // this.$router.push(`/detail/${data[0]?.id}`)
        this.$router.push(`/product`)
      console.log('Form submitted:', this.formData);
      // ...
    },
    handleImageChange(event) {
      // Handle image change logic here
      console.log(event);
      this.formData.img = event.target.files[0];
    },
    async getCategory() {
      const response = await this.$axios.get("/rest/v1/Category", {
        headers: {
          apikey: process.env.supabaseKey,
        },
      });

      this.category = response?.data;
    },
    async getItems() {
      const response = await this.$axios.get("/rest/v1/Product", {
        headers: {
          apikey: process.env.supabaseKey,
        },
      });

      this.items = response?.data;
      this.items = this.items.filter((item) => item.id === this.productId);
    },
    changeEverything() {
      if (this.items.length > 0) {
        this.formData.name = this.items[0].name;
        console.log(this.items[0])
// Jika Anda ingin mengisi properti lainnya, tambahkan di sini
      }
    },
  },
};
</script>


<style scoped>
.form-container {
    font-family: 'Montserrat', sans-serif;
    max-width: 400px;
    margin: 50px auto;
    background-color: #f9f9f9;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

label {
    display: block;
    margin-bottom: 8px;
    color: #333;
}

input[type="text"],
textarea,
input[type="number"],
input[type="file"],
select {
    width: 100%;
    padding: 12px;
    margin-bottom: 16px;
    border: 1px solid #ddd;
    border-radius: 6px;
    font-family: 'Montserrat', sans-serif;
    transition: border-color 0.3s ease;
}

.file-container {
    position: relative;
}

select:hover {
    cursor: pointer;
}

/* Peningkatan gaya untuk input berjenis file */
input[type="file"] {
    border: none;
    background-color: #f0f0f0;
    padding: 12px;
    border-radius: 6px;
}

input[type="file"]:hover {
    cursor: pointer;
    background-color: #e0e0e0;
}

button {
    background-color: #007BFF;
    color: white;
    padding: 14px 24px;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-family: 'Montserrat', sans-serif;
    transition: background-color 0.3s ease;
}

button:hover {
    background-color: #0056b3;
}
</style>

