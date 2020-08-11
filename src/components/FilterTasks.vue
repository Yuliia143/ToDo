<template>
    <div class="options___priority">
        <h3>Filter</h3>
        <ul class="priority__list">
            <li class="priority__item" v-for="(option,index) in optionsPriority" :key="index">
                <label class="priority__checkbox">
                    <input type="checkbox" :value="option" v-model="activeFilter">
                    <span class="checkbox-indicator"></span>
                    <span class="checkbox-title">{{option.name}}</span>
                </label>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "FilterTasks",
        props: {
            optionsPriority: Array
        },
        computed: {
            activeFilter: {
                get() {
                    return this.$store.state.activeFilter;
                },
                set(value) {
                    this.$store.commit('updateActiveFilter', value);
                }
            }
        }
    }
</script>

<style lang="scss">
    .options___priority {
        margin: 10px 0;
    }

    .priority__checkbox {
        position: relative;
        cursor: pointer;
    }

    .priority__item {
        margin: 10px 0 0 0;
    }

    .priority__checkbox{
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
</style>