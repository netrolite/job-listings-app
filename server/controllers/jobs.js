async function getAllJobs(req, res) {
    res.send("get all jobs");
}


async function createJob(req, res) {
    res.send("create job");
}


async function getSingleJob(req, res) {
    res.send("get single job");
}


async function updateJob(req, res) {
    res.send("update job");
}


async function deleteJob(req, res) {
    res.send("delete job");
}


module.exports = {
    getAllJobs,
    createJob,
    getSingleJob,
    updateJob,
    deleteJob
}