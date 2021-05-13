class bob { 

    constructor(x,y,r)

    { 
        var options={ isStatic:true,

         restitution:0.3, friction:0.5, density:1.2 }

          this.x=x;

           this.y=y;

           this.r=r

          this.body=Bodies.circle(this.x, this.y, this.r/2, options) 

          World.add(world, this.body);

          bobDiameter=40; startBobPositionX=width/2;
          
           startBobPositionY=height/4+500; 
           
           bobObj1=new bob(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter);
           
            bobObj2=new bob(startBobPositionX-bobDiameter,startBobPositionY,bobDiameter);
            
             bobObj3=new bob(startBobPositionX,startBobPositionY,bobDiameter);
             
              bobObj4=new bob(startBobPositionX+bobDiameter,startBobPositionY,bobDiameter);
          
           bobObj5=new bob(startBobPositionX+bobDiameter*2,startBobPositionY,bobDiameter);
    }
             display() { 

             var paperpos=this.body.position;

              push()

             translate(paperpos.x, paperpos.y); 

             rectMode(CENTER) 

              strokeWeight(3); 

             fill(255,0,255) 

             ellipse(0,0,this.r, this.r); 

             pop() 

            }

             } 