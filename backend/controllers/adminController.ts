import { Request, Response } from 'express';
import asyncHandler from 'express-async-handler';

import User from '../models/userSchema';
import Question from '../models/questionSchema';

export const getAllResponses = asyncHandler(
  async (req: Request, res: Response) => {
    try {
      const pageSize = 10;
      const pageNumber = Number(req.query.pageNumber) || 1;
      const allResponses = await User.find()
        .sort({ _id: -1 })
        .limit(10)
        .skip(pageSize * (pageNumber - 1));
      const counts = await User.countDocuments();
      res.status(200).json({
        allResponses,
        pages: Math.ceil(counts / pageSize),
        pageSize,
        pageNumber,
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
    const questions = [];
    const userResponses = await User.findById(userId);
    var resp =
      userResponses &&
      userResponses.responses &&
      userResponses.responses.length > 0
        ? userResponses.responses
        : [];
    for (var i = 0; i < resp.length; i++) {
      var que = await Question.findById(resp[i].qId);
      questions.push(que);
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
