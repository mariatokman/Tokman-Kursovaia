<template>
  <section class="subscribe-block" aria-label="Подписка">
    <div class="inner">
      <div class="left">
        <p class="promo-line">Персональные предложения, акции,</p>
        <p class="promo-line">обзоры новинок</p>
        <p class="cta">Подпишись!</p>
      </div>

      <form class="right" @submit.prevent="onSubmit" novalidate>
        <label class="email-row">
          <span class="email-label">Email</span>
          <div class="input-wrap">
            <input
              v-model="email"
              type="email"
              class="email-input"
              placeholder="Введите Email"
              required
              aria-label="Email"
            />
            <button type="submit" class="submit-btn">Подписаться</button>
          </div>
        </label>

        <div class="checks">
          <label class="check">
            <input type="checkbox" />
            <span class="check-text">Хочу получать рекламные предложения и узнавать о новинках, скидках и бонусах</span>
          </label>

          <label class="check">
            <input type="checkbox"/>
            <span class="check-text">Соглашаюсь на обработку моих персональных данных в соответствии с политикой конфиденциальности</span>
          </label>
        </div>
      </form>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Prosto+One&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap');
/* Общая обёртка (фон соответствующий изображению) */
.subscribe-block {
    font-family: "Prosto One", sans-serif;
  color: #4a0f1b; 
}

/* Внутренний контейнер — линия по горизонтали */
.inner {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin: 0 auto;
}

/* Левая колонка — заголовки и CTA */
.left {
  width: 48%;
  line-height: 1.05;
}

.promo-line {
  margin: 0;
  font-size: 30px;
  font-weight: 500;
  color: #5b0e1a;
  letter-spacing: 0.2px;
}

/* "Подпишись!" более крупно и жирно */
.cta {
    font-family: "Prosto One", sans-serif;
  margin-top: 10px;
  font-size: 30px;
  color: #5b0e1a;
}

/* Правая колонка — форма */
.right {
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

/* Email label и строка ввода + кнопка */
.email-row {
    
  display: block;
  font-size: 30px;
  color: #383838;
}

/* небольшая отступная строка с подписью Email слева от поля */
.email-label {
    font-family: "Prosto One", sans-serif;
  display: block;
  margin-bottom: 6px;
  color: #5b4a4a;
}

/* Обёртка для input + button, чтобы они были в одной строке */
.input-wrap {
  display: flex;
  align-items: center;
  gap: 10px;
}

/* Само поле */
.email-input {
    font-family: "Prosto One", sans-serif;
  flex: 1 1 auto;
  height: 36px;
  padding: 6px 10px;
  border: 1px solid rgba(0,0,0,0.12);
  border-radius: 2px;
  background: #fff;
  font-size: 16px;
  outline: none;
  box-shadow: none;
}

/* Кнопка подписаться — заметный розовый прямоугольник */
.submit-btn {
    font-family: "Prosto One", sans-serif;
  flex: 0 0 130px;
  height: 36px;
  border: none;
  border-radius: 2px;
  background: #ff93b0; /* розовый по образцу */
  color: #691227;
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
  padding: 0 12px;
}

/* Блок чекбоксов — две строки */
.checks {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 6px;
}

/* Стили для каждого чекбокса */
.check {
  display: flex;
  gap: 8px;
  align-items: flex-start;
  font-size: 12px;
  color: #4a3a3a;
  cursor: pointer;
  line-height: 1.18;
}

.check input[type="checkbox"] {
  margin-top: 3px;
  width: 20px;
  height: 20px;
  min-width: 20px;
  min-height: 20px;
}

/* Текст справа от чекбокса */
.check-text {
    font-family: "Prosto One", sans-serif;
    font-size: 20px;
    flex: 1;
}


</style>