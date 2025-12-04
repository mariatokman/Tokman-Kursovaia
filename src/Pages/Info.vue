<template>
  <section class="info-page">
    <h1 class="title">Информация</h1>

    <div class="info-block">
      <div class="item">
        <h2>Частые вопросы</h2>
        <p>
          Здесь вы найдёте ответы на самые популярные вопросы о товарах,
          доставке, оплате и работе нашего магазина.
        </p>
      </div>

      <div class="item">
        <h2>Доставка по клику</h2>
        <p>
          Удобная услуга моментального оформления доставки. Просто выберите товар,
          нажмите кнопку — и мы сразу начнём обработку заказа.
        </p>
      </div>

      <div class="item">
        <h2>Гид по безопасности</h2>
        <p>
          Рекомендации по безопасным покупкам, защите данных и работе с личным
          кабинетом.
        </p>
      </div>

      <div class="item">
        <h2>Как обрабатываются ваши персональные данные</h2>
        <p>
          Мы соблюдаем все стандарты конфиденциальности: данные хранятся в
          зашифрованном виде и используются только для улучшения сервиса.
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

.info-page {
  font-family: 'Roboto', sans-serif;  
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 60px;
}

.title {
  font-size: 42px;
  font-weight: 600;
  margin-bottom: 40px;
  color: #000;
}

.info-block {
  width: 800px;
  background: #ff8ea3;
  padding: 40px 50px;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.item h2 {
  font-size: 26px;
  font-weight: 600;
  margin-bottom: 8px;
}

.item p {
  font-size: 18px;
  line-height: 1.5;
  color: #2a2a2a;
}
</style>
