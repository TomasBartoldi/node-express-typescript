import express from 'express'

const router = express.Router()

router.get('/', (_req, res)=>{
  console.log('fetch all');
  res.send('Fetching all entry data')
 
})

router.post('/', (_req, res)=>{
  res.send('Saving data');
  
})

export default router