const getCurrentTime= ()=>{
    const currentTime=new Date();
    const h=currentTime.getHours();
    const m=currentTime.getMinutes();
    const TS=h*3600+m*60;
}
module.exports={getCurrentTime}