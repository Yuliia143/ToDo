export default {
    setRandomId: (value) => {
        if(!value) value = 16;
        return Math.floor((1 + Math.random()) * 0x10000).toString(value).substring(1);
    }
}