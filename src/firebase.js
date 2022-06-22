import firebase from 'firebase'
import { ref, onUnmounted } from 'vue'

const config = {
  apiKey: 'AIzaSyCuhD3Nx_71_DicyDLCVEAoaoYJWQ65TNU',

  authDomain: 'vue-crud-acc5a.firebaseapp.com',

  databaseURL: 'https://vue-crud-acc5a-default-rtdb.europe-west1.firebasedatabase.app',

  projectId: 'vue-crud-acc5a',

  storageBucket: 'vue-crud-acc5a.appspot.com',

  messagingSenderId: '595877741073',

  appId: '1:595877741073:web:33a89ad58ecfb13888e7b0'
}

const firebaseApp = firebase.initializeApp(config)

const db = firebaseApp.firestore()

// Projects.
const projectsCollection = db.collection('projects')
export const createProject = project => {
  return projectsCollection.add(project)
}

export const getProject = async id => {
  const project = await projectsCollection.doc(id).get()
  return project.exists ? project.data() : null
}

export const updateProject = (id, project) => {
  return projectsCollection.doc(id).update(project)
}

export const deleteProject = id => {
  return projectsCollection.doc(id).delete()
}

export const useLoadProjects = () => {
  const projects = ref([])
  const close = projectsCollection.onSnapshot(snapshot => {
    projects.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
  })
  onUnmounted(close)
  return projects
}

// Tasks.
const tasksCollection = db.collection('tasks')
export const createTask = task => {
  return tasksCollection.add(task)
}

export const getTask = async id => {
  const task = await tasksCollection.doc(id).get()
  return task.exists ? task.data() : null
}

export const updateTask = (id, task) => {
  return tasksCollection.doc(id).update(task)
}

export const deleteTask = id => {
  return tasksCollection.doc(id).delete()
}

export const useLoadTasks = () => {
  const tasks = ref([])
  const close = tasksCollection.onSnapshot(snapshot => {
    tasks.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
  })
  onUnmounted(close)
  return tasks
}