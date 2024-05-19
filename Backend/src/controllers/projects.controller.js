const Project = require('../models/Project');
const Employee = require('../models/Employee');

// Crear un nuevo proyecto
exports.createProject = async (req, res) => {
  try {
    const newProject = new Project(req.body);
    await newProject.save();
    await Employee.findByIdAndUpdate(req.body.empleado, { $push: { proyectos: newProject._id } });
    res.status(201).json(newProject);
  } catch (error) {
    res.status(400).json({ message: 'Error al crear el proyecto', error });
  }
};

// Actualizar porcentaje de avance y agregar nota
exports.updateProjectProgress = async (req, res) => {
  try {
    const { porcentajeAvance, nota } = req.body;
    const project = await Project.findById(req.params.id);
    if (!project) {
      return res.status(404).json({ message: 'Proyecto no encontrado' });
    }
    project.porcentajeAvance = porcentajeAvance;
    project.notas.push({ nota });
    await project.save();
    res.status(200).json(project);
  } catch (error) {
    res.status(400).json({ message: 'Error al actualizar el proyecto', error });
  }
};

// Obtener todos los proyectos
exports.getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.status(200).json(projects);
  } catch (error) {
    res.status(400).json({ message: 'Error al obtener los proyectos', error });
  }
};

// Obtener un proyecto por ID
exports.getProjectById = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) {
      return res.status(404).json({ message: 'Proyecto no encontrado' });
    }
    res.status(200).json(project);
  } catch (error) {
    res.status(400).json({ message: 'Error al obtener el proyecto', error });
  }
};

// Eliminar un proyecto por ID
exports.deleteProjectById = async (req, res) => {
  try {
    const project = await Project.findByIdAndDelete(req.params.id);
    if (!project) {
      return res.status(404).json({ message: 'Proyecto no encontrado' });
    }
    res.status(200).json({ message: 'Proyecto eliminado' });
  } catch (error) {
    res.status(400).json({ message: 'Error al eliminar el proyecto', error });
  }
};