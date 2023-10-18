const PlatformRepository = require('../repositories/PlatformRepository');

class PlatformController {
  async index(request, response) {
    const platform = await PlatformRepository.findAll();
    response.json(platform);
  }

  async store(request, response) {
    const { name } = request.body;

    if (!name) {
      return response.status(404).json({ error: 'Nome é obrigatório.' });
    }

    const platformCreate = await PlatformRepository.create({ name });

    response.json(platformCreate);
  }

  async show(request, response) {
    const { id } = request.params;

    const platform = await PlatformRepository.findById(id);

    if (!platform) {
      return response.status(404).json({ error: 'Platforma não encontrada' });
    }

    response.json(platform);
  }

  async update(request, response) {
    const { id } = request.params;
    const { name } = request.body;

    if (!name) {
      return response.status(404).json({ error: 'Nome é obrigatório.' });
    }

    const platformExists = await PlatformRepository.findById(id);

    if (!platformExists) {
      return response.send(404).json({ error: 'Plataforma não encontrada' });
    }

    const platform = await PlatformRepository.update(id, { name });

    response.json(platform);
  }

  async delete(request, response) {
    const { id } = request.params;

    const platformExists = await PlatformRepository.findById(id);

    if (!platformExists) {
      return response.status(404).json({ error: 'Platforma não encontrada.' });
    }

    await PlatformRepository.delete(id);
    response.sendStatus(204);
  }
}

module.exports = new PlatformController();
