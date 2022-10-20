const recordService = require('../services/recordService')



const getMember = (req, res) => {
    const {
        params: { memberId },
    } = req;
    console.log(req.params)
    const record = recordService.getMember(memberId)
    res.send({ status: "OK", data: record });

}

const getRecordForWorkout = (req, res) => {
    const {
        params: { workoutId },
    } = req;

    if (!workoutId) {
        res
            .status(400)
            .send({
                status: "FAILED",
                data: { error: "Parameter ':workoutId' can not be empty" },
            });
    }

    try {
        const record = recordService.getRecordForWorkout(workoutId)
        res.send({ status: "OK", data: record });
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: "FAILED", data: { error: error?.message || error } });
    }
}

module.exports = {
    getRecordForWorkout,
    getMember
}