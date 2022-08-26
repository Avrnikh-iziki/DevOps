import './App.css'
import axios from "axios";
import { useState, useEffect } from 'react';

function App() {

  const [get_todo, set_get_todo] = useState([])
  const [todo, settodo] = useState('')

  const handltodo = (e) => {
    e.preventDefault()
    try {
      const Todo = async () => {
        const data = await axios.post('/api/express', { todo })
        if (data.status === 201) window.location.reload(true)
      }
      Todo()
    } catch (err) { console.log(err) }
  }

  const del = async (id) => {
    try {
      const res = await axios.delete(`/api/express/${id}`)
      if (res.status === 201) window.location.reload(true)
    } catch (err) { console.log(err) }
  }

  const handlchange = (e) => {
    settodo(e.target.value)
  }

  useEffect(() => {
    try {
      const Todo = async () => {
        const res = await axios.get('/api/express')
        const { todo } = res.data
        set_get_todo(todo)
      }
      Todo()
    } catch (err) { console.log(err) }

  }, [])
  return (
    <div className='cont'>
      <div className='title'>
        <p>
          a todo application, created in express js, react js and mongodb.
          we used Docker for Containerizer the application then we pushed the image to Dockerhub and in the end deploy the application with kubernetese.
          all the source code of the application is available on github, "https://github.com/Avrnikh-iziki", but this demo is only the end of two courses that you will find in freeCodeCamp, so that you can familiarize with those technology together.
        </p>
        <div className='links'>
          <a href='https://www.youtube.com/watch?v=9zUHg7xjIqQ' target="_blanck">docker:Learn Docker - DevOps with Node.js & Express [freecodecamp]</a>
          <a href='https://www.youtube.com/watch?v=d6WC5n9G_sM' target="_blanck">k8s: Kubernetes Course - Full Beginners Tutorial [freecodecamp]</a>
          <a href='https://www.youtube.com/watch?v=X48VuDVv0do' target="_blanck">k8s:Kubernetes Tutorial for Beginners[TechWorld with Nana]</a>
        </div>
      </div>
      <div className='body'>
        <div className='inp'>
          <form onSubmit={handltodo} >
            <input
              type="text"
              placeholder=' add new todo'
              required
              onChange={handlchange}
            />
            <button type='submit'>ADD</button>
          </form>
        </div>
        <div className='data'>
          {
            get_todo?.map((el, index) => {
              return (
                <div className='map' key={index}>
                  <div className='todo-body'>
                    {el.todo}
                  </div>
                  <div className='delete' onClick={() => del(el._id)}>
                    <img className='trush' src="/trash.png" alt='trush' />
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  );
}
export default App;
