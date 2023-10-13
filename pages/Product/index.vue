<template>
    <section class="flex-section">
        <div class="dropdown-wrapper">
            <button class="dropdown-button"> Category</button>
            <div class="dropdown-content">
                <a @click ="backCategory">All</a>
                <a v-for="category in category" :key="category.id" class="content" href="#"
                    @click="filterCategory(category.name)">{{ category.name }}</a>
            </div>
            <nuxt-link to="/Product/CreateProduct" class="add-product"> Add Product</nuxt-link>
            <nuxt-link to="/Product/CreateCategory" class="add-category"> Add Category</nuxt-link>
        </div>
        <div class="wrap">
            <CardComponent v-for="item in filteredItems" :key="item.id" :item="item" :onDelete="deleteItem" @getData="getItems" />
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
            selectedCategory: '', // Kategori yang dipilih
        };
    },
    computed: {
        filteredItems() {
            // Filter item berdasarkan kategori yang dipilih
            if (!this.selectedCategory) {
                // Jika tidak ada kategori yang dipilih, tampilkan semua item
                return this.items;
            } else {
                return this.items.filter(item => item.category === this.selectedCategory);
            }
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
    },
};
</script>
  

<style scoped>
/* Gaya umum untuk wrapper dropdown */
.dropdown-wrapper {
    position: relative;
    margin-top: 5rem;
    display: flex;
    margin-right: 3rem;
    justify-content: flex-end;
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
    right:25rem;
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