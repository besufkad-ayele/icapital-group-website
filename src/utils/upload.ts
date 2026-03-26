import Axios from "axios";
import { compressImage } from "./compress.image";

export const upload = async (data: File) => {
  let file;
  console.log(data);
  if (data.type.toString().search("image") !== -1) {
    file = await compressImage(data);
  } else {
    file = data;
  }
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
      // Remove Authorization header if not needed for public upload
      // Authorization: "Bearer ...",
    },
  };
  let fd = new FormData();
  fd.append("files", file, file.name);
  // Use the correct Strapi backend URL for uploads
  const strapiBaseUrl = process.env.NEXT_PUBLIC_DATA || "http://localhost:1337";
  return (await Axios.post(`${strapiBaseUrl}/api/upload`, fd, config)).data;
};
