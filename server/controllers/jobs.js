const Job = require("../models/Job");
const { BadRequestErr } = require("../errors");


async function getAllJobs(req, res, next) {
    const { limit } = req.body;
    const { userId } = req.user;
    const defaultLimit = 5;

    let jobs = Job.find({ createdBy: userId });

    if (limit && typeof limit !== "number") {
        throw new BadRequestErr("limit must be a number");
    }
    else if (limit > 0) jobs.limit(limit);
    else jobs.limit(defaultLimit);

    req.dataToSend = await jobs;
    next();
}


async function createJob(req, res, next) {
    const { company, position, status } = req.body;
    const { userId } = req.user;
    const job = await Job.create({
        company, position, status, createdBy: userId
    })
    res.status(201).json(job);
}


async function getSingleJob(req, res, next) {
    const { jobId } = req.params;
    const { userId } = req.user;
    req.dataToSend = await Job.findOne({ _id: jobId, createdBy: userId });
    next();
}


async function updateJob(req, res, next) {
    const { jobId } = req.params;
    const { userId } = req.user;
    req.dataToSend = await Job.findOneAndUpdate(
        { _id: jobId, createdBy: userId },
        req.body,
        { runValidators: true, new: true }
    )
    next();
}


async function deleteJob(req, res, next) {
    res.send("delete job");
}


module.exports = {
    getAllJobs,
    createJob,
    getSingleJob,
    updateJob,
    deleteJob
}