import utils from '../utils'
export default class Task {
    constructor(data) {
        if (typeof data === 'undefined') {
            data ={}
        }
        this._id = null;
        this._title = data.title || '';
        this._priorityStatus = data.priorityStatus || '';
        this._completionStatus = data.completionStatus || false;
    }

    get id() {
        return this._id;
    }
    set id(value){
        this._id = utils.setRandomId(value);
    }

    get title() {
        return this._title;
    }

    set title(value){
        this._title = value;
    }

    get priorityStatus() {
        return this._priorityStatus;
    }

    set priorityStatus(value){
        this._priorityStatus = value;
    }

    get completionStatus() {
        return this._completionStatus;
    }

    set completionStatus(value) {
        this._completionStatus = value;
    }

    clearData(){
        this.id = null;
        this.title = '';
        this.priorityStatus = '';
        this.completionStatus = false;
    }

    getDto() {
        this.id = 16;
        return {
            id: this.id,
            title: this.title,
            priorityStatus: this.priorityStatus,
            completionStatus: this.completionStatus
        }
    }
}