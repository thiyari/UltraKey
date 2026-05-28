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

  async findOneAndUpdate(filter, update, options) {
    return await Settings.findOneAndUpdate(filter, update, options);
  }
  
  async update(id, data) {
    return await Settings.findByIdAndUpdate(id, data, 
        {
            returnDocument: "after"
        });
  }

  async updateNextInvoiceNumber(data) {
    const update = {};
    
    // only update provided invoice fields
    if (data.invoices) {
      console.log(data.invoices)
      for (const [key, value] of Object.entries(data.invoices)) {
        if (value !== undefined) {
          update[`invoices.${key}`] = value;
        }
      }
    }
    const result = await Settings.findOneAndUpdate(
      {}, // adjust filter if needed (_id or userId)
      { $set: update },
      { returnDocument: "after" }
    );

    return result;
  }

  async delete(id) {
    return await Settings.findByIdAndDelete(id);
  }
}

module.exports = new SettingsRepository();