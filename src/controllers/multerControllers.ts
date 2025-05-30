import { Request, Response } from "express";
import { uploadfileMulter } from "../services/multerServices.js";

export const uploadFile = async (req: Request, res: Response) => {

  try {
    const response = await uploadfileMulter(req);
    res.status(200).json({
      statusCode: 200,
      statusMessage: "File uploaded successfully",
    });
  } catch (error) {
    res.status(500).json({
      statusCode: 500,
      statusMessage: "Internal server Error",
    });
  }
};
