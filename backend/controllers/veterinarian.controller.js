const db = require("../models");
const Veterinarian = db.veterinarians;

exports.create = async (req, res) => {
  try {
    const vet = await Veterinarian.create(req.body);
    res.send(vet);
  } catch (err) {
    res.status(500).send({
      message: err.message || "Erro ao criar veterinário"
    });
  }
};

exports.findAll = async (req, res) => {
  try {
    const vets = await Veterinarian.findAll();
    res.send(vets);
  } catch (err) {
    res.status(500).send({
      message: err.message || "Erro ao buscar veterinários"
    });
  }
};

exports.findOne = async (req, res) => {
  const id = req.params.id;
  try {
    const vet = await Veterinarian.findByPk(id);
    if (vet) {
      res.send(vet);
    } else {
      res.status(404).send({
        message: `Veterinário não encontrado com id=${id}`
      });
    }
  } catch (err) {
    res.status(500).send({
      message: `Erro ao buscar veterinário com id=${id}`
    });
  }
};

exports.update = async (req, res) => {
  const id = req.params.id;
  try {
    const [updated] = await Veterinarian.update(req.body, {
      where: { id: id }
    });
    if (updated) {
      const vet = await Veterinarian.findByPk(id);
      res.send(vet);
    } else {
      res.status(404).send({
        message: `Veterinário não encontrado com id=${id}`
      });
    }
  } catch (err) {
    res.status(500).send({
      message: `Erro ao atualizar veterinário com id=${id}`
    });
  }
};

exports.delete = async (req, res) => {
  const id = req.params.id;
  try {
    const deleted = await Veterinarian.destroy({
      where: { id: id }
    });
    if (deleted) {
      res.send({ message: "Veterinário deletado com sucesso!" });
    } else {
      res.status(404).send({
        message: `Veterinário não encontrado com id=${id}`
      });
    }
  } catch (err) {
    res.status(500).send({
      message: `Não foi possível deletar veterinário com id=${id}`
    });
  }
};