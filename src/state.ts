import { proxy } from 'valtio';
import type { InputData } from './data.d.ts';

export const state = proxy<{ schemaData?: InputData [] }>({
  schemaData: []
});