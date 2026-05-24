const Clients = require("../models/clients.model");

class ClientsRepository {
  async create(clientsData) {
    return await Clients.create(clientsData);
  }

  async findAll() {
    return await Clients.find();
  }

  async findById(id) {
    return await Clients.findById(id);
  }
  
  async update(id, data) {
    return await Clients.findByIdAndUpdate(id, data,                 
        {
            returnDocument: "after"
        });
  }

  async delete(id) {
    return await Clients.findByIdAndDelete(id);
  }
}

module.exports = new ClientsRepository();