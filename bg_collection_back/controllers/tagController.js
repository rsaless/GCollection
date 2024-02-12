const { createTag, getAllTags, getTagById, updateTagById, deleteTagById } = require('../models/tag');

const create = async (req, res) => {
  try {
    const newTag = await createTag(req.body);
    console.log('NEW TAG CREATED');
    res.status(201).json(newTag);
  } catch (error) {
    console.log('ERROR WHILE CREATING A TAG');
    res.status(500).json({ error: error.message });
  }
};

const getAll = async (req, res) => {
  try {
    const tags = await getAllTags();
    res.json(tags);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getTag = async (req, res) => {
  try {
    const tag = await getTagById(req.params.id);
    res.json(tag);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateTag = async (req, res) => {
  try {
    const tagId = req.params.id;
    const updatedTagData = req.body;
    const updatedTag = await updateTagById(tagId, updatedTagData);
    res.json(updatedTag);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: error.message });
  }
};

const deleteTag = async (req, res) => {
  try {
    const tagId = req.params.id;
    const deletedTag = await deleteTagById(tagId);
    res.json(deletedTag);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  create,
  getAll,
  getTag,
  updateTag,
  deleteTag,
};