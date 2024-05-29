type CardProps = {
  title?: string;
  subTitle?: string;
  image?: string;
  description?: React.ReactNode | string;
};
export const Card = ({ title, subTitle, image, description }: CardProps) => {
  return (
    <div>
      <div className="flex justify-around font-bold">
        <span> {title} </span>
        <span>{subTitle}</span>
      </div>
      <div className="flex mt-2 items-center">
        <img className="w-24 h-24 pr-2 " src={image} alt="soyHenry" />
        <p>{description}</p>
      </div>
    </div>
  );
};
