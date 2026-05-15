const settingsRepository = require("../repositories/settings.repository");

class SettingsService {
  async createSettings(settingsData) {
    return await settingsRepository.create(settingsData);
  }

  async getSettings() {
    return await settingsRepository.findAll();
  }

  async getSettingsById(id) {
    const settings = await settingsRepository.findById(id);

    if (!settings) {
      throw new Error("Settings not found");
    }

    return settings;
  }

  async updateSettings(id, data) {
    const updatedSettings = await settingsRepository.update(id, data);

    if (!updatedSettings) {
      throw new Error("Settings not found");
    }

    return updatedSettings;
  }

  async deleteSettings(id) {
    const deletedSettings = await settingsRepository.delete(id);

    if (!deletedSettings) {
      throw new Error("Settings not found");
    }

    return deletedSettings;
  }
}

module.exports = new SettingsService();