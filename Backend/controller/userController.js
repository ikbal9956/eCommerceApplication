import ErrorHandler from "../error/error.js";
import User from "../model/schema.js";

export const sendRev = async (req, res, next) => {
  const {
    firstName,
    lastName,
    email,
    country,
    address,
    city,
    region,
    pinCode,
  } = req.body;

  // Check if all fields are present
  if (!firstName || !lastName || !email ||!country || !address || !city || !region || !pinCode) {
    return next(new ErrorHandler("Please fill out the entire form!", 400));
  }

  try {
    // Create a new user document
    const newUser = new User({
      firstName,
      lastName,
      email,
      country,
      address,
      city,
      region,
      pinCode,
    });
    await newUser.save();

    // Send a success response
    res.status(200).json({
      success: true,
      message: "Reservation is successful!",
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      const validationErrors = Object.values(error.errors).map(
        (err) => err.message
      );
      return next(new ErrorHandler(validationErrors.join(", "), 400));
    }

    next(error);
  }
};
