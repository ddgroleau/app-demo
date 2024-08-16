type DashboardAnnouncementProps = {
  title: string;
  date: string;
  onClick: () => void;
};

export default function DashboardAnnouncement({
  title,
  date,
  onClick,
}: DashboardAnnouncementProps) {
  return (
    <div className="flex flex-col gap-1 max-w-[48rem]">
      <h4 className="text-lg font-semibold opacity-70 max-w-fit">{title}</h4>
      <span className="text-xs text-app-secondary opacity-70">{date}</span>
      <small className="mt-3 max-w-[90%] text-app-secondary opacity-70">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos
        ipsa amet, eaque eius eligendi inventore velit exercitationem nisi ipsam
        corporis consequuntur ea sint numquam voluptas autem possimus
        perferendis molestias vitae...
      </small>
      <a
        className="underline text-primary cursor-pointer mt-2 text-xs"
        onClick={onClick}
      >
        Learn More
      </a>
    </div>
  );
}
