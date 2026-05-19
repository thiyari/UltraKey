const clientsRepository = require("../repositories/clients.repository");

class ClientsService {
  async createClients(settingsData) {
    return await clientsRepository.create(settingsData);
  }

  async getClients() {
    return await clientsRepository.findAll();
  }

  async getClientsById(id) {
    const clients = await clientsRepository.findById(id);

    if (!clients) {
      throw new Error("Clients not found");
    }

    return clients;
  }

  
  async updateClients(id, data) {
    const updatedSettings = await clientsRepository.update(id, data);

    if (!updatedSettings) {
      throw new Error("Clients not found");
    }

    return updatedSettings;
  }

  async deleteClients(id) {
    const deletedSettings = await clientsRepository.delete(id);

    if (!deletedSettings) {
      throw new Error("Clients not found");
    }

    return deletedSettings;
  }
}

module.exports = new ClientsService();