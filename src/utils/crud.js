export const getOne = model => async (req, res) => {
  try {
    const item = await model.find({ id: req.params.id }).exec()
    
    res.status(200).json({ data: item })
  } catch (e) {
    console.log(e)
    res.status(404).end()
  }
}

export const getMany = model => async (req, res) => {
  try {
    const items = await model.find({}).exec()
    
    res.status(200).json({ data: items })
  } catch (e) {
    console.log(e)
    res.status(404).end()
  }
}

export const createOne = model => async (req, res) => {
  try {
    const item = await model.create(req.body)
    res.status(200).json({ data: item })
  } catch (e) {
    console.log(e)
    res.status(404).end()
  }
}

export const addItemToList = model => async (req, res) => {
  // adds an item to the end of array
  try {
    let lists = await model.find({ id: req.params.id }).exec()
    let list = lists[0]
    
    const newList = await model.findOneAndUpdate({ id: req.params.id }, {items: [ ...list.items, { ...req.body }]})
    res.status(200).json({ data: newList })
  } catch (e) {
    console.log(e)
    res.status(404).end()
  }
}

// different for different routes
export const updateOne = model => async (req, res) => {
  try {
    const item = await model.findOneAndUpdate({id: req.params.id}, req.body, { new: true })
    res.status(200).json({ data: item })
  } catch (e) {
    console.log(e)
    res.status(404).end()
  }
}

// different for different routes
export const removeOne = model => async (req, res) => {
  try {
    const item = await model.findOneAndRemove({ id: req.params.id })
    res.status(200).json({ data: item})
  } catch (e) {
    console.log(e)
    res.status(404).end()
  }
}

export const removeAll = model => async (req, res) => {
  try {
    const items = await model.find({}).exec()

    items.forEach(async item => {
      const t = await model.findByIdAndRemove(item._id)
    })

    res.status(200).json({ data: items })
  } catch (e) {
    console.log(e)
    res.status(404).end()
  }
}

export const crudControllers = model => ({
  getOne: getOne(model),
  getMany: getMany(model),
  createOne: createOne(model),
  addItemToList: addItemToList(model),
  updateOne: updateOne(model),
  removeOne: removeOne(model),
  removeAll: removeAll(model),
})