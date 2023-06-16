     const convert=(data)=>{
      const second=Math.floor(data % 60);
      const minute= Math.floor((data/60) % 60);
      const hour=Math.floor((data/(60*60)));
      return hour+'H '+minute+'M '+second+'S'
      }
      module.exports=convert