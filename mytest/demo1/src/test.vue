<template>
    <div id="app1">
        {{msg}}
        <router-view/>
    </div>
</template>

<script>
export default {
    name:'test',
    date(){
        return{
            msg:'CESHI'
        }
    }
}
</script>