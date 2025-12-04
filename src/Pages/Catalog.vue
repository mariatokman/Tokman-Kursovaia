<template>
  <section class="catalog">
    
    <!-- Зимняя одежда -->
    <div class="section-container">
      <h2 class="section-title">Зимняя одежда</h2>
    </div>
    <div class="grid">
      <div
        v-for="product in winterProducts"
        :key="product.id"
        class="card"
      >
        <img :src="product.image" class="img">
        <div class="card-info">
          <p class="price">{{ product.price }} ₽</p>
          <p class="brand">{{ product.brand }}</p>
          <div class="rating">
            ⭐ {{ product.rating }}
          </div>
          <button class="btn">В корзину</button>
        </div>
      </div>
    </div>

    <!-- Верхняя одежда -->
    <div class="section-container">
      <h2 class="section-title">Верхняя одежда</h2>
    </div>
    <div class="grid">
      <div
        v-for="product in topProducts"
        :key="product.id"
        class="card"
      >
        <img :src="product.image" class="img">
        <div class="card-info">
          <p class="price">{{ product.price }} ₽</p>
          <p class="brand">{{ product.brand }}</p>
          <div class="rating">
            ⭐ {{ product.rating }}
          </div>
          <button class="btn">В корзину</button>
        </div>
      </div>
    </div>

    <!-- Низ -->
    <div class="section-container">
      <h2 class="section-title">Низ</h2>
    </div>
    <div class="grid">
      <div
        v-for="product in bottomProducts"
        :key="product.id"
        class="card"
      >
        <img :src="product.image" class="img">
        <div class="card-info">
          <p class="price">{{ product.price }} ₽</p>
          <p class="brand">{{ product.brand }}</p>
          <div class="rating">
            ⭐ {{ product.rating }}
          </div>
          <button class="btn">В корзину</button>
        </div>
      </div>
    </div>

    <!-- Обувь -->
    <div class="section-container">
      <h2 class="section-title">Обувь</h2>
    </div>
    <div class="grid">
      <div
        v-for="product in shoesProducts"
        :key="product.id"
        class="card"
      >
        <img :src="product.image" class="img">
        <div class="card-info">
          <p class="price">{{ product.price }} ₽</p>
          <p class="brand">{{ product.brand }}</p>
          <div class="rating">
            ⭐ {{ product.rating }}
          </div>
          <button class="btn">В корзину</button>
        </div>
      </div>
    </div>

    <!-- Сумки -->
    <div class="section-container">
      <h2 class="section-title">Сумки</h2>
    </div>
    <div class="grid">
      <div
        v-for="product in bagsProducts"
        :key="product.id"
        class="card"
      >
        <img :src="product.image" class="img">
        <div class="card-info">
          <p class="price">{{ product.price }} ₽</p>
          <p class="brand">{{ product.brand }}</p>
          <div class="rating">
            ⭐ {{ product.rating }}
          </div>
          <button class="btn">В корзину</button>
        </div>
      </div>
    </div>

  </section>
</template>

<script>
export default {
  data() {
    return {
      products: [
            // =======================
            // 🧥 ЗИМНЯЯ ОДЕЖДА
            // =======================
            {
                id: 1,
                category: "winter",
                price: 5000,
                brand: "LOOK AT HER",
                rating: "4.7 529 оценок",
                image: "/assets/Images/Jacket.png"
            },
            {
                id: 2,
                category: "winter",
                price: 10000,
                brand: "POLARITY",
                rating: "4.8 547 оценок",
                image: "/assets/Images/Jacket2.png"
            },
            {
                id: 3,
                category: "winter",
                price: 3500,
                brand: "DOT SHOP",
                rating: "4.6 379 оценок",
                image: "/assets/Images/Jacket3.png"
            },
            {
                id: 4,
                category: "winter",
                price: 7000,
                brand: "NS NATELLA SARYEVA",
                rating: "4.7 422 оценок",
                image: "/assets/Images/Jacket4.png"
            },

            // =======================
            // 👕 ВЕРХНЯЯ ОДЕЖДА
            // =======================
            {
                id: 5,
                category: "top",
                price: 1500,
                brand: "TEPLOMIR",
                rating: "4.9 624 оценок",
                image: "/assets/Images/Shirt.png"
            },
            {
                id: 6,
                category: "top",
                price: 4000,
                brand: "TEPLOMIR",
                rating: "4.8 723 оценок",
                image: "/assets/Images/Shirt2.png"
            },
            {
                id: 7,
                category: "top",
                price: 2000,
                brand: "ALWAYS ON TOP",
                rating: "4.6 1056 оценок",
                image: "/assets/Images/Shirt3.png"
            },
            {
                id: 8,
                category: "top",
                price: 2000,
                brand: "2Bust",
                rating: "4.7 934 оценок",
                image: "/assets/Images/Shirt4.png"
            },

            // =======================
            // 👖 НИЗ
            // =======================
            {
                id: 9,
                category: "bottom",
                price: 3000,
                brand: "Arina",
                rating: "4.6 855 оценок",
                image: "/assets/Images/Pants.png"
            },
            {
                id: 10,
                category: "bottom",
                price: 4000,
                brand: "JC Brand",
                rating: "4.9 1003 оценок",
                image: "/assets/Images/Pants2.png"
            },
            {
                id: 11,
                category: "bottom",
                price: 3500,
                brand: "Feetz",
                rating: "4.7 589 оценок",
                image: "/assets/Images/Pants3.png"
            },
            {
                id: 12,
                category: "bottom",
                price: 2000,
                brand: "MintZ",
                rating: "4.9 899 оценок",
                image: "/assets/Images/Pants4.png"
            },

            // =======================
            // 👟 ОБУВЬ
            // =======================
            {
                id: 13,
                category: "shoes",
                price: 3500,
                brand: "Vans",
                rating: "4.8 577 оценок",
                image: "/assets/Images/Shoes.png"
            },
            {
                id: 14,
                category: "shoes",
                price: 4000,
                brand: "Adidas",
                rating: "4.8 1004 оценок",
                image: "/assets/Images/Shoes2.png"
            },
            {
                id: 15,
                category: "shoes",
                price: 2500,
                brand: "BALDINNI",
                rating: "4.7 379 оценок",
                image: "/assets/Images/Shoes3.png"
            },
            {
                id: 16,
                category: "shoes",
                price: 3500,
                brand: "Miss Me",
                rating: "4.9 887 оценок",
                image: "/assets/Images/Shoes4.png"
            },

            // =======================
            // 👜 СУМКИ
            // =======================
            {
                id: 17,
                category: "bags",
                price: 3500,
                brand: "KESH&FOX",
                rating: "4.9 899 оценок",
                image: "/assets/Images/Bag.png"
            },
            {
                id: 18,
                category: "bags",
                price: 1500,
                brand: "ERA BAGS",
                rating: "4.7 939 оценок",
                image: "/assets/Images/Bag2.png"
            },
            {
                id: 19,
                category: "bags",
                price: 1500,
                brand: "Borsa Verde",
                rating: "4.8 891 оценок",
                image: "/assets/Images/Bag3.png"
            },
            {
                id: 20,
                category: "bags",
                price: 2000,
                brand: "MintZ",
                rating: "4.7 889 оценок",
                image: "/assets/Images/Bag4.png"
            }
      ]
    };
  },
  computed: {
    winterProducts() {
      return this.products.filter(product => product.category === 'winter');
    },
    topProducts() {
      return this.products.filter(product => product.category === 'top');
    },
    bottomProducts() {
      return this.products.filter(product => product.category === 'bottom');
    },
    shoesProducts() {
      return this.products.filter(product => product.category === 'shoes');
    },
    bagsProducts() {
      return this.products.filter(product => product.category === 'bags');
    }
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

.catalog {
  font-family: 'Roboto', sans-serif;
  padding: 30px;
}

/* Контейнер для заголовка */
.section-container {
  display: flex;
  justify-content: center;
  margin: 40px 0 25px;
}

/* Заголовок разделов */
.section-title {
  font-size: 32px;
  font-weight: 700;
  background: #ff8fa8;
  padding: 15px 30px;
  border-radius: 12px;
  min-width: 760px;
  width: fit-content;
  text-align: center;
}

/* Сетка карточек */
.grid {
  padding: 0px 120px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

/* Карточка товара */
.card {
  width: 340px;
  border: 2px solid;
  border-radius: 14px;
  padding: 10px;
  box-shadow: 0 3px 8px rgba(0,0,0,0.15);
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-10px);
}

/* Фото */
.img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
}

/* Информация */
.card-info {
  padding: 10px 5px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.price {
  font-size: 25px;
  font-weight: 800;
}

.brand {
  font-size: 20px;
  color: #333;
}

.rating {
  font-size: 18px;
}

.btn {
  margin-top: 8px;
  background: #ff8fa8;
  border: none;
  padding: 15px 0;
  font-size: 20px;
  font-weight: 700;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.2s;
}

.btn:hover {
  background: #ff7d93;
}
</style>