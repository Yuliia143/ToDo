<template>
    <div class="creation">
        <label class="creation__input"
               :class="[(!isValidInput && isActiveTask)? 'creation__input--invalid input' : '']">
            <input type="text"
                   placeholder="What do you need to do?"
                   v-model="task.title">
        </label>
        <label class="creation__select"
               :class="[(!isValidSelect && isActiveTask) ? 'creation__select--invalid select' : '']">
            <select v-model="task.priorityStatus">
                <option value="" hidden>Priority:</option>
                <option v-for="(option,index) in optionsPriority" :value="option" :key="index">
                    {{option.name}}
                </option>
            </select>
        </label>
        <button class="btn add__button" @click="onAdd"> Add new task
            <svg class="add__svg">
                <use xlink:href="#add"></use>
            </svg>
        </button>
    </div>
</template>

<script>
    import Task from "../models/Task";

    export default {
        name: "CreateTask",
        props: {
            optionsPriority: Array
        },
        data: () => ({
            task: new Task(),
            isActiveTask: false
        }),
        methods: {
            onAdd() {
                this.isActiveTask = true;
                if (this.isValidInput && this.isValidSelect) {
                    this.$store.commit('addTask', this.task.getDto());
                    this.task.clearData();
                    this.isActiveTask = false;
                }
            },
        },
        computed: {
            isValidInput() {
                return this.task.title !== "";
            },
            isValidSelect() {
                return this.task.priorityStatus !== "";
            }
        }
    }
</script>

<style lang="scss">
    .creation {
        width: 80%;
        display: flex;
        justify-content: space-between;

        margin: 20px auto;
    }

    .creation__input {
        width: 60%;

        input {
            width: 90%;
            font-size: 18px;
            background-color: transparent;
            border: none;
            border-bottom: 2px solid $main-orange;
            padding: 12px 20px;
            outline: none;
        }
    }

    .creation__input--invalid {
        input {
            border: none;
            border-bottom: 2px solid $invalid-orange;
        }
    }

    .add__svg {
        width: 35px;
        height: 10px;
    }

    .add__button {
        width: 15%;
        border: none;
        border-radius: 5px;
        background: $main-orange;

        padding: 0 20px;
        margin-left: 20px;

        &:hover {
            background-color: $hover-orange;
            color: $main-white;
        }

        &:disabled {
            background-color: $main-grey;
            color: $main-white;
        }
    }

    ::placeholder {
        font-size: 18px;
    }

    .creation__select {
        width: 15%;

        select {
            width: 100%;
            height: 100%;

            background-color: transparent;
            border: none;
            border-bottom: 2px solid $main-orange;

            font-size: 18px;
            color: gray;

            outline: none;
        }
    }

    .creation__select--invalid {
        select {
            border: none;
            border-bottom: 2px solid orangered;
        }
    }

    @media (max-width: $tablet-width) {
        .creation {
            width: 90%;
            flex-wrap: wrap;
            margin: 20px auto 10px auto;
        }
        .creation__input {
            width: 65%;

            input {
                font-size: 14px;
                padding: 7px;
            }
        }
        .creation__select {
            width: 27%;

            select {
                font-size: 14px;
            }
        }
        .add__button {
            width: 100%;
            padding: 7px;
            margin: 10px auto;
        }
        ::placeholder {
            font-size: 14px;
        }
    }
    @media (min-width: $tablet-width) and (max-width: $desktop-width) {
        .creation__select {
            select {
                font-size: 16px;
            }
        }
        .creation__input {
            input {
                font-size: 16px;
            }
        }
        ::placeholder{
            font-size: 16px;
        }
    }
</style>