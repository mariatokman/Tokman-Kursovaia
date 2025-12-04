<template>
  <section class="contacts-page">
    <h1 class="title">Контакты</h1>

    <div class="cards">

      <!-- Левая карточка -->
      <div class="card">
        <h2 class="card-title">Техническая поддержка</h2>

        <div class="content">
          <p class="time">6:00–00:00 (MSK) Пн-Вс</p>

          <div class="status">Сейчас работаем</div>

          <p class="subtitle">Россия (бесплатный звонок)</p>
          <p class="phone">8 800 555-35-35</p>

          <p class="subtitle">Владивосток</p>
          <p class="phone">8 904 621-44-99</p>
        </div>
      </div>

      <!-- Правая карточка -->
      <div class="card">
        <h2 class="card-title">
          Наши офисы
          <img src="/assets/icons/Home.svg" alt="Дом" class="home">
        </h2>

        <div class="content">
          <p class="office">г. Москва ул. Никольская д. 10</p>
          <p class="office">г. Владивосток ул. Светланская д. 87</p>
          <p class="office">г. Казань ул. Баумана д. 86</p>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

.contacts-page {
  padding: 40px 0 80px;
  font-family: 'Roboto', sans-serif;
}

.title {
  font-size: 48px;
  font-weight: 500;
  text-align: center;
  margin-bottom: 45px;
}

.cards {
  display: flex;
  justify-content: center;
  gap: 35px;
}

.card {
  width: 813px; 
  height: 631px;
  background: #ff8fa8;
  border-radius: 25px;
  padding: 45px 55px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
}

.card-title{
  display: flex;
  align-items: center;
  font-size: 40px;
  font-weight: 500;
  margin-bottom: 32px;
  justify-content: center;
}


.content {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.time {
  font-size: 38px;
  font-weight: 400;
}

.status {
  display: inline-block;
  background: white;
  padding: 10px 26px;
  border-radius: 30px;
  font-size: 30px;
  align-self: flex-start;
}

.subtitle {
  font-size: 35px;
  font-weight: 500;
  color: #444;
}

.phone {
  font-size: 30px;
  font-weight: 400;
}

.office {
  font-size: 40px;
  font-weight: 400;
}
</style>
