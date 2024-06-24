create procedure Delete_User
(@Eamil varchar (100) )
AS
BEGIN

  DELETE FROM Users
  WHERE  email = @Eamil
  END
  --execute Delete_User  'Heshallm@gamil'
 --select * from Users;
