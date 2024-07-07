import { readFileSync } from 'fs'
import { type WebAssemblyModule , instantiateSync } from '@assemblyscript/loader'

export const WASM_PATH = `${process.cwd()}`
export const WASM_DEBUG_PATH = `${process.cwd()}/tests/compiled/debug.wasm`

export function run (target: string = WASM_PATH) {
  const buffer: Buffer = readFileSync(target)
  const module: WebAssemblyModule = instantiateSync(buffer)

  return module.exports
}
