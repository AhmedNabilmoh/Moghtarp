create procedure Delete_apartment
(@apartment_id int )
AS
BEGIN

  DELETE FROM apartment
  WHERE  apartment_id = @apartment_id
  END