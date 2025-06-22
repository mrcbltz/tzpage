import Image from 'next/image';

const RoundedImageWithOrnaments = ({ src, alt, width, height }) => {
  return (
    <div className="relative w-fit">
      {/* Ornament before */}
      <div className="absolute top-0 left-0 w-full h-full bg-yellow-200 rounded-full opacity-50 -z-10"></div>
      {/* Ornament after */}
       <div className="absolute bottom-0 right-0 w-full h-full bg-blue-200 rounded-full opacity-50 -z-10"></div>

      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="rounded-full object-cover hover:shadow-primary-foreground-2xl duration-500"
      />
         {/* Ornament before */}
      <div className="absolute top-0 left-0 w-full h-full bg-yellow-200 rounded-full opacity-50 -z-10"></div>
      {/* Ornament after */}
       <div className="absolute bottom-0 right-0 w-full h-full bg-blue-200 rounded-full opacity-50 -z-10"></div>

    </div>
  );
};

export default RoundedImageWithOrnaments;