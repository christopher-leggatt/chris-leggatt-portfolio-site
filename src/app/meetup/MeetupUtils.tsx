import { MeetupItemProps } from "../interfaces";

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
        <span className="    ">
          <a href={link} className="text-blue-600 hover:text-blue-800">
            {name}
          </a>
        </span>
      </label>
    </div>
  );
};
