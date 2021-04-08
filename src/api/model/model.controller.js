import { BadRequestError } from 'error-middleware/errors'

export const get = () => {
    console.log('kajdkads');
    throw new BadRequestError('example')
};