
create procedure Update_Booking
(@Booking_id int,@Check_IN_Date Date,@Reservation_Period varchar(100),@Creditcard varchar(100),@apartment_id  int,@Student_id int)
AS
BEGIN
            Update BOOKING
			set
                        book_id =@Booking_id,
                         booking_Date =@Check_IN_Date,
                         Reservation_Period =@Reservation_Period,
                         Creditcard=@Creditcard,
                         apartment_id =@apartment_id ,
						 Student_id=@Student_id
						
        END












