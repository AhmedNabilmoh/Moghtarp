create procedure Insert_Booking
(@Booking_id int,@Check_IN_Date Date,@Reservation_Period varchar(100),@Creditcard varchar(100),@apartment_id  int,@Student_id int)
AS
BEGIN
            INSERT INTO BOOKING
                        (book_id,
                         booking_Date ,
                         Reservation_Period,
                         Creditcard,
                         apartment_id,
						 Student_id
						 )
            VALUES     ( @Booking_id,
                         @Check_IN_Date,
                         @Reservation_Period,
						 @Creditcard,
                         @apartment_id,
                         @Student_id )
        END
		execute Insert_Booking '1','2022/06/1','1Month','13151556132EG','1','1'
 select * from BOOKING;
 select * from Student;
