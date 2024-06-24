create procedure Insert_Images
(@imag varchar(500),@apartment_id int)
AS
BEGIN
            INSERT INTO Images
                        (imag_id,
                         apartment_id
						 )
            VALUES   (@imag  ,@apartment_id )
        END

		execute Insert_Images 'JDVIVAO','1';
 select * from Images;
 select * from Room;















