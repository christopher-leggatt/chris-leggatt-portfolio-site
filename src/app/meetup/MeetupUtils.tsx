interface MeetupItemProps {
  id?: string;
  name?: string;
  link: string;
  checked: boolean;
}

export const MeetupItem: React.FC<MeetupItemProps> = ({
  id,
  name,
  link,
  checked,
}) => {
  return (
    <div>
      <label htmlFor={id} className="flex items-center justify-start space-x-3">
        <input
          id={id}
          name={id}
          type="checkbox"
          readOnly
          checked={checked}
          className="w-4 h-4 text-teal-500 border-gray-300 rounded focus:ring-teal-500"
        />
        <span>
          <a href={link} target="_blank" className="text-gray-600 dark:text-gray-100">
            {name}
          </a>
        </span>
      </label>
    </div>
  );
};
