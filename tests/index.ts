import { test } from 'uvu'
import * as assert from 'uvu/assert'
import { run, WASM_DEBUG_PATH } from '../src/runner'

const { add } = run(WASM_DEBUG_PATH)

test('Simple add test', () => {
  assert.equal(add(1, 2), 3)
})

test.run()
