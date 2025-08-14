import { redirect } from "next/navigation"
import { saveMeal } from "./meals"

  export async function shareMeals(formData){
    'use server'

    const meal = {
      title:formData.get('title'),
      creator_email:formData.get('email'),
      creator:formData.get('name'),
      instructions:formData.get('instructions'),
      summary:formData.get('summary'),
      image:formData.get('image')
    }
    await saveMeal(meal)
    redirect('/meals')

  }