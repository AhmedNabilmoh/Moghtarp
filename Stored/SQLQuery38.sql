create procedure Insert_Housing_Owner
(@Name Varchar(100),@phone Varchar(11),@adress varchar (100),@Eamil varchar (100),@Pasword varchar(100) )
 AS
BEGIN
declare @Housing_Ownerid int;
Insert into Users(name,phone,adress,email,pasword)
VALUES (@Name ,@phone ,@adress ,@Eamil ,@Pasword)
select userid from Users where email=Email;
set @Housing_Ownerid  = (select max(userid) from Users where email=Email );
insert into Housing_Owner values(@Housing_Ownerid);
 END
  execute Insert_Housing_Owner 'Ahmed','01063667024','sohage','aslam','Ahmed@gamil','123'
 select * from Users;