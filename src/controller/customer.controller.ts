import Customer from "../model/customer.model";
import { error, success } from "../services/responseModifier";
const Mongoose = require("mongoose");

const customers = async (req: any, res: any, next: any) => {
  try {
    let customers = await Customer.find();
    if (!customers) {
      res.json(error("Fetch Failed", 300));
    } else {
      res.json(success("Fetched Successful", customers, 200));
    }
  } catch (error) {
    console.log(error);
  }
};

const getCustomer = async (req: any, res: any, next: any) => {
  try {
    let id = req?.params?.id;
    let customer = await Customer.findById(id);
    if (!customer) {
      res.json(error("Fetch Failed", 300));
    } else {
      res.json(success("Fetched Successful", customer, 200));
    }
  } catch (error) {}
};

const createCustomer = (req: any, res: any, next: any) => {
  let data = req.body;
  let customer = new Customer(data);
  customer.save((err: any, result: any) => {
    if (err) {
      res.json(error("Failed", 300));
    } else {
      res.json(success("Creation Successful", result, 201));
    }
  });
};

const updateCustomer = async (req: any, res: any, next: any) => {
  try {
    console.log(req.body);
    let data = req.body;
    let product = await Customer.findByIdAndUpdate(req.body.id, data);
    if (!product) {
      res.json(error("Fetch Failed", 300));
    } else {
      res.json(success("Fetched Successful", product, 200));
    }
  } catch (error) {}
};

const deleteCustomer = async (req: any, res: any, next: any) => {
  try {
    let id = req.body.id;
    let product = await Customer.deleteOne({
      _id: Mongoose.Types.ObjectId(id),
    });
    if (!product) {
      res.json(error("Fetch Failed", 300));
    } else {
      res.json(success("Deleted Successfully", product, 200));
    }
  } catch (error) {}
};

export {
  customers,
  createCustomer,
  updateCustomer,
  getCustomer,
  deleteCustomer,
};
