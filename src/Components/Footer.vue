<template>
  <footer class="footer">
    <div class="footer-container">
      <!-- все 4 колонки остаются внутри -->
      <div class="col">
        <h3>Покупателям</h3>
        <router-link to="/info">Частые вопросы</router-link>
        <router-link to="/info">Доставка по клику</router-link>
        <router-link to="/info">Гид по безопасности</router-link>
        <router-link to="/info">Как обрабатываются ваши персональные данные</router-link>
        <p class="copyright">Розовая одежда 2025–2025. Все права защищены.</p>
      </div>

      <div class="col">
        <h3>Продавцам</h3>
        <router-link to="/services">Продавать товары</router-link>
        <router-link to="/services">Развозить грузы</router-link>
        <router-link to="/services">Доставлять грузы</router-link>
      </div>

      <div class="col">
        <h3>Компания</h3>
        <router-link to="/about">О нас</router-link>
        <router-link to="/contacts">Контакты</router-link>
        <router-link to="/catalog">Каталог</router-link>
      </div>

      <div class="col icon-col">
        <h3>Помощь</h3>
        <router-link to="/help">Условия возврата товара</router-link>
        <router-link to="/help">Способ оплаты</router-link>
        <router-link to="/help">Доставка</router-link>
        <div class="icon">
          <a href="https://t.me/rozovaiaodezhda"><img src="/assets/icons/Telegram.svg" alt="Тг"></a>
        </div>
      </div>

    </div>
  </footer>
</template>

<script setup>
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap');

.footer {
  font-family: 'Roboto', sans-serif;
  width: 100%;
  background: #F68EA0;
  padding: 32px 0; 
}
.footer-container {
  max-width: 1564px;     
  margin: 0 auto;        
  padding: 0 40px;       
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px 40px;
}

.col {
  display: flex;
  flex-direction: column;
}


h3 {
  margin: 0 0 12px 0;
  font-size: 20px;
  font-weight: 600;
  color: #000;
}

a {
  font-size: 16px;
  color: #6b6b6b;
  margin-bottom: 8px;
  cursor: pointer;
  text-decoration: none;
}


p {
  margin-top: 18px;
  font-size: 16px;
  color: #5e5e5e;
}

.icon-col {
  position: relative;
}

.icon {
  position: absolute;
  right: -26px;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

</style>