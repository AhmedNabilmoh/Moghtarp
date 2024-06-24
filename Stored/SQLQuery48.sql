create procedure Insert_Room
(@apartment_id int,@Num_room int,@Price Float,@Price_services float,@num_beds int,@adress varchar(100),@Descrip varchar(100),@Housing_id int)
AS
BEGIN
            INSERT INTO apartment
                        (apartment_id,
                         Num_room,
						 Price,
                         Price_services,
                         num_beds,
						 adress,
                         Descrip,
						 Housing_id
						 )
            VALUES   (  
			             @apartment_id,
                         @Num_room,
						 @Price,
                         @Price_services,
                         @num_beds,
						 @adress,
                         @Descrip,
						 @Housing_id)
        END

		execute Insert_Room '1','450','100','2','hjsacosxzv','1';
 select * from Room;
