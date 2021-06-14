import path from "path";
import fs from "fs";

const uploadsDirectoryProjectPath = path.join(__dirname, "..", "..", "uploads");

export const checkIfUploadsDirectoryExists = () => {
  const isUploadDirectoryExists = fs.existsSync(uploadsDirectoryProjectPath);

  if (isUploadDirectoryExists) return true;
  return false;
};

export const makeUploadsDirectory = () => {
  fs.mkdir(uploadsDirectoryProjectPath, (error) => {
    if (error) {
      console.log(error.name, error.message);
      throw new Error(error.message);
    }
    console.log("Project uploads directory has been created");
  });
};
