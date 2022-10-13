import express, { Response, Request } from 'express';
const Router = express.Router();

import { upload } from '../controllers/uploadController';

Router.post('/', upload.single('image'), (req: Request, res: Response) => {
  console.log('Uploading Image');
  res.json({ imageUrl: req.file!.path });
});

export default Router;
