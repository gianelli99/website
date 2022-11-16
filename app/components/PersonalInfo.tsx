interface Props {
  image: string;
}

export const PersonalInfoCard = ({ image }: Props) => {
  return (
    <div className="flex justify-between">
      <div className="pr-8">
        <h1>Gianfranco Elli</h1>
        <p>Software Developer.</p>
        <p>
          I love spending time looking 'underneath the hood' to understand the
          magic behind the scenes.
        </p>
      </div>
      <img
        width="130px"
        height="130px"
        src={image}
        alt="Gianfranco Elli"
        className="rounded-full min-h-[130px] min-w-[130px]"
      />
    </div>
  );
};
