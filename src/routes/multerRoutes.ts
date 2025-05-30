import express from "express";
import { uploadFile } from "../controllers/multerControllers.js";
import multer from "multer";

const upload=multer({dest:"uploads/"})

const Router=express.Router()

Router.post("/UploadFile",upload.single("avatar"),uploadFile)

export default Router;