<template>
  <transition name="modal" appear>
    <div class="modal modal-overlay" @click.self="$emit('close')">
      <div class="modal-window">
        <div class="modal-header">
          <a class="close-button" @click="$emit('close')"><img src="../assets/img/icon/close.svg"></a>
        </div>
        <div class="modal-content">
          <slot/>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'MyModal',
  props: {
    prevButton: Boolean,
    nextButton: Boolean  
	},
}
</script>

<style lang="scss" scoped>
.modal {
  &.modal-overlay {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    z-index: 30;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 100;
  }

  &-window {
    position: relative;
    background: #fff;
    border-radius: 4px;
    overflow: hidden;
    max-width: 1000px;
    width: 80%;
    max-height: 90%;
    height: 550px;
  }

  &-content {
    position: relative;
    padding: 10px 20px;
    overflow-y: scroll;
    max-height: 100%;
    img {
      width: 100%;
    }
  }

  &-header {
    padding: 10px;
    position: absolute;
    right: 0;
  }
}
.modal-prev {
  left: 5px;
  width: 30px;
  display: inline-block;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 100;
  cursor: pointer;
  img {
    position: relative;
    z-index: -1;
    cursor: pointer;
  }
}
.modal-next {
  right: 5px;
  width: 30px;
  display: inline-block;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 100;
  cursor: pointer;
  img {
    position: relative;
    z-index: -1;
    cursor: pointer;
  }
}

// オーバーレイのトランジション
.modal-enter-active, .modal-leave-active {
  transition: opacity 0.4s;

  // オーバーレイに包含されているモーダルウィンドウのトランジション
  .modal-window {
    transition: opacity 0.4s, transform 0.4s;
  }
}

// ディレイを付けるとモーダルウィンドウが消えた後にオーバーレイが消える
.modal-leave-active {
  transition: opacity 0.6s ease 0.4s;
}

.modal-enter, .modal-leave-to {
  opacity: 0;

  .modal-window {
    opacity: 0;
    transform: translateY(-20px);
  }
}
.modal-footer {
  text-align: center;
  vertical-align: middle;
  margin-bottom: 10px;
  img {
    height: 1em;
    margin-left: 0.5em;
  }
}
.close-button {
  position: absolute;
  right: 20px;
  top: 20px;
  width: 30px;
  height: 30px;
  display: block;
  z-index: 1;
  cursor: pointer;
}
</style>