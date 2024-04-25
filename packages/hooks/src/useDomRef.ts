import { Ref, RefObject, useImperativeHandle, useRef } from 'react';

export function useDOMRef<T extends HTMLElement = HTMLElement>(
  ref?: RefObject<T | null> | Ref<T | null>,
) {
  const domRef = useRef<T | null>(null);
  useImperativeHandle(ref, () => domRef.current || null);
  return domRef;
}

