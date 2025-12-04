<template>
    <header class="page">
        <div class="container">
            <div class="header__logo"><router-link to="/"><img src="/assets/icons/Logo.svg" alt="Логотип"></router-link></div>
            <div class="search">
                <input type="text" placeholder="Поиск товара..." />
                <img class="icon" src="/assets/icons/search.svg" alt="search" />
            </div>
            <nav class="header__nav">
                <router-link to="/contacts">Контакты</router-link>
                <router-link to="/about">О нас</router-link>
                <router-link to="/catalog">Каталог</router-link>
                <router-link to="/register">Личный кабинет</router-link>
            </nav>
        </div>
    </header>
</template>


<script setup>
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap');

.container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 40px;
    padding: 11px 31px;
    max-width: 1564px;
    margin: 40px auto 0 auto;
    background-color: #FE899F;
    border-radius: 25px;
}

.header__logo img {
    width: 117px;
}

/* --- Поиск --- */

.search {
    position: relative;
    flex-shrink: 0;
}

.search input {
    width: 692px;
    height: 42px;
    padding-left: 16px;
    padding-right: 48px;
    background: #e7c6cd;
    border: none !important;
    outline: none !important;
    border-radius: 12px;
    font-size: 14px;
}

.search .icon {
    position: absolute;
    right: 14px;
    top: 50%;
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
    pointer-events: none;
}

/* --- Навигация --- */
.header__nav {
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 28px;
    font-size: 24px;
    margin-right: 16px;
}


.header__nav a,
.header__nav span {
    text-decoration: none;
    color: #000;
    cursor: pointer;
}

.header__nav a {
    text-decoration: none;
    color: #000;
}

.header__nav a.router-link-active {
    color: #000;
}

.header__nav a:hover {
    color: #000;
}


</style>
