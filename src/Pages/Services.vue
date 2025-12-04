<template>
  <section class="services-page">
    <h1 class="title">Для продавцов</h1>

    <div class="services-block">
      <div class="item">
        <h2>Продавать товары</h2>
        <p>
          Вы можете размещать свои товары на нашей платформе, управлять
          ассортиментом, ценами и отслеживать продажи в личном кабинете.
        </p>
      </div>

      <div class="item">
        <h2>Развозить грузы</h2>
        <p>
          Станьте партнёром по доставке: берите подходящие заказы и доставляйте
          их в удобное для вас время. Все маршруты выдаются автоматически.
        </p>
      </div>

      <div class="item">
        <h2>Доставлять грузы</h2>
        <p>
          Подходит для водителей и курьеров. Мы предлагаем стабильный поток заказов,
          удобный график и прозрачную оплату за каждую доставку.
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

.services-page {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 60px;
  font-family: 'Roboto', sans-serif;
}

.title {
  font-size: 42px;
  font-weight: 600;
  margin-bottom: 40px;
  color: #000;
}

.services-block {
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
