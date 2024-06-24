create procedure Insert_Student
(@Name Varchar(100),@phone Varchar(11),@adress Varchar(100) ,@Eamil varchar (100),@Pasword varchar(100) )
AS
BEGIN
declare @idstud int;
Insert into Users(name,phone,adress,email,pasword) 
VALUES (@Name ,@phone ,@adress ,@Eamil ,@Pasword)
select userid from Users where email=Email;
set @idstud = (select max(userid) from Users where email=Email );
insert into Student values(@idstud,'FCI');
 END
 execute Insert_Student 'Hesham','01063667024','sohage','aslam','Hjxam@gamil','123'
 select * from Users;
 select * from Student;
