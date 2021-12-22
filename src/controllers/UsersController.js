function show(req, res) {
  res.json({ nombre: 'Nombre', apellido: 'Apellido' });
}

function all(req, res) {
  res.json([{ nombre: 'Nombre', apellido: 'Apellido' }]);
}

function create(req, res) {
  res.status(201).json({ nombre: 'Nombre Nuevo', apellido: 'Apellido Nuevo' });
}

function update(req, res) {
  res.json({ nombre: 'Nombre Actualizado', apellido: 'Apellido Actualizado'});
}

function destroy(req, res) {
  res.status(204).end();
}

export default {
  show,
  all,
  create,
  update,
  destroy,
};
