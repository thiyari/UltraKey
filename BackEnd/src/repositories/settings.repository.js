const Settings = require("../models/settings.model");

class SettingsRepository {
  async create(settingsData) {
    return await Settings.create(settingsData);
  }

  async findAll() {
    return await Settings.find();
  }

  async findById(id) {
    return await Settings.findById(id);
  }

  async updateOne(filter, update) {
    return await Settings.updateOne(filter, update);
  }
  
  async update(id, data) {
    return await Settings.findByIdAndUpdate(id, data, {
      new: true,
    });
  }

  async delete(id) {
    return await Settings.findByIdAndDelete(id);
  }
}

module.exports = new SettingsRepository();