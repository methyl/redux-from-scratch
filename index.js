export function createStore(reducer) {
  let state = reducer(null, {})
  const getState = () => state
  const dispatch = (action) => {
    state = reducer(state, action)
  }
  return { getState, dispatch }
}

// const assert = (assertion, name) => {
//   const el = document.createElement('div')
//   el.innerHTML = assertion ? '✔️ ' + name : '❌ ' + name
//   document.body.appendChild(el)
// }
//
// const assertEqual = (value, desired) =>
//   assert(value === desired, value + ' to equal ' +desired)
//
// const compose = (...fns) => (...args) =>
//   fns.slice(1, fns.length).reverse().reduce((result, fn) =>
//     fn(result), fns[0](...args))
//
// function createStore (reducer, initialState, enhancer) {
//   let listeners = []
//   let state = reducer(initialState, {})
//   const getState = () => state
//
//   const dispatch = (action) => {
//     state = reducer(state, action)
//     listeners.forEach(listener => listener())
//     return action
//   }
//
//   const subscribe = (listener) => {
//     listeners.push(listener)
//     return () => listeners = listeners.filter(l => l !== listener)
//   }
//
//   return enhancer({
//     dispatch,
//     getState,
//     subscribe
//   })
// }
//
// const applyMiddleware = (middleware) => (store) => {
//   const dispatchWithMiddleware = (action) => {
//
//     const mappedMiddleware =
//       middleware.map(m =>
//         m(dispatchWithMiddleware)
//       )
//
//     return compose(...mappedMiddleware)(
//      store.dispatch
//     )(action)
//   }
//   return Object.assign({},
//     store, { dispatch: dispatchWithMiddleware }
//   )
// }
//
// const middleware =
//   (dispatch, getState) =>
//     (next) => (action) => {
//       next(Object.assign({}, {test: 1}, action))
//       return 1
// }
//
// const rootReducer = (state = 0, action) => {
//   return action.test == 1 ? state + 1 : state
// }
//
// const store = createStore(rootReducer, 1, applyMiddleware([middleware]))
//
// assertEqual(store.getState(), 1)
//
// let callCount = 0
// const unsubscribe = store.subscribe(() => callCount += 1)
//
// store.dispatch({ type: 'INCREASE' })
// unsubscribe()
// store.dispatch({ type: 'INCREASE' })
//
// assertEqual(store.getState(), 3)
// assertEqual(callCount, 1)
