create procedure Delete_Images
(@images_id int )
AS
BEGIN

  DELETE FROM Images
  WHERE  imag_id = @images_id;
  END