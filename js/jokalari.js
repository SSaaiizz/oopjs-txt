class jokalari{
   
    static getIzena(){
      return this.izena;
    }
    static borrokatu(j2){
    while(j2.osasuna>0 && this.osasuna>0){
      if ( Math.random()* this.indarra > j2.indarra)
          {
          j2.osasuna -= this.indarra;
          }
          else
          {
          this.osasuna -= j2.indarra;
          }
    
    if(j2.osasuna==0){
      return this.izena;
    }else{
      return j2.izena;
    }
    }}
  
  }
  
