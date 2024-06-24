create procedure Insert_Services
(@Services_name varchar (100),@apartment_id int)
AS
BEGIN
            INSERT INTO Services_det
                        (Services_name,
                         apartment_id
                      
						 )

            VALUES   ( @Services_name ,@apartment_id )
        END

		execute Insert_Services 'super market','food','1'
 select * from Services_det;