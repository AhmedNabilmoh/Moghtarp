create procedure Update_Images
(@imag varchar(500),@apartment_id int)
AS
BEGIN
           Update  Images
		   set
                        imag_id=@imag,
                         apartment_id=@apartment_id
						 
            
        END

		