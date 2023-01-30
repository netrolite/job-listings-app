const express = require("express");
const router = express.Router();
const {
    getAllJobs,
    createJob,
    getSingleJob,
    updateJob,
    deleteJob
} = require("../controllers/jobs");


router.route("/")
    .get(getAllJobs)
    .post(createJob);

router.route("/:jobId")
    .get(getSingleJob)
    .patch(updateJob)
    .delete(deleteJob);


module.exports = router;