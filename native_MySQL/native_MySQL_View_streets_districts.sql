-- Join for get all streets and districs
use db_api_praiagrande;

desc streets;
CREATE VIEW vw_streets_districts AS
	SELECT s.nm_street as 'Street', d.nm_district as 'District' , d.ds_zone as 'Zone'
		from streets as s inner join districts as d
	ON s.districtIdDistrict = d.id_district;
    
  -- Test
  select * from vw_streets_districts;
  -- Example with filter
select * from vw_streets_districts where Street = 'Tupã';
-- select * from vw_streets_districts where Street = 'nm_street';