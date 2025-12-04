<template>
  <section class="help-page">
    <h1 class="title">Помощь</h1>

    <div class="help-block">
      <div class="item">
        <h2>Условия возврата товара</h2>
        <p>
          Вы можете вернуть товар в течение 14 дней при сохранении товарного вида,
          упаковки и чека. Возврат оформляется через личный кабинет или пункт
          выдачи заказов.
        </p>
      </div>

      <div class="item">
        <h2>Способ оплаты</h2>
        <p>
          Мы принимаем оплату картами, электронными кошельками, переводами и
          наложенным платежом при получении заказа.
        </p>
      </div>

      <div class="item">
        <h2>Доставка</h2>
        <p>
          Доступна курьерская доставка, самовывоз и экспресс-доставка. Стоимость
          и сроки зависят от региона и выбранного способа доставки.
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

.help-page {
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

.help-block {
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
