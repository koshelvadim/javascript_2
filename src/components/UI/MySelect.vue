<template>
    <select v-model="modelValue" @change="changeOption" class="btn btn-info">
    <option disabled value="">Выберете из списка</option>
    <option 
        v-for="option in options" 
        :key="option.value" 
        :value="option.value"
    >
        {{ option.name }}
    </option>
  </select>
</template>

<script>
export default {
  name: "my-select",
  props: {
    modalValue: {
      type: String
    },
    options: {
      type: Array,
      default: () => [] // по дефолту опции это массив, для пустых рекомендуется использовать стрелочную функцию
    },
  },
  methods: {
    changeOption(event) {
        this.$emit('update:modelValue', event.target.value);
    },
  },
};
</script>

<style scoped>
select{
    margin: 16px 0;
}
</style>
