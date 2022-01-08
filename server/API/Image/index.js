import express from "express";
import multer from "multer";

import { ImageModel } from "../../database";

const Router = express.Router();

// multer config
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Utility function
import { s3Upload } from "../../utils/s3";

/**
 * Router	/
 * Des		stores the file on s3 bucket and return the file link that going to save on our DB.
 * Params	none
 * Access	Public
 * Method	POST
 */
Router.post("/", upload.single("file"), async (req, res) => {
  try {
    const file = req.file;

    const bucketOptions = {
      Bucket: "zomato-clone-bucket-master",
      Key: file.originalname,
      Body: file.buffer,
      ContentType: file.mimetype,
      ACL: "public-read", // Access Control List
    };

    const uploadImage = await s3Upload(bucketOptions);

    const storeImageToDB = await ImageModel.create({
      images: [{ location: uploadImage.Location }],
    });

    return res.status(200).json(storeImageToDB);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default Router;
