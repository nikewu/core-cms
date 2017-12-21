<template>
    <div>{{ message }} </div>
</template>
<script>
    export default {
        data() {
            return {
                message: 'helloword'
            };
        },
        created() {
            console.log(this);
        },
        methods: {

        }
    };
</script>