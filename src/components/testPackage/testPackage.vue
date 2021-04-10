<template>
    <div class="testPackage">
        <ul class="switchBar">
            <li class="tab" v-for="(item,index) in tabList" :key="index" @click="tag=index" :class="tag==index?'active':''">
                <span>{{item.value}}</span>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "testPackage",
        props: {
            params: String,
        },
        data() {
            return {
                tag:0,
                tabList: [{
                    value: '切换一'
                }, {
                    value: '切换二'
                }]
            }
        },
        mounted() {
            console.log(this.params, '传参');
        },
        methods: {

        }
    }
</script>

<style scoped>
    *{
        margin:0;
        padding:0;
    }
    .testPackage {
        width: 100%;
        height: 50px;
    }

    .switchBar {
        width: 100%;
        list-style: none;
        display: flex;
        justify-content: center;
        align-content: center;
        flex-wrap: nowrap;
    }

    .switchBar > li {
        list-style: none;
        padding: 5px;
        cursor: pointer;
        border-bottom: 1px solid transparent;
    }

    .switchBar >li.active{
        color:red;
        border-bottom: 1px dashed red;

    }

</style>