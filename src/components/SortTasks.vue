<template>
    <div class="options__sort">
        <h3>Sort</h3>
        <ul class="sort__list">
            <li class="sort__item">
                <label class="sort__radio">
                    <input type="radio" value="maxmin" v-model="activeSort">
                    <svg>
                        <use xlink:href="#down"></use>
                    </svg>
                    <span>By priority</span>
                </label>
            </li>
            <li class="sort__item">
                <label class="sort__radio">
                    <input type="radio" value="minmax" v-model="activeSort">
                    <svg>
                        <use xlink:href="#up"></use>
                    </svg>
                    <span>By priority</span>
                </label>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "SortTasks",
        computed: {
            activeSort: {
                get() {
                    return this.$store.state.activeSort;
                },
                set(value) {
                    this.$store.commit('updateActiveSort', value);
                }
            }
        }
    }
</script>

<style lang="scss">
    .options__sort {
        svg {
            width: 30px;
            height: 25px;
        }
    }

    .sort__radio {
        cursor: pointer;
        display: flex;

        input[type="radio"] {
            display: none;
        }

        input[type="radio"]:checked ~ svg {
            fill: orange;
        }
    }

    .sort__item {
        margin: 10px 0 0 -7px;
    }
</style>