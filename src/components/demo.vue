<!--
 * @Author: your name
 * @Date: 2021-04-13 14:30:53
 * @LastEditTime: 2021-04-13 15:03:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vuecook\src\components\demo.vue
-->
<template>
    <div class="container">
        <input type="text" v-bind="$attrs" v-model="$attrs.name" />
    </div>
</template>

<script>
export default {
    inheritAttrs: false,
    created(){
        console.log(this.$attrs)
    }
}
</script>
<style lang="scss" scoped>
    .container{
        background-color: $page-bg-color;
    }
</style>