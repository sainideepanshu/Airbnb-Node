import express from 'express';
import { createHotelHandler, getAllHotelsHandler, getHotelByIdHandler , softDeleteHotelHandler } from '../../controllers/hotel.controller';
import { validateRequestBody } from '../../validators';
import { hotelSchema } from '../../validators/hotel.validator';

const hotelRouter = express.Router();

hotelRouter.post(
    '/', 
    validateRequestBody(hotelSchema),
    createHotelHandler); 

hotelRouter.get('/:id', getHotelByIdHandler); 

hotelRouter.get('/', getAllHotelsHandler);

hotelRouter.delete('/softDeleteById/:id',softDeleteHotelHandler);

export default hotelRouter; 