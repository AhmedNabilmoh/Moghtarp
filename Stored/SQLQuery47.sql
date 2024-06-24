create procedure Insert_Build
(@Build_id  int,@Num_room int,@City varchar(100) ,@Town varchar(100),@Housing_id int)
AS
BEGIN
            INSERT INTO Build
                        (Build_id,
                         Num_room,
                         City,
                         Town,
                         Housing_id
						 
						 )
            VALUES   (@Build_id  ,@Num_room ,@City  ,@Town ,@Housing_id )
        END
		--execute Insert_Build '1','4','sohage','aslam','2'
 --select * from Build;
-- select * from Housing_Owner;