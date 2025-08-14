import sql from "better-sqlite3"
import slugify from "slugify";
import fs from 'node:fs'
import xss from "xss";

const db = sql("meals.db")

export async function getMeals(){
    await new Promise ((res)=>setTimeout(res,2000))
    return db.prepare('SELECT * FROM meals').all()
}

export function getMeal(slug) {
  return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug);
}


export async function saveMeal(meal){
    meal.slug = slugify(meal.title,{lower:true})
    meal.instructions = xss(meal.instructions)

    const extension = meal.image.name.split('.').pop()
    const fileName = `${meal.slug}.${extension}`

    const stream = fs.createWriteStream(`public/image/${fileName}`)
    const bufferedImg = await meal.image.arrayBuffer()

    stream.write(Buffer.from(bufferedImg),(err)=>{
        if(err){
            throw new Error('Saving image failed')
        }
    })
    meal.image= `/images/${fileName}`

    db.prepare(`
            INSERT INTO meals
            (title,creator_email,creator,instructions,summary,image,slug)
            VALUES(
                @title,
                @creator_email,
                @creator,
                @instructions,
                @summary,
                @image,
                @slug
            )
        `).run(meal)
}

