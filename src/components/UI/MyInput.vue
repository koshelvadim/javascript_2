<template>
  <input :value="modelValue" @input="updateInput"  class="input" type="text">  
</template>

<script>
export default {
    name: 'my-input',
    props: {
        modelValue: [String, Number]
    },
    methods: {
        updateInput(event) {
            this.$emit('update:modelValue', event.target.value)
        }
    }
}
</script>

<style scoped>
input{
    outline: none;
    margin-bottom: 10px;
    min-height: 30px;
    border-radius: 5px;
    font-size: 16px;
}
input:focus{
    border: 2px solid red;
}
</style>