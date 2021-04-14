<template>
    <div>
        <ul>
            <item v-for="item in displayItems" :key="item.id"></item>
        </ul>
    </div>
</template>

<script>
import Item from './Item.vue'
    export default {
        data(){
            return {
                displayItems: window.items

            }
        },
        components: {
            Item
        }
    }
</script>

<style lang="scss" scoped>

</style>