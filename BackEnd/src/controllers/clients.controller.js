const clientsService = require("../services/clients.service");

class ClientsController {
  
  async create(req, res) {
    
        try{
            const clients = await clientsService.createClients(req.body);
              res.status(201).json({
              success: true,
              data: clients,
            });
          } catch (error) {
            res.status(500).json({
              success: false,
              message: error.message,
            });
          }
  }

  async getAll(req, res) {
    try {
      const clients = await clientsService.getClients();

      res.status(200).json({
        success: true,
        data: clients,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }

  async getById(req, res) {
    try {
      const clients = await clientsService.getClientsById(req.params.id);

      res.status(200).json({
        success: true,
        data: clients,
      });
    } catch (error) {
      res.status(404).json({
        success: false,
        message: error.message,
      });
    }
  }

  async update(req, res) {
    try {
      const updatedClients = await clientsService.updateClients(
        req.params.id,
        req.body
      );

      res.status(200).json({
        success: true,
        data: updatedClients,
      });
    } catch (error) {
      res.status(404).json({
        success: false,
        message: error.message,
      });
    }
  }

  async delete(req, res) {
    try {
      await clientsService.deleteClients(req.params.id);

      res.status(200).json({
        success: true,
        message: "Clients deleted successfully",
      });
    } catch (error) {
      res.status(404).json({
        success: false,
        message: error.message,
      });
    }
  }
}

module.exports = new ClientsController();