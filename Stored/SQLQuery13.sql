create procedure Update_Feedback
(@Rate int,@Comment varchar(100),@Student_id int,@apartment_id int )
AS
BEGIN
           Update Feedback
		   set
                        Rate=@Rate,
                         Comment=@Comment,
                         Student_id=@Student_id,
                         apartment_id=@apartment_id
                           
        END
		





