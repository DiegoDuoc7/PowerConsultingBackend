const express = require('express');
const router = express.Router();
const projectsController = require('../controllers/projects.controller');

router.post('/projects', projectsController.createProject);
router.put('/projects/:id/progress', projectsController.updateProjectProgress);
router.get('/projects', projectsController.getAllProjects);
router.get('/projects/:id', projectsController.getProjectById);
router.delete('/projects/:id', projectsController.deleteProjectById);

module.exports = router;
