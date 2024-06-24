create procedure Update_User
(@Name Varchar(100),@phone Varchar(11),@adress Varchar(100),@Eamil varchar (100),@Pasword varchar(100) )
AS
BEGIN
UPDATE Users 
set
name=@Name,
phone=@phone,
adress=@adress ,
pasword=@Pasword
where email=@Eamil;
END
execute Update_User 'Hesham','01063667024','sohacmkzsge','cdIOMSD','Heshallm@gamil','123'
 select * from Users;