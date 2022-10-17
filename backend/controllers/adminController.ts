import { Request, Response } from 'express';
import asyncHandler from 'express-async-handler';

import User from '../models/userSchema';
import Question from '../models/questionSchema';

export const getAllResponses = asyncHandler(
  async (req: Request, res: Response) => {
    try {
      const pageNumber = Number(req.query.pageNumber);
      const pageSize = Number(req.query.pageSize);
      const sortField = req.query.sortField ? req.query.sortField : '_id';
      const dir = req.query.dir;
      const sort: any = {};
      sort['' + sortField] = dir === 'asc' ? 1 : -1;
      const allResponses = await User.find()
        .sort(sort)
        .limit(pageSize)
        .skip(pageSize * (pageNumber - 1));
      const totalRecords = await User.countDocuments();
      res.status(200).json({
        allResponses,
        pages: Math.ceil(totalRecords / pageSize),
        pageSize,
        pageNumber,
        totalRecords,
      });
    } catch (error: any) {
      console.log(error);
      res.status(400);
      throw new Error(error);
    }
  }
);

export const getUserResponses = asyncHandler(async (req, res) => {
  try {
    const { userId } = req.params;
    const questions: any[] = [];
    const userResponses = await User.findById(userId);
    var resp =
      userResponses &&
      userResponses.responses &&
      userResponses.responses.length > 0
        ? userResponses.responses
        : [];
    for (var i = 0; i < resp.length; i++) {
      var que: any = await Question.findById(resp[i].qId);
      if (que !== null) questions.push(que);
    }

    res.status(200).json({
      userResponses,
      questions,
    });
  } catch (error: any) {
    console.log(error);
    res.status(400);
    throw new Error(error);
  }
});
