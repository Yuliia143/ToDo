<template>
    <div class="options__search">
        <label>
            <svg>
                <use xlink:href="#search"></use>
            </svg>
            <input type="text"
                   placeholder="Search"
                   v-model="query">
        </label>
    </div>
</template>

<script>

    export default {
        name: "SearchTasks",
        computed: {
            query: {
                get() {
                    return this.$store.state.query;
                },
                set(value) {
                    this.$store.commit('updateQuery', value);
                }
            }
        }
    }
</script>

<style lang="scss">
    .options__search{
        label {
            position: relative;
        }
        input {
            width: 50%;
            background-color: transparent;
            border: none;
            border-bottom: 2px solid #FFCB52;
            padding: 12px 30px;
            outline: none;
        }
        svg {
            position: absolute;
            width: 25px;
            height: 20px;
            top: 0;
        }
    }
</style>