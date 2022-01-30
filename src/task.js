function task(name, date){
    const getName = () => {
        return name;
    }

    const getDate = () => {
        return date;
    }

    const asString = () => {
        return `${name}-${date}`;
    }
    
    return {getName, getDate, asString};
}

export default task;