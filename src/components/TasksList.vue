<template>
    <ul>
        <task-item v-for="task in tasks"
                   :key="task.id"
                   :task="task"></task-item>
    </ul>
</template>

<script>
    import TaskItem from './TaskItem.vue'

    export default {
        name: "TaskList",
        components: {
            TaskItem
        },
        props: {
            tasks: Array,
        },
    }
</script>

<style scoped>

</style>