<template>
    <div id="get-todo" class="container">
        <input class="form-control" :value="newTodo" @change="getTodo" placeholder="I need to..." />
        <button class="btn btn-primary" @click="addTodo">Todo</button>
    </div>
</template>

<script>
    export default {
        methods: {
            getTodo(e) {
                console.log('getTodo');
                this.$store.dispatch('getTodo', e.target.value)
            },
            addTodo() {
                console.log('addTodo');
                this.$store.dispatch('addTodo')
                console.log('clearTodo');
                this.$store.dispatch('clearTodo')
            }
        },
        computed: {
            newTodo() {
                console.log('newTodo');
                return this.$store.getters.newTodo;
            }
        }
    }
</script>