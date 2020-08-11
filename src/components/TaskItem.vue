<template>
    <li>
        <label class="task__checkbox">
            <input type="checkbox" :checked="task.completionStatus" @click="onComplete">
            <span class="checkbox-indicator"></span>
            <span class="checkbox-title"
                  :class="task.completionStatus ? 'task--complete' : ''">{{task.title}}</span>

        </label>
        <div class="task__options">
            <p class="priority">{{task.priorityStatus.name}}</p>
            <button class="deleteTask" @click="onRemove">
                <svg>
                    <use xlink:href="#delete"></use>
                </svg>
            </button>
        </div>
    </li>
</template>

<script>
    export default {
        name: 'TaskItem',
        props: {
            task: Object
        },
        methods: {
            onRemove() {
                this.$store.commit('removeTask', this.task.id);
            },
            onComplete() {
                this.$store.commit('completeTask', {
                    completionStatus: this.task.completionStatus,
                    id: this.task.id
                });
            }
        }
    }
</script>

<style lang="scss">
    .task__options {
        display: flex;
        width: 14%;
        justify-content: space-between;
    }

    .task--complete {
        text-decoration: line-through;
    }

    .priority {
        margin: 0;
        padding: 0 10px;
        border: 1px solid grey;
        border-radius: 5px;
        color: white;
    }

    .deleteTask {
        background: transparent;
        border: none;
        outline: none;

        svg {
            width: 20px;
            height: 15px;

            &:hover {
                transform: scale(1.4);
                fill: white;
            }
        }
    }

    .checkbox-title {
        margin-left: 35px;
    }

    .task__checkbox {
        position: relative;
        cursor: pointer;

        input[type="checkbox"] {
            display: none;
        }

        input[type="checkbox"] + .checkbox-indicator {
            position: absolute;
            box-sizing: border-box;
            width: 20px;
            height: 20px;
            background-color: transparent;
            border: 1px solid gray;
            border-radius: 3px;
        }

        input[type="checkbox"]:checked + .checkbox-indicator::before {
            content: "";
            position: absolute;
            left: 6px;
            width: 5px;
            border-bottom: 2px solid black;
            height: 11px;
            border-right: 2px solid black;
            transform: rotate(45deg);
        }
    }


    @media (max-width: $tablet-width) {
        .deleteTask svg {
            width: 10px;
            height: 10px;
        }

        .task__options {
            display: flex;
            width: 20%;
            justify-content: space-between;
        }
    }
</style>
