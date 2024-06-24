create procedure Delete_Build
(@Build_id int )
AS
BEGIN

  DELETE FROM Build
  WHERE  Build_id = @Build_id
  END