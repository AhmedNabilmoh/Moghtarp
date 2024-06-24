create procedure Insert_Admin
(@Name Varchar(100),@phone Varchar(11) ,@adress Varchar(100),@Eamil varchar (100),@Pasword varchar(100) )
AS
BEGIN
declare @Admin int;
Insert into Users(name,phone,adress,email,pasword) 
VALUES (@Name ,@phone ,@adress ,@Eamil ,@Pasword)
select userid from Users where email=Email;
set @Admin= (select max(userid) from Users where email=Email );
insert into Admin_ values(@Admin);
 END
 
 execute Insert_Admin 'Hesham','01063667024','sohage','aslam','Heshallm@gamil','123'
 select * from Users;
