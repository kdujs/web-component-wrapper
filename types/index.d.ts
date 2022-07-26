import _Kdu, { Component, AsyncComponent } from 'kdu'

declare function wrap(
  Kdu: typeof _Kdu,
  Component: Component | AsyncComponent
): HTMLElement

export default wrap
