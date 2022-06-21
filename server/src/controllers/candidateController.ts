import { RequestHandler } from "express";
import CandidateModel, { ICandidate } from '../model/Candidate';

export const getCandidates: RequestHandler = async (req, res) => {
    try {
        const candidates = await CandidateModel.find();
                
        res.status(200).json(candidates);
    } catch (error) {
        res.status(404).json({ message: "No Candidates Found" });
    }
};

export const addCandidate: RequestHandler = async (req, res) => {
    const candidateData: ICandidate = req.body;

    const newCandidate = new CandidateModel({ ...candidateData, createdAt: new Date().toISOString() })

    try {
        await newCandidate.save();

        res.status(201).json(newCandidate );
    } catch (error) {
        res.status(409).json({ message: "Couldn't Process Request" });
    }
};