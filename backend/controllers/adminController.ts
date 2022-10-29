import { Request, Response } from 'express';
import asyncHandler from 'express-async-handler';

import User from '../models/userSchema';
import Question, { IQuestion } from '../models/questionSchema';
import { SortOrder } from 'mongoose';

export const getAllResponses = asyncHandler(
  async (req: Request, res: Response) => {
    try {
      const pageNumber = Number(req.query.pageNumber);
      const pageSize = Number(req.query.pageSize);
      const sortField = req.query.sortField ? req.query.sortField : '_id';
      const dir = req.query.dir === 'asc' ? 'asc' : 'desc';
      const sort: { [key: string]: SortOrder } = {};
      sort['' + sortField] = dir ? dir : 'desc';
      const allResponses = await User.find()
        .limit(pageSize)
        .skip(pageSize * (pageNumber - 1))
        .sort(sort);
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
    const questions: IQuestion[] = [];
    const userResponses = await User.findById(userId);
    var resp =
      userResponses &&
      userResponses.responses &&
      userResponses.responses.length > 0
        ? userResponses.responses
        : [];
    for (var i = 0; i < resp.length; i++) {
      var que: IQuestion | null = await Question.findById(resp[i].qId);
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
