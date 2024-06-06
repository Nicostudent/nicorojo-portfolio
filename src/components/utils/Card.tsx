type CardProps = {
  title?: string;
  subTitle?: string;
  image?: string;
  description?: React.ReactNode | string;
};
export const Card = ({ title, subTitle, image, description }: CardProps) => {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-around font-bold text-xs md:text-base	">
        <span> {title} </span>
        <span>{subTitle}</span>
      </div>
      <div className="flex mt-2 items-center">
        <img className="w-24 h-24 pr-2 hidden md:block" src={image} alt="soyHenry" />
        <p className="text-xs	md:text-base">{description}</p>
      </div>
    </div>
  );
};
