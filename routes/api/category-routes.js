const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint


router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const categoryData = await Category.findAll();
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post('/', (req, res) => {
  // create a new category
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
    // try {
    //   const userData = await User.destroy({
    //     where: {
    //       id: req.params.id,
    //     },
    //   });
    //   if (!userData) {
    //     res.status(404).json({ message: 'No user with this id!' });
    //     return;
    //   }
    //   res.status(200).json(userData);
    // } catch (err) {
    //   res.status(500).json(err);
    // }
});

module.exports = router;
