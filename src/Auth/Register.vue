<template>
  <section class="register-page">
    <h1 class="title">Регистрация</h1>

    <div class="form-container">
      <label>Email</label>
      <input type="email" placeholder="Email" />

      <label>Пароль</label>
      <input type="password" placeholder="Пароль" class="password"/>

      <input type="password" placeholder="Повторите пароль" class="password"/>

      <button class="submit">Зарегистрироваться</button>

      <router-link to="/login" class="login-link">
        Есть аккаунт? Войдите
      </router-link>
    </div>
  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

.register-page {
  font-family: 'Roboto', sans-serif;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 60px;
}

.title {
  font-size: 48px;
  font-weight: 600;
  margin-bottom: 40px;
  color: #000;
}

.form-container {
  width: 800px;
  background: #ff8ea3;
  padding: 50px 110px;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  gap: 22px;
}

label {
  font-size: 26px;
  font-weight: 600;
  color: #000;
}

input {
  width: 100%;
  height: 60px;
  border-radius: 20px;
  border: 1px solid #ffd0dd;
  background: #ff9fb1;
  padding: 0 20px;
  font-size: 22px;
  outline: none;
}

.password {
    width: 400px;
}

input::placeholder {
  color: #fff;
}

.submit {
  margin-top: 10px;
  height: 65px;
  background: #f3d2d9;
  border-radius: 20px;
  border: none;
  font-size: 28px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.2s;
}

.submit:hover {
  background: #eed1d6;
}

.login-link {
  margin-top: 5px;
  font-size: 18px;
  font-weight: 600;
  text-align: center;
  color: #000;
  text-decoration: underline;
  cursor: pointer;
}
</style>
