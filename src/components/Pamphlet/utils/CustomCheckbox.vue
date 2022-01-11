<template>
  <label class="checkboxWrapper">
    <input
      type="checkbox"
      class="inputCheckbox"
      :checked="modelValue"
      @change="$emit('update:modelValue', $event.target.checked)"
    />
    <span class="checkmark"></span>
  </label>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'CustomCheckbox',
  props: {
    modelValue: {
      type: Boolean,
      default: false
    }
  },
  emits: ['update:modelValue']
};
</script>

<style lang="scss" scoped>
.checkboxWrapper {
  cursor: pointer;
  z-index: 999;
  font-size: 1vw;
}
.inputCheckbox {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  width: 0.8em;
  height: 0.8em;
  border-radius: 50%;
  background: rgba(227, 110, 216, 0.2);
}
.inputCheckbox:checked ~ .checkmark {
  background: #e36ef8;
}
</style>
