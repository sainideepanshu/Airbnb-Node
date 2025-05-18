import { Request, Response, NextFunction } from "express";
import { createHotelService, getAllHotelsService, getHotelByIdService , softDeleteHotelService } from "../services/hotel.service";
import { StatusCodes } from "http-status-codes";

export async function createHotelHandler(req: Request, res: Response, next: NextFunction) {
    // 1. Call the service layer

    const hotelResponse = await createHotelService(req.body);

    // 2. Send the response

    res.status(StatusCodes.CREATED).json({
        message: "Hotel created successfully",
        data: hotelResponse,
        success: true,
    })
}

export async function getHotelByIdHandler(req: Request, res: Response, next: NextFunction) {
    // 1. Call the service layer

    const hotelResponse = await getHotelByIdService(Number(req.params.id));

    // 2. Send the response

    res.status(StatusCodes.OK).json({
        message: "Hotel found successfully",
        data: hotelResponse,
        success: true,
    })
}

export async function getAllHotelsHandler(req: Request, res: Response, next: NextFunction) {

    // 1. Call the service layer

    const hotelsResponse = await getAllHotelsService();

    // 2. Send the response
    res.status(StatusCodes.OK).json({
        message: "Hotels found successfully",
        data: hotelsResponse,
        success: true,
    });

}

export async function softDeleteHotelHandler(req: Request, res: Response, next: NextFunction) {
        // Call the service layer to soft delete a hotel
        const softDeleteHotelResponse = await softDeleteHotelService(Number(req.params.id)); 
        // Send a success response indicating the hotel was soft deleted
        res.status(StatusCodes.OK).json({  
            success: true,
            message: "Hotel soft deleted successfully",
            data: softDeleteHotelResponse,
        });

}

export async function updateHotelHandler(req: Request, res: Response, next: NextFunction) {

    res.status(StatusCodes.NOT_IMPLEMENTED);
    
}