import { Form, redirect, useActionData, useNavigate, useNavigation } from 'react-router-dom';
import classes from './EventForm.module.css';

function EventForm({ method, event }) {
  const actionData = useActionData()
  console.log(actionData)
  const navigate = useNavigate();
  const navigation = useNavigation();
  function cancelHandler() {
    navigate('..');
  }

  const isSubmitting = navigation.state === 'submitting'

  return (
    <Form method={method} className={classes.form}>
      {actionData && actionData.errors && <ul>
        {Object.values(actionData.errors).map((err) => <li>{err}</li>)}
      </ul>}
      <p>
        <label htmlFor="title">Title</label>
        <input id="title" type="text" name="title" required defaultValue={event?.title} />
      </p>
      <p>
        <label htmlFor="image" >Image</label>
        <input id="image" type="url" name="image" required defaultValue={event?.image} />
      </p>
      <p>
        <label htmlFor="date" >Date</label>
        <input id="date" type="date" name="date" required defaultValue={event?.date} />
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <textarea id="description" name="description" rows="5" required defaultValue={event?.description} />
      </p>
      <div className={classes.actions}>
        <button type="button" onClick={cancelHandler}>
          Cancel
        </button>
        <button disabled={isSubmitting}>Save</button>
      </div>
    </Form>
  );
}

export default EventForm;


export async function action({request,params}){
  const data = await request.formData()
  const method = request.method

  const eventData = {
    title:data.get('title'),
    image:data.get('image'),
    date:data.get('date'),
    description:data.get('description')
  }
  
  let url = 'http://localhost:8080/events'
  
  if(method === 'PATCH'){
    url='http://localhost:8080/events/'+params.eventId
  }
  
  const response = await fetch(url,{
    method:method,
    headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify(eventData)
  })

  if(!response.ok){
    throw new Error("Cannot fetch formdata")
  }

  if(response.status === 422){
    return response
  }

  return redirect('/events')
}

