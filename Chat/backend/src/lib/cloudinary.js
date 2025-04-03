import { v2 as cloudinary } from "cloudinary";

import { config } from "dotenv";

config();

cloudinary.config({
  cloud_name:"dedwp0iho",
api_key:"452424566112115",
api_secret:"GomUvwGkirYHx9kxAyxl3OFAnBI"
});

export default cloudinary;
