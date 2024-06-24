create procedure Insert_Feedback
(@Rate int,@Comment varchar(100),@Student_id int,@apartment_id int )
AS
BEGIN
            INSERT INTO Feedback
                        (Rate,
                         Comment,
                         Student_id,
                        apartment_id
                         
						 
						 )
            VALUES   (@Rate ,@Comment,@Student_id  ,@apartment_id  )
        END
		execute Insert_Feedback '5','gghjgkyf','1','1'
 select * from Feedback;





