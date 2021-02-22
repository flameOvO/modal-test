/* eslint-disable */
import Vue from 'vue'
import Index from './index.vue'

let instance;

const defaultOptions = {
  // 标题
  title: '',
  // 信息
  message: '',
  // 显示遮罩层
  overlay: true,
  // 遮罩层关闭
  closeOnClickOverlay: false,
  // 取消按钮文案
  cancelButtonText: '取消',
  // 是否展示左边按钮
  showCancelButton: false,
  // 确认按钮文案
  confirmButtonText: '确定',
  // 是否展示确认按钮
  showConfirmButton: false,
};
const Modal = Vue.extend(Index);
const initInstance = () => {
  instance = new Modal().$mount();

  instance.$on('close', () => {
    document.body.removeChild(instance.$el);
    instance = null;
  });

  document.body.appendChild(instance.$el);
};

const TestModal = (options) => {
  return new Promise((resolve, reject) => {
    if (!instance) {
      initInstance();
    }
    Object.assign(instance, defaultOptions, options, {
      resolve,
      reject,
    });
  });
};
TestModal.install = (Vue) => {
  Vue.prototype.$confirm = options => TestModal({ ...options, showCancelButton: true });;
};

export default TestModal;
