/**
 * name : user-extensions.js
 * author : Aman Jung Karki
 * Date : 15-Nov-2019
 * Description : Schema for user extension collection.
 */

module.exports = {
    name: "userExtension",
    schema: {
      externalId: {
        type: String,
        required: true
      },
      userId: {
        type: String,
        required: true
      },
      roles: Array,
      createdBy: {
        type: String,
        required: true
      },
      updatedBy: {
        type: String,
        required: true
      },
      status: {
        type: String,
        default: "active"
      },
      isDeleted: {
        type: Boolean,
        default: false
      },
      devices : Array
    }
  }