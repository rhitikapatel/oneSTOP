import Company from "../model/company.model.js";

export const getCompany = async (req, res) => {
  try {
    const company = await Company.find();
    res.status(200).json(company); // ✅ fixed status
  } catch (err) {
    console.log("Error:", err);     // ✅ fixed error reference
    res.status(500).json(err);
  }
};
