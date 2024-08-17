import mongoose from 'mongoose';

// Define the user schema
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,       // Field type is a string
      required: true,     // This field is required
      lowercase: true     // Automatically converts to lowercase
    },
    email: {
      type: String,       // Field type is a string
      required: true,     // This field is required
      lowercase: true     // Automatically converts to lowercase
    },
    learning: {
      type: String,       // Field type is a string
      required: true      // This field is required
    },
    sub: {
      type: Boolean,      // Field type is a boolean
      default: false      // Default value is false
    },
    address: {
      type: String        // Optional field
    }
  },
  { timestamps: true }    // Automatically adds `createdAt` and `updatedAt` fields
);

// Export the User model using PascalCase naming
export const User = mongoose.model("User", userSchema);
