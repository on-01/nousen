<template>
  <div class="application-buttons">
    <g-link :to="personLink" class="app-btn app-btn--person">
      <span class="app-btn__icon">
        <IconBase width="24" height="24"><IconWrite /></IconBase>
      </span>
      <span class="app-btn__text">個人で申し込む</span>
      <span class="app-btn__arrow">
        <IconBase width="16" height="16"><IconArrowRight /></IconBase>
      </span>
    </g-link>
    <g-link
      v-if="businessLink"
      :to="businessLink"
      class="app-btn app-btn--business"
    >
      <span class="app-btn__icon">
        <img
          class="app-btn__building-icon"
          src="../../assets/img/icon/building.svg"
          alt=""
        />
      </span>
      <span class="app-btn__text">法人で申し込む</span>
      <span class="app-btn__arrow">
        <IconBase width="16" height="16"><IconArrowRight /></IconBase>
      </span>
    </g-link>
  </div>
</template>

<script>
  import IconBase from "@/components/IconBase.vue";
  import IconWrite from "@/components/icons/IconWrite.vue";
  import IconArrowRight from "@/components/icons/IconArrowRight.vue";

  export default {
    name: "ApplicationButtons",
    props: {
      personLink: {
        type: String,
        required: true,
      },
      businessLink: {
        type: String,
        default: "",
      },
    },
    components: {
      IconBase,
      IconWrite,
      IconArrowRight,
    },
  };
</script>

<style lang="scss" scoped>
  .application-buttons {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    gap: 20px;
    margin: 25px auto 0;
  }

  .app-btn {
    display: flex;
    align-items: center;
    gap: 10px;
    width: 370px;
    max-width: 100%;
    padding: 14px 22px;
    border-radius: 10px;
    color: #fff;
    font-weight: bold;
    font-size: 17px;
    font-family: "メイリオ", sans-serif;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
    text-decoration: none;
    box-sizing: border-box;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.85;
    }

    @media print, screen and (max-width: 900px) {
      width: 300px;
    }

    @media print, screen and (max-width: 480px) {
      width: 90%;
      padding: 12px 16px;
    }
  }

  .app-btn--person {
    background-color: #ff4500;
  }

  .app-btn--business {
    background-color: #14265a;
  }

  .app-btn__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .app-btn__building-icon {
    width: 22px;
    height: 24px;
  }

  .app-btn__text {
    flex: 1;
    text-align: center;
  }

  .app-btn__arrow {
    display: flex;
    align-items: center;
    flex-shrink: 0;
  }
</style>
