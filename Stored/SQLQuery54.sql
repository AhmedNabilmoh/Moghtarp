create procedure Delete_Booking
(@booking_id int )
AS
BEGIN

  DELETE FROM BOOKING
  WHERE  book_id = @booking_id
  END
