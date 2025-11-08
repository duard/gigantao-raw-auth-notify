import { Worker } from 'bullmq'
import { sendEmail } from '../services/email.service'

new Worker('jobs', async (job) => {
  if (job.name === 'send-email') await sendEmail(job.data.to, job.data.subject, job.data.body)
})