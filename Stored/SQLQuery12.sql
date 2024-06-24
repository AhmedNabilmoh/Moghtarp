create procedure Update_apartment
(@apartment_id int,@Num_room int,@Price Float,@Price_services float,@num_beds int,@adress varchar(100),@Descrip varchar(100),@Housing_id int)
AS
BEGIN
            Update Room
			set
                  apartment_id=@apartment_id,
                    Num_room     =@Num_room,
					Price	 =@Price,
                        Price_services =@Price_services,
                     num_beds    =@num_beds,
						adress =@adress,
                        Descrip =@Descrip,
						Housing_id =@Housing_id
						 
           
        END

