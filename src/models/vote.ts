import { Vote, VoteModel } from './vote.model';

export const createVote = async (vote: Vote) => {
  const voteObject = new VoteModel(vote);
  return voteObject.save();
};

export const getVote = async (query: any) => VoteModel.find(query);
