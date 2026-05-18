const settingsService = require("../services/settings.service");
const Settings = require("../models/settings.model");

class SettingsController {

  async findOneAndUpdate(req, res) {
    const key = Object.keys(req.body)[0];
        try {
          
              const updatedSettings = await settingsService.findOneAndUpdateSettings(
                {},
                {
                  $set: {
                    [key]: req.body[key],
                  },
                },
                {
                  returnDocument: "after",
                  upsert: true,
                }
              );
              res.status(200).json({
                success: true,
                data: updatedSettings,
              });
            } catch (error) {
              res.status(500).json({
                success: false,
                message: error.message,
              });
            }
  }
  
  async create(req, res) {
    
        try{
            const settings = await settingsService.createSettings(req.body);
              res.status(201).json({
              success: true,
              data: settings,
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
      const settings = await settingsService.getSettings();

      res.status(200).json({
        success: true,
        data: settings,
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
      const settings = await settingsService.getSettingsById(req.params.id);

      res.status(200).json({
        success: true,
        data: settings,
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
      const updatedSettings = await settingsService.updateSettings(
        req.params.id,
        req.body
      );

      res.status(200).json({
        success: true,
        data: updatedSettings,
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
      await settingsService.deleteSettings(req.params.id);

      res.status(200).json({
        success: true,
        message: "Settings deleted successfully",
      });
    } catch (error) {
      res.status(404).json({
        success: false,
        message: error.message,
      });
    }
  }
}

module.exports = new SettingsController();