import { JOBTYPE } from "@/constants"
import { z } from "zod"

export const jobFormSchema = z.object({
    roles: z.string({required_error: 'Job Title is required'}).min(3, {message:'Job Title must be at least 3 characters'}),
    jobType: z.enum(JOBTYPE, {required_error: 'You need to select the job type'}),
    salaryFrom: z.string({required_error: 'Salary From is required'}),
    salaryTo: z.string({required_error: 'Salary TO is required'}),
    categoryId: z.string({required_error: 'YOu need to select the category'}),
    requieredSkills: z.string().array().nonempty({message: 'Required skill must be at least one'}),
    jobDescription: z.string({required_error: 'Job Description is required'}).min(10, {message:'Job Title must be at least 10 characters'}),
    responsibility: z.string({required_error: 'Job Description is required'}).min(10, {message:'Job Title must be at least 10 characters'}),
    whoYouare: z.string({required_error: 'Job Description is required'}).min(10, {message:'Job Title must be at least 10 characters'}),
    niceToHaves: z.string({required_error: 'Job Description is required'}).min(10, {message:'Job Title must be at least 10 characters'}),
    benefits: z.object({
        benefit:z.string(),
        description: z.string(),
    }).array().nonempty({message: 'Benefits must be at least one'})


})