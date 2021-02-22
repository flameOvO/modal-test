<template>
<div>
  <div class="modal-container">
    <div class="modal-header">{{title}}</div>
    <div class="modal-content">{{content}}</div>
    <div class="modal-footer">
      <button @click="close" v-if="showCancelButton">{{cancelButtonText}}</button>
      <button @click="confirm" v-if="showConfirmButton">{{confirmButtonText}}</button>
    </div>
  </div>
  <div class="mask" v-if="overlay" @click="overlayClick"></div>
</div>
</template>

<script>
export default {
  props: {
    title: String,
    content: String,
    cancelButtonText: String,
    confirmButtonText: String,
    showConfirmButton: Boolean,
    showCancelButton: Boolean,
    overlay: Boolean,
    closeOnClickOverlay: Boolean,
  },
  methods: {
    close() {
      this.reject();
      this.$emit('close');
    },
    confirm() {
      this.resolve();
      this.$emit('close');
    },
    overlayClick() {
      if (this.closeOnClickOverlay) {
        this.reject();
        this.$emit('close');
      }
    }
  }
}
</script>

<style scoped>
.modal-container {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-height: 200px;
  width: 400px;
  margin: auto;
  background: #fff;
  padding: 12px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  z-index: 2007;
}
.modal-header {
  line-height: 30px;
  padding: 12px 0;
}
.modal-content {
  flex: 1;
}
.modal-footer {
  padding: 12px 0;
  line-height: 30px;
  text-align: right;
}
.modal-footer > button {
  margin-right: 12px;
}
.close-btn {
  top: 12px;
  right: 12px;
}
.mask {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #000;
  opacity: 0.5;
  z-index: 2006;
}
</style>