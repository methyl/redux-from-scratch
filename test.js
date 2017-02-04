import test from 'tape'
import { createStore } from '.'

test('initializing store', function(t) {
  const reducer = (state, action) => "Hello World"
  const store = createStore(reducer)

  t.equal(store.getState(), "Hello World")

  t.end()
})

test('dispatching actions', function(t) {
  const reducer = (state, action) => `Hello ${action.what || "World"}`
  const store = createStore(reducer)

  t.equal(store.getState(), "Hello World")

  store.dispatch({ what: 'Strategyzer' })
  t.equal(store.getState(), "Hello Strategyzer")

  t.end()
})
