<template>
      <nav class="desktop-navigation-bar">
      <div class="container flex-row">
        <div class="logo-wrapper flex-row">
          <img class="logo" src="@/assets/images/logo.png">
          <div class="logo-text">
            GiftBox Marketing
          </div>
        </div>
        <ul class="nav-items flex-row">
          <li class="nav-item nav-item-active">
            <a class="nav-link" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Services</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Blog</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Login</a>
          </li>
        </ul>
      </div>
    </nav>
</template>


<style lang="scss">

.desktop-navigation-bar {
  height: 100px;
  background-color: whitesmoke;

  .container {
    justify-content: space-between;
    align-items: center;
  }

  .logo-wrapper {
    gap: 8px;
    align-items: center;

    .logo {
      width: 32px;
    }

    .logo-text {
      font-family: "Pacifico", cursive;
      font-size: 18px;
    }
  }

  .nav-items {
    gap: 48px;

    .nav-item {
      &:hover {
        @extend .nav-item-active;
      }
      .nav-link {
        height: 98px;
        color: #222222;
        display: flex;
        align-items: center;
      }
    }
    .nav-item-active {
      border-bottom: 2px solid black;
    }
  }
}
</style>