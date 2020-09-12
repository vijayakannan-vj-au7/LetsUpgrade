import math 
pi = math.pi 

def volume(r, h): 
	return (1 / 3) * pi * r * r * h 
 
def surfacearea(r, s): 
	return pi * r * s + pi * r * r 

radius = float(5) 
height = float(12) 
slat_height = float(13) 
print( "Volume Of Cone : ", volume(radius, height) ) 
print( "Surface Area Of Cone : ", surfacearea(radius, slat_height) ) 
