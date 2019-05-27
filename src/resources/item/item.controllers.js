import { Item } from './item.model'

export const getOne = Item => async (req, res) => {
  const id = req.params.id

  try {
    const task = await Item.findById(id).exec()
    
    res.status(200).json({ data: task })
  } catch (e) {
    console.log(e)
    res.status(404).end()
  }
}

export const getMany = Item => async (req, res) => {
  try {
    const tasks = await Item.find({}).exec()
    
    res.status(200).json({ data: tasks })
  } catch (e) {
    console.log(e)
    res.status(404).end()
  }
}

export const createOne = Item => async (req, res) => {
  try {
    const task = await Item.create({ task: req.body.task, id: req.body.id, yolo: req.body.yolo })
    res.status(200).json({ data: task })
  } catch (e) {
    console.log(e)
    res.status(404).end()
  }
}

export const updateOne = Item => async (req, res) => {
  try {
    const task = await Item.findByIdAndUpdate(req.params.id, { task: 'update tasksss' })
    res.status(200).json({ data: task })
  } catch (e) {
    console.log(e)
    res.status(404).end()
  }
}

export const removeOne = Item => async (req, res) => {
  try {
    const task = await Item.findByIdAndRemove(req.params.id)
    res.status(200).json({ data: task})
  } catch (e) {
    console.log(e)
    res.status(404).end()
  }
}

export const removeAll = Item => async (req, res) => {
  try {
    const tasks = await Item.find({}).exec()
    // console.log(tasks)
    tasks.forEach(async task => {
      const t = await Item.findByIdAndRemove(task._id)
      console.log(t)
    })

    res.status(200).json({ data: tasks })
  } catch (e) {
    console.log(e)
    res.status(404).end()
  }
}

export const controllers = ({
  getOne: getOne(Item),
  getMany: getMany(Item),
  createOne: createOne(Item),
  updateOne: updateOne(Item),
  removeOne: removeOne(Item),
  removeAll: removeAll(Item),
})