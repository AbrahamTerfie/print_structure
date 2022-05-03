import {v4 as uuidv4} from 'uuid';
export const resetFormData = {
    id: uuidv4(),
    name: '',
    description: '',
    link: '',
    children: [],
  }