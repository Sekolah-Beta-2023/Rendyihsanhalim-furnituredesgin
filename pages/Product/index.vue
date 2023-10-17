<template>
    <section class="flex-section">
        <div class="dropdown-wrapper">
            <div class="search-cart">
                <input type="text" class="form-control" placeholder="Search" v-model="searchQuery">
                <div class="LoveADD">
                    <a class="nav__cart"><i class="fa-solid fa-heart love" style="color: #ff0000;"></i>
                        <span class="count"> {{ loveCount }}</span>
                    </a>
                </div>

            </div>

            <div class="dropdown-left">
                <button class="dropdown-button"> Category</button>
                <div class="dropdown-content">
                    <a @click="backCategory">All</a>
                    <a v-for="category in category" :key="category.id" class="content" href="#"
                        @click="filterCategory(category.name)"> {{ category.name }}</a>
                </div>
                <nuxt-link to="/Product/CreateProduct" class="add-product"> Add Product</nuxt-link>
                <nuxt-link to="/Product/CreateCategory" class="add-category"> Add Category</nuxt-link>

            </div>
        </div>
        <div class="wrap">
            <CardComponent v-for="item in filteredItems" :key="item.id" :item="item" :onDelete="deleteItem"
                @getData="getItems" @increaseLoveCount="increaseLoveCount"/>
        </div>
    </section>
</template>
  
<script>
import CardComponent from '~/components/Card/CardItem.vue';

export default {
    components: {
        CardComponent,
    },
    data() {
        return {
            items: [

            ],

            category: [

            ],
            selectedCategory: '',// Kategori yang dipilih
            searchQuery: '',
            loveCount:0,
        };
    },
    computed: {
        filteredItems() {
            let itemsToDisplay = this.items;

            // Filter items based on selected category
            if (this.selectedCategory) {
                itemsToDisplay = itemsToDisplay.filter(item => item.category === this.selectedCategory);
            }

            // Further filter based on search query
            if (this.searchQuery) {
                const lowerCaseQuery = this.searchQuery.toLowerCase();
                itemsToDisplay = itemsToDisplay.filter(item => item.name.toLowerCase().includes(lowerCaseQuery));
            }

            return itemsToDisplay;
        },
    },

    mounted() {
        this.getItems();
        this.getCategory();
    },

    methods: {
        filterCategory(category) {
            // Fungsi untuk mengatur kategori yang dipilih
            this.selectedCategory = category;
        },
        async getItems() {
            const response = await this.$axios.get("/rest/v1/Product", {
                headers: {
                    apikey: process.env.supabaseKey
                }
            })

            this.items = response?.data
        },

        async getCategory() {
            const response = await this.$axios.get("/rest/v1/Category", {
                headers: {
                    apikey: process.env.supabaseKey
                }
            })

            this.category = response?.data;
        },
        backCategory() {
            this.selectedCategory = ''
        },
        async deleteItem(itemId) {
            try {
                // Kirim permintaan penghapusan ke server Supabase
                await this.$axios.delete(`/rest/v1/Product/${itemId}`, {
                    headers: {
                        apikey: process.env.supabaseKey,
                    },
                });

                // Hapus item dari daftar lokal (jika berhasil dihapus dari server)
                this.items = this.items.filter((item) => item.id !== itemId);
            } catch (error) {
                console.error("Error deleting item:", error.message);
            }
        },

        increaseLoveCount(isLoveActive, itemId) {
      // Memperbarui loveCount berdasarkan status love (ditambah/dikurangkan)
      this.loveCount += !isLoveActive ? 1 : -1;
      // Logika lain yang mungkin diperlukan, seperti menyimpan informasi ke server
      console.log(`Love ${!isLoveActive ? 'added' : 'removed'} for item with ID ${itemId}`);
    },
    },
};
</script>
  

<style scoped>
/* Gaya umum untuk wrapper dropdown */
.dropdown-wrapper {
    position: relative;
    margin: 5rem 2.25rem 0 2.25rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: "Montserrat", sans-serif;
    column-gap: 20px;
}

.dropdown-left {
    position: relative;
    display: flex;
    align-items: center;
    font-family: "Montserrat", sans-serif;
    column-gap: 20px;
}

/* Gaya untuk tombol dropdown */
.dropdown-button {
    background-color: #ffffff;
    font-size: 18px;
    padding: 12px 16px;
    border: 2px solid #333333;
    border-radius: 8px;
    cursor: pointer;
    font-family: "Montserrat", sans-serif;
    display: flex;
    align-items: center;
    transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
}

/* Gaya untuk konten dropdown */
.dropdown-content {
    display: none;
    position: absolute;
    background-color: #ffffff;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
    min-width: 160px;
    z-index: 1;
    font-family: "Montserrat", sans-serif;
    border-radius: 8px;
    right: 25rem;
}

/* Gaya untuk tautan di dalam dropdown */
.dropdown-content a {
    color: #333333;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    transition: background-color 0.3s ease, color 0.3s ease;
}

/* Efek hover untuk tautan di dalam dropdown */
.dropdown-content a:hover {
    background-color: #f1f1f1;
    color: #000000;
}

/* Menampilkan konten dropdown saat dihover */
.dropdown-wrapper:hover .dropdown-content {
    display: block;
    top: 100%;
}


.search-cart{
    display: flex;
    column-gap: 10px;
}
.LoveADD {
    position: relative
}

.love {
    width: 20px;
}

.count {
    position: absolute;
    font-family: "Montserrat";
    font-weight: 900;
    font-size: .8rem;
    bottom:.9rem;
    left:1.2rem;
}

/* Penyesuaian responsif */
@media screen and (max-width: 768px) {
    .dropdown-wrapper {
        flex-direction: column;
        align-items: flex-end;
    }

    .dropdown-button {
        font-size: 16px;
    }

    .dropdown-content {
        min-width: 100%;
        margin-left: 0;
    }
}

.wrap {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    margin: 20px 0;
    justify-content: center;
    align-items: center;
}

.add-product {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 30px;
    border-radius: 20px;
    border-style: none;
    background: rgb(112, 102, 102);
    color: white;
    font-family: "Montserrat";
    font-weight: bold;
    cursor: pointer;
}

.add-category {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 30px;
    border-radius: 20px;
    border-style: none;
    background: #ffd100;
    color: white;
    font-family: "Montserrat";
    font-weight: bold;
    cursor: pointer;
}
</style>