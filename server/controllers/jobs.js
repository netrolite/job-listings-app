const Job = require("../models/Job");
const { BadRequestErr } = require("../errors");


async function getAllJobs(req, res, next) {
    const { limit } = req.body;
    const { userId } = req.user;

    let jobs = Job.find({ createdBy: userId });
    if (typeof limit === "number" && limit > 0) {
        jobs.limit(limit);
    } else if (typeof limit === "string") {
        throw new BadRequestErr("limit must be a number");
    } else jobs.limit(5);

    jobs = await jobs;
    res.json({ resultsAmount: jobs.length, jobs });
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
    res.send("get single job");
}


async function updateJob(req, res, next) {
    res.send("update job");
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