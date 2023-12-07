const project = require("../models/project")

const insert = (projectData) => {
    const projects = new project(projectData)
    return projects.save()
}

const list = () => {
    return project.find({})
}

module.exports = {
    insert,
    list
}