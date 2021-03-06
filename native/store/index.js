import { createStore, combineReducers, applyMiddleware } from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import user from './auth'
import users from './users'
import community from './community'
import communities from './communities'
import communityTasks from './community-tasks'
import taskItems from './task-items'
import userScores from './scores'
import pastWinners from './past-winners'
import userHasSeenTutorials from './user-has-seen-tutorials'


const reducer = combineReducers({
  user,
  users,
  community,
  communities,
  communityTasks,
  taskItems,
  userScores,
  pastWinners,
  userHasSeenTutorials,
})
const middleware = composeWithDevTools(applyMiddleware(
  thunkMiddleware,
  createLogger({ collapsed: true })
))
const store = createStore(reducer, middleware)

export default store
export * from './auth'
export * from './users'
export * from './community'
export * from './communities'
export * from './community-tasks'
export * from './task-items'
export * from './scores'
export * from './past-winners'
export * from './user-has-seen-tutorials'
