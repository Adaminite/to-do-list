function task(name, date, project="All"){
    const getName = () => {
        return name;
    }

    const getDate = () => {
        return date;
    }

    const getProject = () => {
        return project;
    }

    const asString = () => {
        return `${name}-${date}`;
    }
    
    return {getName, getDate, getProject, asString};
}

export default task;