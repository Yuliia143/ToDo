import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        tasks: [
            {
                id: '6555',
                title: 'to go shopping',
                priorityStatus: {
                    id: 1,
                    name: 'High',
                    active: false
                },
                completionStatus: false
            },
            {
                id: '4555',
                title: 'to do exercises',
                priorityStatus: {
                    id: 2,
                    name: 'Medium',
                    active: false
                },
                completionStatus: false
            },
            {
                id: '766n',
                title: 'to tidy',
                priorityStatus: {
                    id: 3,
                    name: 'Low',
                    active: false
                },
                completionStatus: false
            },
            {
                id: '7666',
                title: 'to do hw',
                priorityStatus: {
                    id: 3,
                    name: 'Low',
                    active: false
                },
                completionStatus: true
            }
        ],
        optionsPriority: [
            {
                id: 1,
                name: 'High',
                active: false
            },
            {
                id: 2,
                name: 'Medium',
                active: false
            },
            {
                id: 3,
                name: 'Low',
                active: false
            }],
        query: '',
        activeFilter: [],
        activeSort: 'maxmin'
    },
    getters: {
        getTasks: state => status => {
            if (status) {
                return state.tasks.filter(task => !task.completionStatus);
            } else
                return state.tasks.filter(task => task.completionStatus);
        },
        getOptionsPriority: state => {
            return state.optionsPriority;
        },
        getQuery: state => {
            return state.query;
        },
        getActiveFilter: state => {
            return state.activeFilter;
        },
        getActiveSort: state => {
            return state.activeSort;
        }
    },
    mutations: {
        updateQuery(state, payload) {
            state.query = payload
        },
        updateActiveFilter(state, payload) {
            state.activeFilter = payload;
        },
        updateActiveSort(state, payload) {
            state.activeSort = payload;
        },
        addTask(state, payload) {
            state.tasks.push(payload);
        },
        removeTask(state, payload) {
            let index = state.tasks.findIndex(task => task.id === payload);
            state.tasks.splice(index, 1);
        },
        completeTask(state, {completionStatus, id}) {
            let task = state.tasks.find(task => task.id === id);
            task.completionStatus = !completionStatus;
        },
    }
});