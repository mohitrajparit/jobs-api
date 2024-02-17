const createJob=async(req,res)=>{
    res.send("Create Job");
}
const deleteJob=async(req,res)=>{
    res.send("deleteJob Job");
}
const getAllJobs=async(req,res)=>{
    res.send("getAllJobs Job");
}
const updateJob=async(req,res)=>{
    res.send("updateJob Job");
}
const getJob=async(req,res)=>{
    res.send("getJob Job");
}


module.exports = {
    createJob,
    deleteJob,
    getAllJobs,
    updateJob,
    getJob,
  }
  