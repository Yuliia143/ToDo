<template>
    <div class="tasks--none"
         v-if="(uncompletedTasks.length===0) && (completedTasks.length===0)">
        <h1>No tasks</h1>
        <h2>When you have tasks, you`ll see them here</h2>
    </div>
    <div class="tasks" v-else>
        <div class="tasks uncompleted__tasks" v-if="uncompletedTasks.length>0" ref="uncompleted">
            <h3>Uncompleted tasks</h3>
            <tasks-list :tasks="uncompletedTasks"></tasks-list>
        </div>

        <div class="tasks completed__tasks" v-if="completedTasks.length>0" ref="completed">
            <h3>Completed tasks</h3>
            <tasks-list :tasks="completedTasks"></tasks-list>
        </div>
    </div>
</template>

<script>
    import TasksList from './TasksList.vue'

    export default {
        name: "Tasks",
        components: {
            TasksList
        },
        props: {
            uncompletedTasks: Array,
            completedTasks: Array
        },
        updated() {
            const hideHeight = 95 + 87 + 90;
            const documentHeight = document.body.clientHeight;
            const maxHeight = (documentHeight - hideHeight);

            const uncompletedHeight = this.$refs.uncompleted.clientHeight;
            const completedHeight = this.$refs.completed.clientHeight;
            let h = uncompletedHeight + completedHeight - maxHeight;
            console.log(uncompletedHeight, completedHeight, maxHeight);

            if (uncompletedHeight + completedHeight > maxHeight) {
                if (uncompletedHeight > completedHeight) {
                    this.$refs.uncompleted.style.overflow = 'auto';
                    this.$refs.uncompleted.style.maxHeight = uncompletedHeight - h + 'px';
                } else if (uncompletedHeight < completedHeight) {
                    this.$refs.completed.style.overflow = 'auto';
                    this.$refs.completed.style.maxHeight = completedHeight - h + 'px';
                }
            }
        }
    }
</script>

<style lang="scss">
    .tasks--none {
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: #818A87;
    }
    .tasks {
        ul {
            list-style: none;
            margin: 0;
            padding: 0;
        }

        li {
            display: flex;
            justify-content: space-between;

            padding: 9px 50px 9px 30px;
            margin: 5px 0;
            background-color: $main-brown;
            box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.2);
            border-radius: 5px;

            border-top: 2px solid transparent;
            border-bottom: 2px solid transparent;

            &:nth-child(2n) {
                background-color: $main-orange;
            }

            &:nth-child(3n) {
                background-color: $main-blue;
            }

            &:hover {
                border-top: 2px solid grey;
                border-bottom: 2px solid grey;
            }
        }
    }

</style>