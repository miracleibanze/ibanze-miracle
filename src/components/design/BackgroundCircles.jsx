const BackgroundCircles = () => {
  return (
    <div className="absolute w-full max-h-screen -z-1 ">
      <div className="absolute top-[13.4rem] left-[10vw] w-3 h-3 bg-gradient-to-b from-[#DD734F] to-[#1A1A32] rounded-full"></div>
      <div className="absolute top-[18.6rem] right-[5vw] w-3 h-3 bg-gradient-to-b from-[#B9AEDF] to-[#1A1A32] rounded-full"></div>
      <div className="absolute top-[20.8rem] left-[5vw] w-6 h-6 bg-gradient-to-b from-[#88E5BE] to-[#1A1A32] rounded-full"></div>
      <div className="absolute top-[9.8rem] right-[5vw] w-6 h-6 bg-gradient-to-b from-[#88E5BE] to-[#1A1A32] rounded-full"></div>
      <div className="absolute bottom-[5.4rem] left-[10vw] w-3 h-3 bg-gradient-to-b from-[#DD734F] to-[#1A1A32] rounded-full"></div>
    </div>
  );
};

export default BackgroundCircles;
