const User = require("../Models/User");

module.exports = {
  async create(req, res) {
    const { nome, price, marca, ano, desc } = req.body;

    try {
      const createdUser = await User.create({
        nome,
        price,
        marca,
        ano,
        desc
      });

      return res.status(201).send(createdUser);
    } catch (err) {
      return res.status(400).send(err);
    }
  },
  async delete(req, res) {
    try {
      const deletedUser = await User.findByIdAndDelete(req.params.id);

      return res.status(200).json({
        message: "User deleted successfully",
        deletedUser,
      });
    } catch (error) {
      return res.status(400).json({
        message: "Error deleting user",
        error,
      });
    }
  },
  async updateUser(req, res) {
    try {
      const { id } = req.params;
      const updatedUser = await User.findByIdAndUpdate(
        id,
        {
          $set: {
            nome: req.body.nome,
            price: req.body.price,
            marca: req.body.marca,
            ano: req.body.ano,
            desc: req.body.desc,
          },
        },
        { new: true }
      );

      return res.status(200).json({ status: "updated", user: updatedUser });
    } catch (error) {
      return res.status(400).send(error);
    }
  },

  async index(req, res) {
    try {
      const allUsers = await User.find();

      return res.status(200).send(allUsers);
    } catch (err) {
      return res.status(400).send(err);
    }
  },
};
