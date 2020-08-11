<template>
    <div class="container">
        <header class="header">
            <div class="header__triangles">
                <svg class="triangle_1">
                    <use xlink:href="#triangle_1"></use>
                </svg>
                <svg class="triangle_2">
                    <use xlink:href="#triangle_2"></use>
                </svg>
            </div>
            <h1>Tasks list</h1>
        </header>
        <main class="main">
            <create-task :options-priority="getOptionsPriority"></create-task>
            <div class="content">
                <div class="content__sidebar">
                    <div class="options">
                        <search-tasks></search-tasks>
                        <filter-tasks :options-priority="getOptionsPriority"></filter-tasks>
                        <sort-tasks></sort-tasks>
                    </div>
                </div>
                <div class="content__list">
                    <div class="list__filter">
                        <svg>
                            <use xlink:href="#filter"></use>
                        </svg>
                    </div>
                    <tasks :uncompleted-tasks="uncompletedTasks"
                           :completed-tasks="completedTasks">
                    </tasks>
                </div>
            </div>
        </main>
    </div>
</template>
<script>
    import TaskItem from './components/TaskItem.vue'
    import TasksList from './components/TasksList.vue'
    import Tasks from './components/Tasks.vue'
    import CreateTask from './components/CreateTask.vue'
    import SearchTasks from './components/SearchTasks.vue'
    import FilterTasks from './components/FilterTasks.vue'
    import SortTasks from './components/SortTasks.vue'
    import {mapGetters} from 'vuex'

    export default {
        name: 'container',
        components: {
            CreateTask,
            SearchTasks,
            FilterTasks,
            SortTasks,
            TasksList,
            Tasks,
            TaskItem
        },
        methods: {
            searchTasks(array) {
                return array.filter(task => task['title'].startsWith(this.getQuery));
            },
            filterTasks(array) {
                let result = [];
                if (this.getActiveFilter.length !== 0) {
                    this.getActiveFilter.map(filter => {
                        switch (filter.name) {
                            case 'High':
                                result.push(...array.filter(task => task.priorityStatus.name === "High"));
                                break;
                            case 'Medium':
                                result.push(...array.filter(task => task.priorityStatus.name === "Medium"));
                                break;
                            case 'Low':
                                result.push(...array.filter(task => task.priorityStatus.name === "Low"));
                                break;
                            default:
                                return result;
                        }
                    });
                    return result;
                } else {
                    return array;
                }
            },
            sortTasks(array) {
                switch (this.getActiveSort) {
                    case 'maxmin':
                        return array.sort((a, b) => a.priorityStatus.id - b.priorityStatus.id);
                    case 'minmax':
                        return array.sort((a, b) => b.priorityStatus.id - a.priorityStatus.id);
                }
            }
        },
        computed: {
            ...mapGetters([
                'getTasks',
                'getOptionsPriority',
                'getQuery',
                'getActiveFilter',
                'getActiveSort'
            ]),
            uncompletedTasks() {
                return this.sortTasks(this.filterTasks(this.searchTasks(this.getTasks(true))));
            },
            completedTasks() {
                return this.sortTasks(this.filterTasks(this.searchTasks(this.getTasks(false))));
            }
        }
    }
</script>

<style lang="scss">
    .container {
        height: 100%;
    }

    .header {
        display: flex;
        justify-content: center;

        h1 {
            margin: 0;
            padding: 20px 0;
            font-size: 44px;
            text-align: center;
            color: $main-grey;
            letter-spacing: 3px;
        }
    }

    .header__triangles {
        position: relative;
        width: 100px;

        svg {
            width: 60px;
            height: 60px;
            position: absolute;
        }
    }

    .triangle_1 {
        top: 16%;
        z-index: 1;
    }

    .triangle_2 {
        top: 7%;
        left: 25%;
    }

    .content {
        display: flex;
        justify-content: space-between;
        width: 90%;
        margin: 40px auto;
    }

    .content__list {
        width: 80%;
    }


    .content__sidebar{
        width: 17%;
        padding: 0 10px 0 0;
        border-right: 1px solid gray;
    }
    .options{
        display: flex;
        flex-direction: column;
    }
    .list__filter{
        svg {
            display: none;
        }
    }


    @media (max-width: $tablet-width) {
        .header {
            h1 {
                font-size: 38px;
            }
        }
        .content {
            margin: 10px auto;
            position: relative;
            width: 100%;
        }
        .content__list {
            margin: 0 auto;
            width: 90%;
        }
        .content__sidebar{
            transform: translateX(0);
            position: fixed;
            top: 175px;
            right: 0;
            z-index: 1;
            bottom: 0;
            width: 200px;
            margin-right: -200px;
            background: #fafafa;
            transition: transform 0.3s ease-in-out;
            padding: 20px;

            border: none;
            box-sizing: border-box;
        }
        .content__sidebar--active{
            transform: translateX(-100%);
        }
        .list__filter{
            transition: right 0.3s ease-in-out;
            position: absolute;
            top: 5%;
            right: 5%;
            z-index: 2;

            svg{
                display: block;
                width: 25px;
                height: 25px;
            }
        }
        .list__filter--active{
            transition: right 0.3s ease-in-out;
            right: 190px;
            z-index: 2;
        }

    }

</style>

