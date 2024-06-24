create procedure Update_Services
(@Services_name varchar (100),@apartment_id  int)
AS
BEGIN
            Update Services_det
			set
                        Services_name=@Services_name,
                       
                         apartment_id =@apartment_id 
                 
           
        END

		